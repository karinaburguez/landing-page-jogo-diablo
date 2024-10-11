const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container

ScrollReveal().reveal(".header_icons", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header_container a", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header_container .crew h4", {
    ...scrollRevealOption,
    delay: 1500,
});

// about container
ScrollReveal().reveal(".about_container .about_image", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".about_container .about_image.image_1", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".about_content", {
    ...scrollRevealOption,
    delay: 500,
});

//cast container

ScrollReveal().reveal(".cast_card", {
    ...scrollRevealOption,
    interval: 500,
});

// media container
ScrollReveal().reveal(".media_card", {
    ...scrollRevealOption,
    interval: 500,
});