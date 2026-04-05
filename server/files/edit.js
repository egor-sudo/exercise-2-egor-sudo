window.onload = function () {

  const params = new URLSearchParams(window.location.search); // read URL params
  const id = params.get("imdbID"); // get imdbID from URL

  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    const movie = JSON.parse(xhr.responseText); // parse movie

    const genresSelect = document.getElementById("Genres");
    if (genresSelect && movie.Genres) {
      for (let i = 0; i < genresSelect.options.length; i++) {
        const opt = genresSelect.options[i];
        opt.selected = movie.Genres.includes(opt.value);
      }
    }

    // fill form fields with movie data
    document.getElementById("imdbID").value = movie.imdbID;
    document.getElementById("Title").value = movie.Title;
    document.getElementById("Released").value = movie.Released;
    document.getElementById("Runtime").value = movie.Runtime;
    document.getElementById("Plot").value = movie.Plot;
    document.getElementById("Poster").value = movie.Poster;
    document.getElementById("imdbRating").value = movie.imdbRating;
    document.getElementById("Directors").value = (movie.Directors || []).join(", ");
    document.getElementById("Writers").value = (movie.Writers || []).join(", ");
    document.getElementById("Actors").value = (movie.Actors || []).join(", ");
  };

  xhr.open("GET", "/movies/" + id); // request single movie
  xhr.send();
};

function putMovie() {
  const genresSelect = document.getElementById("Genres");
  const selectedGenres = [];
  for (let i = 0; i < genresSelect.options.length; i++) {
    if (genresSelect.options[i].selected) {
      selectedGenres.push(genresSelect.options[i].value);
    }
  }

  function splitToArray(str) {
    if (!str) return [];
    return str.split(",").map(s => s.trim()).filter(s => s.length > 0);
  }

  const movie = {
    imdbID: document.getElementById("imdbID").value,
    Title: document.getElementById("Title").value,
    Released: document.getElementById("Released").value,
    Runtime: document.getElementById("Runtime").value,
    Plot: document.getElementById("Plot").value,
    Poster: document.getElementById("Poster").value,
    imdbRating: Number(document.getElementById("imdbRating").value),

    Genres: selectedGenres,
    Directors: splitToArray(document.getElementById("Directors").value),
    Writers: splitToArray(document.getElementById("Writers").value),
    Actors: splitToArray(document.getElementById("Actors").value)
  };

  const xhr = new XMLHttpRequest();

  xhr.open("PUT", "/movies/" + movie.imdbID);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(movie));

  xhr.onload = function () {
    location.href = "index.html";
  };
}