/** Select color input and store */
const colorPicker = document.getElementById("colorPicker");

/** Select size input and store */
const sizePicker = document.getElementById("sizePicker");

/** Store DOM elements */
const pixelCanvas = document.getElementById("pixelCanvas");

/** Creates grid after "Submit" is clicked */
sizePicker.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});

/** Creates grid and adds color to cells */
function makeGrid() {
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    pixelCanvas.innerHTML = null;
    for (var r = 0; r < height; r++) {
        let row = pixelCanvas.insertRow(r);
        for (var c = 0; c < width; c++) {
            let column = row.insertCell(c);
            column.addEventListener('click', function() {
                column.style.backgroundColor = colorPicker.value;
            });
        }
    }
};
