import './style.scss'
// keep the line above and write your code below.
// interface Country{
//     name:{
//         common:string;
//     };
//     flag: string;
//     region:string;
// }
// document.addEventListener("DOMContentLoaded",async()=>{
//     const table = document.getElementsByTagName(('table'))[0];
//     console.log(table)

//     const response = await fetch("https://restcountries.com/v3.1/all");
//     const countries: Country[] = await response.json();
    
//     const tableHead = document.createElement('thead');
//     const headerName = document.createElement('th');
//     headerName.innerText = "Name";
    

//     const headerRegion = document.createElement('th');
//     headerName.innerText = "Region";
   
//     tableHead.appendChild(headerName, headerRegion);
//     table.appendChild(tableHead);
// } )


const fruits:string[] = ['avocado','banana','apple','pomegranate',
'pumpkin','tomato'];

const paragraph:string = `Many common language terms used for fruit and seeds
differ from botanical classifications. For example, in botany, a fruit
is a ripened ovary or carpel that contains seeds; e.g., an apple,
pomegranate, tomato or a pumpkin. A nut is a type of fruit (and not a
seed), and a seed is a ripened ovule.[4] In culinary language, a fruit
is the sweet- or not sweet- (even sour-) tasting produce of a specific
plant (e.g., a peach, pear or lemon); nuts are hard, oily, non-sweet
plant produce in shells (hazelnut, acorn). Vegetables, so called,
typically are savory or non-sweet produce (zucchini, lettuce,
broccoli, and tomato); but some may be sweet-tasting (sweet
potato).[5]`

let fruitlist = document.querySelector('.fruitlist');

function insertTolist(lst:string[]){
    for (let i = 0; i < lst.length; i++){
        console.log(lst[i]);
        fruitlist.innerHTML += `<li id=${lst[i]}>${lst[i]}</li>`;

    }
    
}


function triangleIfInPar(paragraph:string){
    for (let i = 0; i < fruits.length; i++){
        if (paragraph.includes(fruits[i])){
            let thefruit = document.getElementById(fruits[i])
            thefruit.classList.add('isInParagraph')

        }
    }
}
insertTolist(fruits);
triangleIfInPar(paragraph);
