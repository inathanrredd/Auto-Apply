console.log("Auto-apply has started");

let labels = document.getElementsByTagName('label');

for (elt of labels) {
    console.log("In loop")
    if (elt && elt.innerText) {
        console.log(elt.innerText);
    }
}

console.log("Auto apply finished");