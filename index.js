const buttonsEl = document.querySelectorAll("button");
const inputField = document.getElementById("result");
for(let i = 0; i <buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", ()=>{
    const button = buttonsEl[i].textContent;

        if(button == "C"){
            clearResult();
        }
        else if(button == "="){
            calculateResults();
        }
        else if(button == "Del"){
            deleteNum(button);
        } else{
            appendValue(button);
        }
    })
}

function clearResult(){
    inputField.value = "";
}

function calculateResults(){
    inputField.value = eval(inputField.value);
}

function deleteNum(){
    inputField.value = inputField.value.slice(0, -1);
}
function appendValue(button){
   inputField.value += button;
}