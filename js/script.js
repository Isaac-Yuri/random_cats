const button_random_cat = document.getElementById("button-random-cat");
const cats_area = document.getElementById("cats");
const api = "https://api.thecatapi.com/v1/images/search";

button_random_cat.addEventListener('click', () => {    
    fetch(api)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            let image_url = json[0].url;
            addNewCat(image_url)
        })
        .catch(error => console.error(error))
})

function addNewCat(url) {
    cats_area.innerHTML += `<img src="${url}" class="cat-box" />`
}