const imgContainer = document.getElementById("image-container");
getImages();
async function getImages() {
  const resp = await fetch("https://server-trial-ouew.onrender.com/images");
  const data = await resp.json();
  for (let i = 0; i < data.length; i++) {
    const img = document.createElement("img");
    console.log(img);
    img.src = data[i];
    imgContainer.appendChild(img);
  }
}
