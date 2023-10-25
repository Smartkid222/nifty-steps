const allImages = document.querySelectorAll(".img");
const lightbox = document.querySelector(".lightbox");
const downloadImgBtn = lightbox.querySelector(".uil-import");
const closeImgBtn = lightbox.querySelector(".close-icon")

allImages.forEach(img => {
    // Calling showLightBox function with passing clicked img src as argument
    img.addEventListener("click", () => showLightbox(img.querySelector("img").src));
});



const downloadImg = (imgUrl) => {
    // Converting received img to blob, creating its download link, & downloading it
    fetch(imgUrl).then(res => res.blob()).then(blob => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = new Date().getTime();
        a.click();
    }).catch(() => alert("Failed to download image!"));
}

const showLightbox = (img) => {
    // Showing lightbox and updating img source
    lightbox.querySelector("img, home").src = img;
    lightbox.querySelector("span").innerText = name;
    downloadImgBtn.setAttribute("data-img", img);
    lightbox.classList.add("show");
    document.body.style.overflow = "hidden";
}



closeImgBtn.addEventListener("click", () => {
    // Hiding lightbox on close icon click
    lightbox.classList.remove("show");
    document.body.style.overflow = "auto";
});




// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .img");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));


  
  