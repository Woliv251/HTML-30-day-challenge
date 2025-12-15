const [firstSection, secondSection, thirdSection] = document.querySelectorAll("section");
const tab1 = document.querySelector("#tab-1");
const tab2 = document.querySelector("#tab-2");
const tab3 = document.querySelector("#tab-3");

tab1.addEventListener("click", function(){
    if (firstSection.getAttribute("hidden") != "hidden"){
        secondSection.toggleAttribute("hidden");
        thirdSection.toggleAttribute("hidden");
    }else
    firstSection.toggleAttribute("hidden");
});


tab2.addEventListener("click", function() {
    if (secondSection.getAttribute("hidden") != "hidden"){
        firstSection.toggleAttribute("hidden");
        secondSection.toggleAttribute("hidden");
    }else
    thirdSection.toggleAttribute("hidden");
});


tab3.addEventListener("click", function() {
    if (thirdSection.getAttribute("hidden") != "hidden"){
        thirdSection.toggleAttribute("hidden");
        firstSection.toggleAttribute("hidden");
    }else
    thirdSection.toggleAttribute("hidden");
});
