//модальное окно
var search_buttom = document.querySelector("#search");
var search_modal = document.querySelector(".search-modal");
var close = document.querySelector(".map");
var form = search_modal.querySelector(".serch-form");
var adults = search_modal.querySelector("#adults");
var children = search_modal.querySelector("#children");
var storage_adults = localStorage.getItem("storage_adults");
var storage_children = localStorage.getItem("storage_children");

search_buttom.addEventListener("click", function(event) {
    event.preventDefault();
    search_modal.classList.toggle("search-modal-hidden");
});
close.addEventListener("click", function(event) {
    if (!search_modal.classList.contains("search-modal-hidden")) {
        search_modal.classList.add("search-modal-hidden");
    }
});
form.addEventListener("submit", function(event) {
    if (adults.value == 0 && children.value >= 0) {
        event.preventDefault();
    } else {
        localStorage.setItem("storage_adults", adults.value);
        localStorage.setItem("storage_children", children.value);
    }
});
if (storage_adults) {
    adults.value = storage_adults;
}
if (storage_children) {
    children.value = storage_children;
}


var plus = search_modal.querySelectorAll(".plus");
var minus = search_modal.querySelectorAll(".minus");
for (var i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', function(event) {
        event.preventDefault();
        var input = this.parentNode.querySelector("input");
        input.value = parseInt(input.value) + 1;
    });
}
for (var i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', function(event) {
        event.preventDefault();
        var input = this.parentNode.querySelector("input");
        var value = parseInt(input.value) - 1;
        if (value > 0) {
            input.value = value;
        } else {
            input.value = 0;
        }
    });
}

function fff(name) {
    name.value = name.value.replace(',', '.');
    if (!/^\.?$/.test(name.value) && !isFinite(name.value)) {
        name.value = parseFloat(name.value) || name.value.slice(0, -1);
    }
    (name.value < 1 || name.value > 86400) && (name.value = 0);
};