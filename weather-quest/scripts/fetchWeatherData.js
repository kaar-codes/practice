export function FetchWeatherData(query) {
  const t = this;
  console.log(t.state.isWeekly);
  const uri = `https://api.openweathermap.org/data/2.5/${t.state.isWeekly ? "forecast" : "weather"}?appid=28bcf38c60e275fdc4ec350975c54696&${query}`;
  fetch(uri)
    .then((res) => res.json())
    .then(({ main, wind }) => {
      console.log(main, wind);
      t.state.body = structuredClone({ main, wind });
    })
    .catch((err) => console.log(err));
}
