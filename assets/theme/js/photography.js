// Change this to show a different number of images
const backdropDiv = document.getElementById("backdrop-photo");
const backdropImg = document.getElementById("backdrop-photo-img");

backdropDiv.onclick = () => { backdropDiv.hidden = true }


if (false) {
  function openPhoto(imgSrc) {
    console.log("Opening photo")
  }

  function checkImage(src) {
    let retval = false;
    var http = new XMLHttpRequest();
    http.open('HEAD', src, false);
    http.send();
    return http.status != 404;
  }

  // Global to pass value to other functions
  photoList = []

  function downloadFile(file) {
    const xhr = new XMLHttpRequest();
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const port = window.location.port;
    const baseUrl = `${protocol}//${hostname}:${port}/`;
    const fullAddress = baseUrl + file;

    console.log("fullAddress: " + fullAddress);
    xhr.overrideMimeType('text/plain, charset = x-user-defined');
    xhr.open('GET', fullAddress, false); // Replace with your file's URL
    xhr.send(null);

    if (true) {
      const textData = xhr.responseText;

      console.log(textData);

      listOf = textData.split("\n");
      listOf = listOf.filter(str => str != '');
      listStr = "";

      listOf.forEach((value) => {
        listStr += value + "\n\r";
      });
      window.photoList = listOf.slice(); // get real copy, not a reference

      console.log(listStr);
    }
  }
}

function populatePhotos() {
  const NUM_PHOTOS = 100;

  const SOURCE_START = "assets/theme/images/photography/photo-";
  const SOURCE_START2 = "assets/theme/images/photography/";
  downloadFile('assets/theme/images/photography/photo_list.txt');

  console.log(window.photoList);

  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  const port = window.location.port;
  const baseUrl = `${protocol}//${hostname}:${port}/`;
  //const fullAddress = baseUrl + file;

  for (let photo of window.photoList) {
    const photoFullPath = SOURCE_START2 + photo;
    if (checkImage(photoFullPath)) {
      var img = document.createElement("img");
      img.src = photoFullPath;
      img.loading = "lazy";
      //console.log("doing something with" + src);
      img.onclick = (event) => {
        console.log("opening photo")
        backdropDiv.hidden = false
        backdropImg.src = event.target.src
      }
      document.getElementById("photo-gallery").appendChild(img);

    }
  }
}

populatePhotos()
