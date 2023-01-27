const getSong = async function () {
  try {
    let dataSongs = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=coldplay"
    );

    if (dataSongs.ok) {
      let data = await dataSongs.json();
      let songs = data.data;
      let contenitore = document.querySelector("#container-cards");
      for (let i = 5; i < 8; i++) {
        contenitore.innerHTML =
          contenitore.innerHTML +
          `  <div class="card col-10 col-md-3 m-3 p-0 shadow mb-5 bg-body-tertiary rounded">
                  <img src="${songs[i].album.cover_big}" class="img-fluid" style="height: 60%" alt="Cover song">
                  <div class="card-body p-3 d-flex flex-column justify-content-evenly ">
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
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=coldplay"
    );

    if (dataSongs.ok) {
      let data = await dataSongs.json();
      let songs = data.data;
      let contenitoreSong = document.querySelector("#container-song");
      for (let i = 0; i < 1; i++) {
        contenitoreSong.innerHTML =
          contenitoreSong.innerHTML +
          ` <div class="card text-bg-dark shadow p-3 mb-5 bg-body-dark rounded ">
          <img src="${songs[15].album.cover_big}" class="card-img" alt="Cover song">
          <div class="card-img-overlay">
            <h5 class="card-title">${songs[15].album.title}</h5>
            <p class="card-text">${songs[15].artist.name}</p>
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

let annoCorrenteSpan = document.getElementById("annoCorrente");
let annoCorrente = new Date().getFullYear();
annoCorrenteSpan.innerText = annoCorrente;
