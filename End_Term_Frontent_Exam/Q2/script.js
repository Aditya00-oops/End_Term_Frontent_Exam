let btn = document.getElementById("toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    btn.innerText = "Light mode";
}

btn.onclick = function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.innerText = "Light mode";
        localStorage.setItem("theme", "dark");
    }
    else {
        btn.innerText = "Dark mode";
        localStorage.setItem("theme", "light");
    }
};