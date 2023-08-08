import { drawProduct } from "./drawProduct.js";
import { buttonSearch, inputSearch, paginationNext, paginationPrev, painationNumber, params, replace, sortProduct } from "./varibles.js";

drawProduct();

// search
const search = () => {
    params.q = inputSearch.value;
    replace();
    drawProduct();
}

buttonSearch.addEventListener("click", () => {
    search();
})

inputSearch.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        search();
    }
})
// End search
// sort
sortProduct.addEventListener("change", (e) => {
    console.log(e.target);
    switch (e.target.value) {
        case "mac-dinh" :
            params.sort = "";
            params.order = "";
            replace();
            break;
        case "gia-thap-den-cao" :
            params.sort = "price";
            params.order = "asc";
            replace();
            break;
        case "gia-cao-den-thap" :
            params.sort = "price";
            params.order = "desc";
            replace();
            break;
        case "giam-gia-nhieu" :
            params.sort = "discountPercentage";
            params.order = "desc";
            replace();
            break;
        default:
            break;
    }
    drawProduct();
})
// End sort
// pagination
paginationPrev.addEventListener("click", () => {
    if(params.page > 1) {
        params.page = params.page - 1;
        painationNumber.innerHTML = params.page;
        drawProduct();
    }
})

paginationNext.addEventListener("click", () => {
    params.page = params.page + 1;
    painationNumber.innerHTML = params.page;
    drawProduct();
})
// End pagination
