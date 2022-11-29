/*function opensidebar() {
    document.getElementById("sidenavbar").style.left = "150px";
    document.getElementById("header").style.left = "150px"; 
}
function closesidebar() {
    document.getElementById("sidenavbar").style.width = "0";
}*/

function togglesidebar(){
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("header").style.left = "0";
    document.body.classList.toggle("active");
  }