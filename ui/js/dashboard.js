
function addHtmlTableRow()
{
var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0);
    cell2 = newRow.insertCell(1);
    cell3 = newRow.insertCell(2);
    cell4 = newRow.insertCell(3);
    cell5 = newRow.insertCell(4);
    cell6 = newRow.insertCell(5);
     hi = document.getElementById("hi").value,
     tp = document.getElementById("tp").value,
     st = document.getElementById("st").value,
     pr = document.getElementById("pr").value,
     oc = document.getElementById("oc").value,
     hv = document.getElementById("hv").value,

cell1.innerHTML = hi;
cell2.innerHTML = tp;
cell3.innerHTML = st;
cell4.innerHTML = pr;
cell5.innerHTML = oc;
cell6.innerHTML = hv;

}






