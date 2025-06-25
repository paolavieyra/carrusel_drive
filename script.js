const endpoint = "https://script.google.com/macros/s/AKfycbylodRBByTL4j1y22Pwu3SLAyku3Kpaye4d9TJfCfaysMb6B3WS0tKwFLoKJ9IXCQpB/exec";
const carousel = document.getElementById("carousel");

fetch(endpoint)
  .then(res => res.json())
  .then(urls => {
    if (!urls.length) {
      carousel.innerHTML = "<p>No se encontraron imágenes.</p>";
      return;
    }

    urls.forEach((url, i) => {
      const img = document.createElement("img");
      img.src = url.trim();
      if (i === 0) img.classList.add("active");
      carousel.appendChild(img);
    });

    let index = 0;
    const imgs = carousel.querySelectorAll("img");

    setInterval(() => {
      imgs[index].classList.remove("active");
      index = (index + 1) % imgs.length;
      imgs[index].classList.add("active");
    }, 5000);
  })
  .catch(err => {
    console.error("Error al cargar imágenes:", err);
    carousel.innerHTML = "<p>Error al cargar las imágenes. Revisa consola.</p>";
  });
