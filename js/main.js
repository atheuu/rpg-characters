// Seleciona a imagem e o container
const imageContainer = document.querySelector(".image-container");
const image = document.querySelector(".image");

// Função que calcula o movimento da imagem com base na posição do mouse
imageContainer.addEventListener("mousemove", (e) => {
  const { width, height, left, top } = imageContainer.getBoundingClientRect();
  const centerX = left + width / 2;
  const centerY = top + height / 2;

  const deltaX = e.clientX - centerX;
  const deltaY = e.clientY - centerY;

  // Reduzindo a intensidade do movimento
  const moveX = (deltaX / width) * 2; // Diminuído para 10
  const moveY = (deltaY / height) * 2; // Diminuído para 10

  // Aplica o movimento 3D na imagem
  image.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
});

// Resetar a imagem quando o mouse sair
imageContainer.addEventListener("mouseleave", () => {
  image.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
});
