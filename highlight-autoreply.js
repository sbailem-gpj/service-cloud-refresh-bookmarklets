let tablehandle = document.getElementsByClassName("uiVirtualDataTable")[1];
let rows = tablehandle.getElementsByTagName('tr');

let x = 0;

while ( x < rows.length ) {
    x++;
    let row = rows[x];
    let subject = row.getElementsByTagName('td')[4].innerText;
    if (subject.startsWith("Automatic reply:")) {
        row.style.backgroundColor = "orange"
    }
}
