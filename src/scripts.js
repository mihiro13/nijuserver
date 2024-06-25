function changeTable() {
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    var tables = document.getElementsByTagName("table");
    for (var i = 0; i < tables.length; i++) {
        tables[i].style.display = "none";
    }
    document.getElementById(selectedValue).style.display = "table";
}
