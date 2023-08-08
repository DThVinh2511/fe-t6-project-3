import { API_CATEGORIES } from "./contant.js";
import { drawProduct } from "./drawProduct.js";
import { fetchApi } from "./fetchApi.js";
import { categorie, inputSearch, painationNumber, params, replace } from "./varibles.js";



fetchApi(API_CATEGORIES) 
    .then(data => {
        let htmls = data.map (item => {
            return `
                <div class="categories__item" data-categories = "${item}">
                    ${item}
                </div>
            `;
        })
        categorie.innerHTML = htmls.join("");
        const categories = document.querySelectorAll(".categories .categories__item");
        categories.forEach(item => {
            item.addEventListener("click", () => {
                replace();
                params.category = item.getAttribute("data-categories");
                inputSearch.value = "";
                params.q = "";
                drawProduct();
            })
        })
    })