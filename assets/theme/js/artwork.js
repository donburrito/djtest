
function populateArtwork() {
  const SOURCE_START2 = "assets/theme/images/artwork/";

  console.log(window.photoList);
  const ARTWORK_DIRECTORY = "assets/theme/images/artwork/"
  downloadFile(ARTWORK_DIRECTORY + 'photo_list.txt');
 
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  const port = window.location.port;
  const baseUrl = `${protocol}//${hostname}:${port}/`;

  for (let photo of window.photoList) {
    const photoFullPath = ARTWORK_DIRECTORY + photo;
    if (checkImage(photoFullPath)) {
      var img = document.createElement("img");
      img.src = photoFullPath;
      img.loading = "lazy";
      //console.log("doing something with" + src);
      img.onclick = (event) => {
        console.log("opening art piece")
        backdropDiv.hidden = false
        backdropImg.src = event.target.src
      }
      document.getElementById("art-gallery").appendChild(img);

    }
  }
}

populateArtwork()
