const tombol = document.querySelectorAll("button");
const isi = document.getElementById("hasil");

for (let i = 0; i < tombol.length; i++){
     tombol[i].addEventListener("click", ()=>{
     const tomobolIsi = tombol[i].textContent;
    if(tomobolIsi === "C"){
        clearResult();
    }else if (tomobolIsi === "="){
      calculateResult();
    } else{appendValue(tomobolIsi);
     }
    });
}


function  appendValue(tomobolIsi){
    isi.value =  isi.value + tomobolIsi
};

function  calculateResult(){
    isi.value = eval(isi.value)
};
function  clearResult(){
    isi.value = "";
}


