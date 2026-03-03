document.querySelectorAll(".camera-preview-wrapper").forEach(wrapper => {

    wrapper.addEventListener("click", function () {

        const img = this.querySelector(".camera-preview");
        const imagePath = img.getAttribute("src");

        window.location.href =
            `camera-view.html?img=${encodeURIComponent(imagePath)}`;

    });

});