// Global to pass value to other functions
photoList = []

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


function downloadFile(file) {
  const xhr = new XMLHttpRequest();
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  const port = window.location.port;
  const baseUrl = `${protocol}//${hostname}:${port}/djtest/`;
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