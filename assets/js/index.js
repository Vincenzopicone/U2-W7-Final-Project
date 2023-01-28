const getSong = async function () {
  try {
    let dataSongs = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=coldplay"
    );

    if (dataSongs.ok) {
      let data = await dataSongs.json();
      let songs = data.data;
      let contenitore = document.querySelector("#container-cards");
      for (let i = 13; i < 16; i++) {
        contenitore.innerHTML =
          contenitore.innerHTML +
          `  <div class="card rounded col-10 col-md-3 m-3 p-0 shadow mb-5 bg-body-tertiary ">
                  <img src="${songs[i].album.cover_big}" class="img-fluid" style="height: 60%" alt="Cover song">
                  <div class="card-body p-3 d-flex flex-column justify-content-evenly bg-dark text-light">
                    <h5 class="card-title" id="modale">${songs[i].album.title}</h5>
                    <h3 class="card-text"> ${songs[i].artist.name}</h3>
                    <h6 id="song-rank"> ${songs[i].rank} </h6>
                  </div>
                </div> `;
      }
    } else {
      console.log("Qualcosa non ha funzionato");
    }
  } catch (error) {
    console.log(error);
  }
};

getSong();

const favoriteSong = async function () {
  try {
    let dataSongs = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=oasis"
    );

    if (dataSongs.ok) {
      let data = await dataSongs.json();
      let songs = data.data;
      let contenitoreSong = document.querySelector("#container-song");
      for (let i = 0; i < 1; i++) {
        contenitoreSong.innerHTML =
          contenitoreSong.innerHTML +
          ` <div class="card text-bg-dark shadow p-0 mb-5 bg-body-dark rounded ">
          <img src="${songs[12].album.cover_big}" class="card-img" alt="Cover song">
          <div class="card-img-overlay">
            <h5 class="card-title">${songs[12].album.title}</h5>
            <p class="card-text">${songs[12].artist.name}</p>
          </div>
        </div> `;
      }
    } else {
      console.log("Qualcosa non ha funzionato");
    }
  } catch (error) {
    console.log(error);
  }
};

favoriteSong();

const favoriteAlbum = async function () {
  try {
    let dataAlbum1 = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=sum41"
    );
    let dataAlbum2 = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=beatles"
    );
    let dataAlbum3 = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=muse"
    );

    if (dataAlbum1.ok && dataAlbum2.ok && dataAlbum3.ok) {
      let data1 = await dataAlbum1.json();
      let data2 = await dataAlbum2.json();
      let data3 = await dataAlbum3.json();
      let songs1 = data1.data;
      let songs2 = data2.data;
      let songs3 = data3.data;
      let contenitoreAlbum = document.querySelector("#container-carousel");
      for (let i = 0; i < 1; i++) {
        contenitoreAlbum.innerHTML =
          contenitoreAlbum.innerHTML +
          `  <div class="carousel-item active">
              <img src="${songs1[0].album.cover_big}" class="d-block w-80" alt="Cover Album">
              <div class="carousel-caption d-block bg-secondary rounded">
                <h5 id="modale">${songs1[0].album.title}</h5>
                <p>${songs1[0].artist.name}</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="${songs2[3].album.cover_big}" class="d-block w-80" alt="...">
              <div class="carousel-caption d-block bg-secondary rounded">
                <h5 id="modale">${songs2[3].album.title}</h5>
                <p>${songs2[3].artist.name}</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="${songs3[1].album.cover_big}" class="d-block w-80" alt="...">
              <div class="carousel-caption d-block bg-secondary rounded">
                <h5 id="modale">${songs3[1].album.title}</h5>
                <p>${songs3[1].artist.name}</p>
              </div>
            </div>
          `;
      }
    } else {
      console.log("Qualcosa non ha funzionatoSS");
    }
  } catch (error) {
    console.log(error);
  }
};

favoriteAlbum();

const arrayTitoliAlbum = () => {
  let contenitoreAlbumModale = document.getElementById("container-title");
  let album = document.querySelectorAll("h5");
  album.forEach((titolo) => {
    contenitoreAlbumModale.innerHTML =
      contenitoreAlbumModale.innerHTML + `<p> ${titolo.textContent} </p>`;
  });
};

const arrayRank = () => {
  let contenitoreRankModale = document.getElementById("container-rank");
  let rank = document.querySelectorAll("h6");
  rank.forEach((numero) => {
    rank;
    contenitoreRankModale.innerHTML =
      contenitoreRankModale.innerHTML + `<p> ${numero.textContent} </p>`;
  });
};

let annoCorrenteSpan = document.getElementById("annoCorrente");
let annoCorrente = new Date().getFullYear();
annoCorrenteSpan.innerText = annoCorrente;
