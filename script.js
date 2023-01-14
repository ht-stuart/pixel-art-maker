/*
//Colorful Wave
const colorPicker = document.getElementById('colorPicker');
const heading = document.getElementById('headingContainer');
let randColor = Math.floor(Math.random() * 255);
headingContainer.addEventListener('mousemove', function (e) {
    heading.style.color = "rgb("+e.offsetX+","+e.offsetY+", 40)"
});
*/
function makeTable() {

    //Table/Grid + main variables
    const table = document.getElementById('customTable');
    const subButton = document.getElementById("createButton");
    const originalHTML = table.innerHTML;
    const heading = document.getElementById('headingContainer')
    const colorPicker = document.getElementById('colorPicker');

    //Creates table/grid based of of user input
    subButton.addEventListener("click", function (e) {
        e.preventDefault();
        table.innerHTML = originalHTML;
        let rows = document.getElementById("tableRows").value;
        let cols = document.getElementById("tableCells").value;
        for (let i = 0; i < rows; i++) {
            const height = document.createElement("tr")
            for (let j = 0; j < cols; j++) {
                const width = document.createElement('td');
                let colData = document.createTextNode(" ");
                width.appendChild(colData);
                height.append(width);
            }
            table.append(height);
        }
        // Loop that targets each cell in table/grid
        const tableColorList = document.getElementsByTagName('td');
        for (let i = 0; i < tableColorList.length; i++) {
            tableColorList[i].addEventListener('click', function () {
                tableColorList[i].style.backgroundColor = colorPicker.value;
                heading.style.color = colorPicker.value;
            })
        }
    })

};

makeTable();