export function FetchWeatherData(query) {
  const t = this;
  const uri = `https://api.openweathermap.org/data/2.5/${t.state.isWeekly ? "forecast" : "weather"}?appid=28bcf38c60e275fdc4ec350975c54696&units=metric&${query}`;
  fetch(uri)
    .then((res) => res.json())
    .then((resData) => {
      console.log(resData);
      if (!t.state.isWeekly) {
        const {
          name,
          sys: { country },
          coord: { lat, lon },
          wind: { speed },
          main: { humidity, pressure, temp },
          weather: [{ icon }],
        } = resData;

        // Get the Current Date
        const dt = new Date();
        const intlOpts = {
          day: "2-digit",
          month: "short",
          hour12: false,
        };
        const formatter = new Intl.DateTimeFormat("en-IN", intlOpts);
        const date = formatter
          .formatToParts(dt)
          .map(({ value }) => value.toUpperCase())
          .join("");

        t.state = structuredClone({
          isWeekly: t.state.isWeekly,
          body: structuredClone({
            name,
            country,
            lat,
            lon,
            humidity,
            speed,
            pressure,
            temp,
            icon,
            date,
          }),
        });
      } else {
        const {
          list,
          city: {
            name,
            country,
            coord: { lat, lon },
          },
        } = resData;

        const dts = new Set();
        const dtsArr = new Array();
        const allData = new Array();
        const records = new Array();

        for (const {
          dt,
          main: { pressure, humidity, temp },
          weather: [{ icon }],
          wind: { speed },
        } of Object.values(list)) {
          const ms = dt * 1000;
          const date = new Date(ms);
          const intlOpts = {
            day: "2-digit",
            month: "short",
            hour12: false,
          };
          const formatter = new Intl.DateTimeFormat("en-IN", intlOpts);

          const localeDate = formatter
            .formatToParts(date)
            .map(({ value }) => value.toUpperCase())
            .join("");

          dtsArr.push(localeDate);

          allData.push({
            date: localeDate,
            pressure,
            humidity,
            icon,
            speed,
            temp,
          });

          // Limit the Date ranges for 5 including the current date
          if (dts.size < 5) dts.add(localeDate);
        }

        // Pick the Unique data based on the date values
        for (const x of dts) {
          for (const [i, y] of Object.entries(dtsArr)) {
            if (x === y) {
              records.push(allData.at(i));
              break;
            }
          }
        }

        const { date, pressure, speed, humidity, temp, icon } = records.at(0);

        t.state = structuredClone({
          isWeekly: t.state.isWeekly,
          body: structuredClone({
            name,
            date,
            country,
            lat,
            lon,
            records,
            humidity,
            pressure,
            speed,
            temp,
            icon,
          }),
        });
      }
    })
    .catch((err) => console.log(err));
}
