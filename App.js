const container = document.querySelector(".main");
const generateBtn = document.querySelector(".submit");
const val = document.querySelector("#input");
const imgSrc = document.querySelector("#img");

generateBtn.addEventListener("click",()=>{
    let qrContent = val.value;
    if(qrContent=='')return;
    container.classList.add("active");
    imgSrc.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrContent}`;
});