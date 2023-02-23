const fulImgBox = document.querySelector("#fulImgBox"),
  fulImg = document.querySelector("#fulImg"),
  gallery = document.querySelector(".img-gallery");

function openFulImg(reference) {
  fulImgBox.style.display = "flex";
  fulImg.src = reference;
}
function closeImg() {
  fulImgBox.style.display = "none";
}

function carregaImgs() {
  let imgs = "";
  for (let i = 0; i <= 24; i++) {
    imgs += `<img src="imgs/${i}.jpeg" onclick="openFulImg(this.src)" alt="desenho">`;
  }
  gallery.innerHTML = imgs;
}
