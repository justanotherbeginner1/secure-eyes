let searchToggle = document.getElementById("search-toggle");
let searchInput = document.getElementById("mobile-search-input");

searchToggle.addEventListener("click", function(e){
    e.stopPropagation(); 
    searchInput.classList.toggle("active");
    searchInput.focus();
});

document.addEventListener("click", function(e){
    if (!searchToggle.contains(e.target) &&
        !searchInput.contains(e.target)) {

        searchInput.classList.remove("active");
    }
});

//  GLOBAL SEARCH
searchInput.addEventListener("keyup", function () {

    const searchValue = this.value.toLowerCase();

    const searchableItems = document.querySelectorAll(
        ".camera-card, .settings-card, #logBody tr"
    );

    searchableItems.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(searchValue) ? "" : "none";
    });

});


//  ALERT PAGE LOCAL SEARCH
const alertSearch = document.getElementById("alert-search");

if (alertSearch) {

    alertSearch.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();
        const rows = document.querySelectorAll("#logBody tr");

        rows.forEach(row => {
            const text = row.innerText.toLowerCase();
            row.style.display = text.includes(value) ? "" : "none";
        });

    });

}