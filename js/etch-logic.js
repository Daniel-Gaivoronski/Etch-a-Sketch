function theGrid() {
    let aGrid = document.createElement("DIV");
    aGrid.setAttribute("id","container");
    document.body.appendChild(aGrid);
    
    
    // creating our 16 x 16 grid
    for (let x = 0;x < 16;x++) {
        for (let y = 0;y< 16;y++) {
            let addSquare = document.createElement("DIV");
            addSquare.setAttribute("class","oneSquare");
                          
            addSquare.addEventListener('mouseover',function(e) {
                e.target.style.cursor = 'pointer';
                e.target.style.background = randomColor();
            });
            
                             
            document.getElementById("container").appendChild(addSquare);                  
        }               
    }
    resetAndNew();
}

function resetAndNew() {
    let theReset = document.getElementById("reset");
   
    theReset.addEventListener('click', () => {
        var elements = document.getElementsByClassName('oneSquare');     
        
        for (var x = 0;x < elements.length;x++) {
            elements[x].style.backgroundColor = "white";
        }   
   
   
        let newGrid = prompt('Please enter the size for your new grid');
        customGrid(newGrid);
    
    });
}

function customGrid(number) {
    const theNum = number;
    if (isNaN(theNum) || theNum === "") {
        document.getElementById("container").style.visibility = "hidden";
    }
    else {
        document.getElementById("container").style.visibility = "visible";
        document.getElementById("container").innerHTML = " ";
        document.getElementById("container").style["grid-template-columns"] = "repeat(" + theNum + ",1fr)";
        document.getElementById("container").style["grid-template-rows"] = "repeat(" + theNum + ",1fr)";
        for (let x = 0; x < theNum;x++) {
            for (let y = 0;y < theNum;y++) {
                let addSquare = document.createElement("DIV");
                addSquare.setAttribute("class","oneSquare");
            
                addSquare.addEventListener('mouseover',function(e) {
                    e.target.style.cursor = 'pointer';
                    e.target.style.background = randomColor();
                
                });
                
                document.getElementById("container").appendChild(addSquare);
                     
            }
        }
    
 
    }
   

}


function randomColor() {
    let anArray = [];
    for (var x = 0;x < 3;x++) {
        var randomNum = Math.floor(Math.random() * 256);
        anArray.push(randomNum);
    }
    let randomRgb = 'rgb(' + anArray[0] + ',' + anArray[1] + ',' + anArray[2] + ')';
    
    return randomRgb;
}