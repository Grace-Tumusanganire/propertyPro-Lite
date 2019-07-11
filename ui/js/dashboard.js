function addHtmlTableRow()
{
var table = document.getElementById("table"),
    newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0);
    cell12 = newRow.insertCell(1);
    cell13 = newRow.insertCell(2);
    cell14 = newRow.insertCell(3);
    cell15 = newRow.insertCell(4);
    cell16 = newRow.insertCell(5);
     hi = document.getElementById("hi").value,
     tp = document.getElementById("tp").value,
     st = document.getElementById("st").value,
     pr = document.getElementById("pr").value,
     oc = document.getElementById("oc").value,
     hv = document.getElementById("hv").value,

cell1.innerHTML = hi;
cell12.innerHTML = tp;
cell12.innerHTML = st;
cell12.innerHTML = pr;
cell12.innerHTML = oc;
cell12.innerHTML = hv;
}

function selectedRowToInput ()
{
    var rIndex,table = document.getElementById("table");
    for (var i = 0; i< table.rows.length; i++);{
        table.rows[i].onclick = function (){
            rIndex = this.rowIndex;
            console.log(rIndex);
        }
        
    };
};
selectedRowToInput();







