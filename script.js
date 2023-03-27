let popupVisible = true;

window.addEventListener("scroll", () => {
    if(window.scrollY == 0)
    {
        navbar.style.height = "90px";
    }
    else
    {
        navbar.style.height = "60px";
    }

    if(window.scrollY >= 200)
    {
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = "translateX(0)";
    }
    else
    {
        imgImprovise.style.opacity = 0;
        imgImprovise.style.transform = "translateX(-200px)";
    }

    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight && popupVisible)
    {
        popup.style.opacity = 1;
        popup.style.transform = "translateX(0)";
    }
});

closeBtn.addEventListener("click", () => {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(400px)";
    popupVisible = false;
});

