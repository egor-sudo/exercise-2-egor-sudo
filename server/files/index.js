window.onload = function () { // run when page loads

  const xhr = new XMLHttpRequest(); // create request

  xhr.onload = function () {
    const movies = JSON.parse(xhr.responseText); // convert JSON → JS objects

    const container = document.getElementById("movies"); // get container div

    for (let i = 0; i < movies.length; i++) { // loop through movies
      const movie = movies[i]; // current movie

      const article = document.createElement("article"); // create container
      article.id = movie.imdbID; // set id for element

      const title = document.createElement("h2"); // create title
      title.textContent = movie.Title; // set title text

      const img = document.createElement("img"); // create image
      img.src = movie.Poster; // set image source

      const plot = document.createElement("p");
      plot.textContent = movie.Plot;

      const info = document.createElement("p"); // create info paragraph
      info.textContent =
        "Released: " + movie.Released +
        " | Runtime: " + movie.Runtime +
        " | Rating: " + movie.imdbRating;

      const genresDiv = document.createElement("div");
      movie.Genres.forEach(g => {
        const span = document.createElement("span");
        span.textContent = g;
        span.className = "genre";
        genresDiv.appendChild(span);
      });

      const extra = document.createElement("p");
      extra.textContent =
        "Directors: " + movie.Directors.join(", ") + " | " +
        "Writers: " + movie.Writers.join(", ") + " | " +
        "Actors: " + movie.Actors.join(", ") + " | " +
        "Metascore: " + movie.Metascore;

      const button = document.createElement("button"); // create edit button
      button.textContent = "Edit";

      button.onclick = function () {
        // go to edit page with id
        location.href = "edit.html?imdbID=" + movie.imdbID;
      };

      // append elements to article
      article.appendChild(title);
      article.appendChild(img);
      article.appendChild(info);
      article.appendChild(button);
      article.appendChild(plot);
      article.appendChild(genresDiv);
      article.appendChild(extra);

      // append article to page
      container.appendChild(article);
    }
  };

  xhr.open("GET", "/movies"); // request all movies
  xhr.send(); // send request
};