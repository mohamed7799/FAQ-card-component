// variables

let faq_section = document.getElementById("faq-section-js");

let arrows = document.getElementsByClassName("arrow-js");

let answers = document.getElementsByClassName("answer");

let state = 0;

// fun

let check = (item, _class) => item.classList.contains(_class);
let add = (item, _class) => item.classList.add(_class);
let remove = (item, _class) => item.classList.remove(_class);
let toggle = (item, _class) => check(item, _class) ? remove(item, _class) : add(item, _class);

let reset = () => {
    for (const arrow of arrows) {
        remove(arrow, "arrow-up");
    }
    for (const answer of answers) {
        add(answer, "hidden");
    }

}

// event listenrs

faq_section.addEventListener("click", (eve) => {
    let arrow = eve.target;
    let hiddenTarget = arrow.parentElement.nextElementSibling;
    reset();
    if (check(arrow, "arrow-js")) {
        toggle(arrow, "arrow-up");
        toggle(hiddenTarget, "hidden");

    }
    else {
        reset()
    }
})
