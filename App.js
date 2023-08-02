const toggleMenuOpen = () => document.body.classList.toggle("open");

function seeMore() {
    let dots = document.getElementById("dots");
    let moreProject = document.getElementById("more");
    let btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "SEE MORE";
        moreProject.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "SEE LESS";
        moreProject.style.display = "inline";
    }
}