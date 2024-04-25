const button_random_cat = document.getElementById("button-random-cat");
const cats_area = document.getElementById("cats");
const loading = document.getElementById("loading");
const api = "https://api.thecatapi.com/v1/images/search";

button_random_cat.addEventListener("click", () => {
  loading.classList.add("show"); // Mostra o texto de carregamento
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let image_url = json[0].url;
      addNewCat(image_url);
    })
    .catch((error) => console.error(error))
    .finally(() => {
      loading.classList.remove("show"); // Remove o texto de carregamento após o término da requisição
    });
});

function addNewCat(url) {
  cats_area.innerHTML = `<img src="${url}" class="cat-image" />`;
}
