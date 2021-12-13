/*
  URL: "https://imdb8.p.rapidapi.com/title/find?q=Star%20Wars"
  "x-rapidapi-host": "imdb8.p.rapidapi.com"
  "x-rapidapi-key": "7dc4683476msh81675cd0e90bd2bp17842ejsn3357aee41f0a"
*/

fetch("https://imdb8.p.rapidapi.com/title/find?q=Star%20Wars", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "7dc4683476msh81675cd0e90bd2bp17842ejsn3357aee41f0a",
  },
})
  .then(async (response) => {
    const { results } = await response.json();
    const formattedResults = [];
    let currentIndex = 0;

    while (formattedResults.length < 5) {
      let currentResult = results[currentIndex];
      if (!currentResult.title) {
        currentIndex++;
        continue;
      }

      const {
        title,
        year,
        image: { url },
      } = currentResult;
      formattedResults.push({
        title,
        year,
        image: url,
      });
      currentIndex++;
    }
    makeMoviePoster(formattedResults);
  })
  .catch((err) => {
    throw new Error(err);
  });

function makeMoviePoster(movies) {
  const posterContainer = document.querySelector("#poster-container");
  movies.forEach(({ title, year, image }) => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");

    const poster = document.createElement("img");
    poster.src = image;
    poster.alt = title;
    poster.width = 200;
    poster.height = 300;
    movieContainer.appendChild(poster);

    const titleNode = document.createElement("h1");
    titleNode.textContent = `${title} - ${year}`;
    movieContainer.appendChild(titleNode);

    posterContainer.appendChild(movieContainer);
  });
}
