const image = document.querySelector('.image');
const navigation = document.querySelector('.navigation');
const body = document.querySelector('body');

// Função para verificar se os elementos estão carregados
function checkIfLoaded() {
  if (image.complete && navigation) {
    body.classList.add('show');
  }
}

// Se a imagem já estiver em cache (caso o carregamento seja rápido)
if (image.complete) {
  image.onload(); // Força a execução imediata
}

const imageContainer = document.querySelector(".image-container");
const imageElement = document.querySelector(".image");

// Função que calcula o movimento da imagem com base na posição do mouse
imageContainer.addEventListener("mousemove", (e) => {
  const { width, height, left, top } = imageContainer.getBoundingClientRect();
  const centerX = left + width / 2;
  const centerY = top + height / 2;

  const deltaX = e.clientX - centerX;
  const deltaY = e.clientY - centerY;

  const moveX = (deltaX / width) * 2;
  const moveY = (deltaY / height) * 2;

  // Aplica o movimento 3D na imagem
  imageElement.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
});

// Resetar a imagem quando o mouse sair
imageContainer.addEventListener("mouseleave", () => {
  imageElement.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
});
