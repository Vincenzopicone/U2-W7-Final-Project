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
                    <h5 class="card-title">${songs[i].album.title}</h5>
                    <h3 class="card-text"> ${songs[i].artist.name}</h3>
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
          ` <div id="carouselExampleCaptions" class="carousel w-80">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="${songs1[0].album.cover_big}" class="d-block w-80" alt="Cover Album">
              <div class="carousel-caption d-block bg-secondary rounded">
                <h5 id="titoloAlbum">${songs1[0].album.title}</h5>
                <p>${songs1[0].artist.name}</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="${songs2[3].album.cover_big}" class="d-block w-80" alt="...">
              <div class="carousel-caption d-block bg-secondary rounded">
                <h5 id="titoloAlbum">${songs2[3].album.title}</h5>
                <p>${songs2[3].artist.name}</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="${songs3[1].album.cover_big}" class="d-block w-80" alt="...">
              <div class="carousel-caption d-block bg-secondary rounded">
                <h5 id="titoloAlbum">${songs3[1].album.title}</h5>
                <p>${songs3[1].artist.name}</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>  `;
      }
    } else {
      console.log("Qualcosa non ha funzionato");
    }
  } catch (error) {
    console.log(error);
  }
};

favoriteAlbum();

function showAlbum() {
  let album = document.querySelectorAll("#titoloAlbum");
  console.log(album);
  let titoloAlbum = [];
  album.forEach((e) => {
    titoloAlbum.push(e);
    return titoloAlbum;
  });
  alert("Questi sono gli album:", titoloAlbum);
}

let annoCorrenteSpan = document.getElementById("annoCorrente");
let annoCorrente = new Date().getFullYear();
annoCorrenteSpan.innerText = annoCorrente;
