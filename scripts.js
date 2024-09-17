// Adding bootstrap class names to .left, .right, .split, .card
// Makes it so that I don't have to repeat myself too many times
// Also, I will only need to change the classes in one place to affect all of the elements

// Adding bootstrap to .left
const leftDivs = document.querySelectorAll(".left");
for (let i = 0; i < leftDivs.length; i++) {
    leftDivs[i].classList.add("col-lg-8", "col-md-12", "col-sm-12", "p-0");
}

// Adding bootstrap to .right
const rightDivs = document.querySelectorAll(".right");
for (let i = 0; i < rightDivs.length; i++) {
    rightDivs[i].classList.add("col-lg-4", "col-md-12", "col-sm-12", "d-flex", "flex-column", "p-3", "justify-content-end", "gap-2", "p-2");
}

// Adding bootstrap to .split
const splitDivs = document.querySelectorAll(".right");
for (let i = 0; i < splitDivs.length; i++) {
    splitDivs[i].classList.add("d-flex", "container-fluid", "p-0");
}

// Adding bootstrap to testimonial cards
const cardDivs = document.querySelectorAll(".testCard");
for (let i = 0; i < cardDivs.length; i++) {
    cardDivs[i].classList.add("col-md-4", "col-sm-12", "d-flex", "flex-column", "p-1", "gap-3", "fs-2", "text-center", "m-0", "b-0");
}