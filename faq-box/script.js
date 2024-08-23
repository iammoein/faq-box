"use strict";
const headerEl = document.querySelectorAll(".faq-header");
headerEl.forEach((header) => {
    header.addEventListener("click", () => {
        const faqContent = header.nextElementSibling;
        const plusIcon = header.querySelector(".plus-icon");
        const minusIcon = header.querySelector(".minus-icon");
        if (faqContent.classList.contains("active")) {
            faqContent.classList.remove("active");
            minusIcon.style.display = "none";
            plusIcon.style.display = "block";
        }
        else {
            faqContent.classList.add("active");
            minusIcon.style.display = "block";
            plusIcon.style.display = "none";
        }
    });
});
