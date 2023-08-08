export let params = {
    q: "",
    sort: "",
    order: "",
    page: 1,
    limit: "6",
    category: ""
}
export const replace = () => {
    params.page = 1;
    painationNumber.innerHTML = params.page;
}

export const categorie = document.getElementById("categories");
export const inputSearch = document.querySelector("#search input");
export const buttonSearch = document.querySelector("#search button");
export const sortProduct = document.querySelector("#sort");
export const paginationPrev = document.querySelector(".pagination__Prev");
export const painationNumber = document.querySelector(".pagination__Number");
export const paginationNext = document.querySelector(".pagination__Next");
export const product = document.getElementById("products");