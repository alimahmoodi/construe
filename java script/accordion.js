document.querySelectorAll(".accordion__item").forEach(function(item) {
    item.addEventListener("click", function(e) {
        var element = e.currentTarget;
        let paragraphHeight = element.querySelector(".heading-text--accordion")
            .offsetHeight;
        var accordion_height = element.querySelector(".accordion__paragraph")
            .offsetHeight;
        let accordionParagraph = element.querySelector(".accordion__paragraph");
        let accordionHeading = element.querySelector(
            ".heading-secondary--accordion"
        );

        console.log(accordion_height);
        if (accordion_height > 0) {
            accordionParagraph.style.height = 0;
            accordionParagraph.style.marginBottom = "0";
            accordionHeading.style.color = "black";
        } else if (accordion_height == 0) {
            accordionParagraph.style.height = paragraphHeight + "px";
            accordionParagraph.style.marginBottom = "2rem";
            accordionHeading.style.color = "#7F74C7";
        }
    });
});
