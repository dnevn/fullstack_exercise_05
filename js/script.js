document.getElementById("submitBtn").onclick = function () {
    // alert("Button was clicked!");
    let radios = document.getElementsByName("block");
    let selectedValue = null;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedValue = "li" + radios[i].id;
            break;
        }
    }
    alert("Selected value: " + selectedValue);
};
console.log("Button clicked!");