/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsiveMenu() {
    var x = document.getElementById("navbarMenu");
    if (x.className === "navbar-item-menu") {
        x.className += " responsive";
    } else {
        x.className = "navbar-item-menu";
    }
} 

