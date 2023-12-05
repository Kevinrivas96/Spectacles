document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector("header");
    var footer = document.querySelector("footer");
    var mastHead = document.querySelector(".masthead");
    var mineralOption = document.querySelector("#mineral");
    var carbonOption = document.querySelector("#carbon");
    var container = document.querySelector(".product-container");
    var text = document.querySelector(".content-area");
    var btn = document.querySelector("#buynow");
    var product = document.querySelector("#product");

    // Add Fading Effect to the NavBar
    document.addEventListener("scroll", function () {
        // Change transparency based on scroll position
        const scrollPosition = window.scrollY;

        if (scrollPosition === 0) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
            mastHead.style.backgroundColor = "rgba(0, 0, 0, 30%)";
        } else if (scrollPosition > 0 && scrollPosition <= 100) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
            mastHead.style.backgroundColor = "rgba(0, 0, 0, 40%)";
        } else {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            mastHead.style.backgroundColor = "rgba(0, 0, 0, 40%)";
        }
    });

    // Change Stacking order of Footer to make items clickable
    document.addEventListener('scroll', function () {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = Math.round(window.scrollY + window.innerHeight) + 2;

        if (currentScroll >= documentHeight) {
            footer.style.zIndex = "1";
        } else {
            footer.style.zIndex = "-1";
        }
    });

    // change the background image depending on user selection
    function checkOption() {
        if (mineralOption.checked) {
            container.style.backgroundImage = 'url("./imgs/global_discover_DT_specs3_mineral.webp")';
            text.style.color = "#000";
            btn.style.borderColor = "#000";
            btn.style.color = "#000";
            product.style.backgroundImage = 'url("./imgs/Spectacles3Mineral.webp")';
            product.style.backgroundColor = "#e6cfaf";

        } else {
            container.style.backgroundImage = 'url("./imgs/global_discover_DT_specs3_carbon.webp")';
            text.style.color = "#FFF";
            btn.style.borderColor = "#FFF";
            btn.style.color = "#FFF";
            product.style.backgroundImage = 'url("./imgs/Spectacles3Carbon.webp")';
            product.style.backgroundColor = "#303030";
        }
    }

    mineralOption.addEventListener("click", checkOption);
    carbonOption.addEventListener("click", checkOption);

});
