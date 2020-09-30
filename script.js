function openPortfolio() {
    for (let i = 3; i < 10; i++) {
        setTimeout(() => {
            document.getElementById("portfolio_" + i).style.display = "block";
        }, i * 200);
    }

}
function closePortfolio() {
    for (let i = 9; i > 2; --i) {
        setTimeout(() => {
            document.getElementById("portfolio_" + i).style.display = "none";
        }, 2500 / i);
    }
}

function hideContent() {
    document.getElementById("hello").style.display = "none";
    document.getElementById("contact-me").style.display = "none";
    document.getElementById("about-me").style.display = "none";
}

document.getElementById("portfolio-btn").addEventListener("click", (event) => {
    if (event.target.attributes[2].value == 1) {
        openPortfolio();
        document.getElementById("portfolio-btn").attributes[2].value = 2
    } else {
        closePortfolio();
        document.getElementById("portfolio-btn").attributes[2].value = 1
    }

});

document.getElementById("contact-btn-1").addEventListener("click", (event) => {
    hideContent()
    document.getElementById("contact-me").style.display = "block";
});

document.getElementById("contact-btn-2").addEventListener("click", (event) => {
    hideContent()
    document.getElementById("contact-me").style.display = "block";
});

document.getElementById("about-btn").addEventListener("click", (event) => {
    hideContent()
    document.getElementById("about-me").style.display = "block";
});




