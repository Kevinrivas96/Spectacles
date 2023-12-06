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
            if (product) {
                product.style.backgroundImage = 'url("./imgs/Spectacles3Mineral.webp")';
                product.style.backgroundColor = "#e6cfaf";
            }
            mobile();

        } else {
            container.style.backgroundImage = 'url("./imgs/global_discover_DT_specs3_carbon.webp")';
            text.style.color = "#FFF";
            btn.style.borderColor = "#FFF";
            btn.style.color = "#FFF";
            if (product) {
                product.style.backgroundImage = 'url("./imgs/Spectacles3Carbon.webp")';
                product.style.backgroundColor = "#303030";
            }
            mobile();
        }
    }

    mineralOption.addEventListener("click", checkOption);
    carbonOption.addEventListener("click", checkOption);

    function mobile() {
        var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (browserWidth <= 970 && mineralOption.checked) {
            container.style.backgroundImage = 'url("./imgs/global_discover_mobile_specs3_mineral.webp")';
            if (product) {
                product.style.backgroundImage = 'url("./imgs/Spectacles3Mineral.webp")';
                product.style.backgroundColor = "#e6cfaf";
            }
        } else if (browserWidth <= 970 && carbonOption.checked) {
            container.style.backgroundImage = 'url("./imgs/global_discover_mobile_specs3_carbon.webp")';
            if (product) {
                product.style.backgroundImage = 'url("./imgs/Spectacles3Carbon.webp")';
                product.style.backgroundColor = "#303030";
            }
        } else if (browserWidth > 970 && mineralOption.checked) {
            container.style.backgroundImage = 'url("./imgs/global_discover_DT_specs3_mineral.webp")';
            if (product) {
                product.style.backgroundImage = 'url("./imgs/Spectacles3Mineral.webp")';
                product.style.backgroundColor = "#e6cfaf";
            }
        } else if (browserWidth > 970 && carbonOption.checked) {
            container.style.backgroundImage = 'url("./imgs/global_discover_DT_specs3_carbon.webp")';
            if (product) {
                product.style.backgroundImage = 'url("./imgs/Spectacles3Carbon.webp")';
                product.style.backgroundColor = "#303030";
            }
        }

        console.log(browserWidth);
    }

    window.addEventListener("resize", mobile);
});
