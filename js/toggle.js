$("#customSwitch1").on("click", () => {
    swapStyleSheet()
})

function swapStyleSheet(){
    let cssLink = document.getElementById("cssTheme");
    let currHref = cssLink.getAttribute("href");
    if (currHref === "./light.css") {
        cssLink.setAttribute("href", "./dark.css")
        $("#customSwitch1Label").html("&larr;")
    } else {
        cssLink.setAttribute("href", "./light.css")
        $("#customSwitch1Label").html("&rarr;")
    }
}