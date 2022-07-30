let wordsDOM=document.querySelector("#words");
let typeDOM=document.querySelector("#type");
let scoreDOM=document.querySelector("#score");

let knownWords=0;



wordsDOM.value=["selam","merhaba","dünya"]
let newArray=wordsDOM.value.split(",")



typeDOM.addEventListener("input",checkWords);



function checkWords()
{
    for(let i=0;i<newArray.length;i++)
    {
        
        if(newArray[i]===typeDOM.value){
            typeDOM.value="";
            console.log(wordsDOM.value.split(",")[0].style.color='green')
            knownWords++;
        }
    }
     scoreDOM.innerHTML =` <h2> Score : ${knownWords} `
}




