const toggle = $("#customSwitch1");

if (localStorage.getItem("theme") !== null ){
    if (localStorage.getItem("theme").includes("dark.css")) {
        toggle.prop("checked", true);
        setStyleSheet("dark")
        $("#customSwitch1Label").html("&larr;");
    } else {
        toggle.prop("checked", false);
        setStyleSheet("light")
        $("#customSwitch1Label").html("&rarr;");
    }
}

toggle.on("click", () => {
    swapStyleSheet()
})

function swapStyleSheet() {
    let cssLink = document.getElementById("cssTheme");
    let currHref = cssLink.getAttribute("href");
    let currUrl = window.location.href;
    let directory = currUrl.includes("/blog_posts/") ? ".." : ".";

    if (currHref === `${directory}/light.css`) {
        let theme = `${directory}/dark.css`;
        cssLink.setAttribute("href", theme);
        $("#customSwitch1Label").html("&larr;");
        localStorage.setItem("theme", theme);
        localStorage.setItem("arrow", "&larr;");
    } else {
        let theme = `${directory}/light.css`;
        cssLink.setAttribute("href", theme);
        $("#customSwitch1Label").html("&rarr;");
        localStorage.setItem("theme", theme);
        localStorage.setItem("arrow", "&rarr;")
    }
}

function setStyleSheet(sheet) {
    let cssLink = document.getElementById("cssTheme");
    let currHref = cssLink.getAttribute("href");
    let currUrl = window.location.href;
    let directory = currUrl.includes("/blog_posts/") ? ".." : ".";
    let theme = `${directory}/${sheet}.css`;

    cssLink.setAttribute("href", theme);
}