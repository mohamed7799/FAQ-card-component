// variables

let faq_section = document.getElementById("faq-section-js");

let arrows = document.getElementsByClassName("arrow-js");

let items = document.querySelectorAll(".items");

let answers = document.getElementsByClassName("answer");

// fun

let check = (item, _class) => item.classList.contains(_class);
let add = (item, _class) => item.classList.add(_class);
let remove = (item, _class) => item.classList.remove(_class);
let toggle = (item, _class) =>
  check(item, _class) ? remove(item, _class) : add(item, _class);

let reset = () => {
  for (const arrow of arrows) {
    remove(arrow, "arrow-up");
  }
  for (const answer of answers) {
    add(answer, "hidden");
  }
};

// event listner
window.addEventListener("click", function (e) {
  if (faq_section.contains(e.target)) {
    // click inside the container
    let item = e.target;
    let arrow = item.firstElementChild;

    reset();
    if (check(item, "quest")) {
      toggle(arrow, "arrow-up");
      let hiddenTarget = item.nextElementSibling;
      toggle(hiddenTarget, "hidden");
    }
  } else {
    //click outside the container
    reset();
  }
});
