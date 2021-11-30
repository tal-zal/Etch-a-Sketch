var widthBlocks = 16;
var heightBlocks = 16;



for (let i = 0; i < 16; i++){
    
    const overallContainer = document.querySelector(".container");
    const container = document.createElement('div');
    container.classList.add('rowContainer');

    for (let n = 0; n < 16; n++){
        const block = document.createElement('div');
        block.classList.add("block");
        block.addEventListener("mouseover", () => {
            block.classList.add("hoverOver")
        })

        let vWidth = 98 / widthBlocks; // used with 98 viewport width
        let vHeight = 90 / heightBlocks; // used with 90 viewport height

        

        block.style.width = vWidth + "vw";
        block.style.height = vHeight + "vh";



        //block.textContent = "B";
        container.appendChild(block);
    }   
        overallContainer.appendChild(container);

}