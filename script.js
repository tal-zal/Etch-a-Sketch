var pressureSensitivity = 0.5;
var color;

function removeAllChildNodes(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function removeGrid(){
    const container = document.querySelector(".container");
    removeAllChildNodes(container);
}

function initialLoad(widthHeight = 100){
    var widthHeightBlocks = widthHeight;
    for (let i = 0; i < widthHeightBlocks; i++){
        
        const overallContainer = document.querySelector(".container");
        const container = document.createElement('div');
        container.classList.add('rowContainer');

        for (let n = 0; n < widthHeightBlocks; n++){
            const block = document.createElement('div');
            block.classList.add("block");
            block.addEventListener("click", () => {
                block.style.opacity -= "-" + pressureSensitivity;
                block.style.backgroundColor = color;
            })
            block.addEventListener("mouseover", (e) => {
                
                if (e.buttons == 1){ //if mouse click is down
                    block.style.opacity -= "-" + pressureSensitivity;
                    block.style.backgroundColor = color;
                }
            })
            let vWidth = 98 / widthHeightBlocks; // used with 98 viewport width
            let vHeight = 90 / widthHeightBlocks; // used with 90 viewport height
            block.style.width = vWidth + "vw";
            block.style.height = vHeight + "vh";

            container.appendChild(block);
        }   
            overallContainer.appendChild(container);
    }
}

function changeGrid(){
    let widthHeight = prompt("What width and height grid do you want?")
    if (widthHeight > 100 || widthHeight < 1){
        alert("Number must be between 1 and 100!")
        return;
    }
    removeGrid();
    initialLoad(widthHeight);
}

function changeColor(e){
    color = e.target.value;
}

function changeSensitivity(e){
    pressureSensitivity = e.target.value / 100;
}


document.getElementById("newButton").addEventListener("click", changeGrid);
document.getElementById("color").addEventListener("input", changeColor);
document.getElementById("pressure").addEventListener("input", changeSensitivity)
changeGrid();