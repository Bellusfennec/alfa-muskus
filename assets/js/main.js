const accordionAll = document.querySelectorAll(".answer__accordion-button");
const accordionNumber = document.querySelectorAll(".answer__accordion-number");

for (let i = 0; i < accordionAll.length; i++) {
  accordionAll[i].addEventListener("click", function() {

    this.classList.toggle("active");
    accordionNumber[i].classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    
  });
}