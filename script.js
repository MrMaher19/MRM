document.addEventListener("DOMContentLoaded", function () {
    var seeProgramsBtn = document.getElementById("seeProgramsBtn");
    var learnMoreBtn = document.getElementById("learnMoreBtn");

    // Function to set the original styles of the buttons
    function setOriginalStyles(btn) {
        btn.innerHTML = btn.id === "seeProgramsBtn" ? "SEE PROGRAMS" : "LEARN MORE";
        btn.style.backgroundColor = "transparent";
        btn.style.color = "rgb(254, 230, 198)";
        btn.style.border = "2px solid rgb(254, 230, 198)";
        btn.style.fontSize = "18px";
    }

    // Add click event listeners to the buttons
    seeProgramsBtn.addEventListener("click", function () {
        seeProgramsBtn.innerHTML = "OOPS! SORRY";
        seeProgramsBtn.style.backgroundColor = "rgb(170, 63, 63)";
        seeProgramsBtn.style.color = "white";
        seeProgramsBtn.style.border = "1px solid rgb(170, 63, 63)";
        seeProgramsBtn.style.fontSize = "20px";
    });

    learnMoreBtn.addEventListener("click", function () {
        learnMoreBtn.innerHTML = "OOPS! SORRY";
        learnMoreBtn.style.backgroundColor = "rgb(170, 63, 63)";
        learnMoreBtn.style.color = "white";
        learnMoreBtn.style.border = "1px solid rgb(170, 63, 63)";
        learnMoreBtn.style.fontSize = "20px";
    });

    // Add mouseout event listeners to the buttons to restore original styles
    seeProgramsBtn.addEventListener("mouseout", function () {
        setOriginalStyles(seeProgramsBtn);
    });

    learnMoreBtn.addEventListener("mouseout", function () {
        setOriginalStyles(learnMoreBtn);
    });

    // Add mouseover event listeners to restore styles on hover
    seeProgramsBtn.addEventListener("mouseover", function () {
        setOriginalStyles(seeProgramsBtn);
        seeProgramsBtn.style.backgroundColor = "rgb(178, 150, 112)";
        seeProgramsBtn.style.fontSize = "22px";
    });

    learnMoreBtn.addEventListener("mouseover", function () {
        setOriginalStyles(learnMoreBtn);
        learnMoreBtn.style.backgroundColor = "rgb(178, 150, 112)";
        learnMoreBtn.style.fontSize = "22px";
    });
});
