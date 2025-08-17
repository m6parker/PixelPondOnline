
// switch tabs/pages
function openTab(event, tabName) {
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" selected", "");
    }

    document.getElementById(tabName).style.display = "grid";
    event.currentTarget.className += " selected";
}
