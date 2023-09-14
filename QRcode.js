let qrText = document.querySelector(".inputbox");
let qrimage = document.querySelector("img");
let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    console.log(qrText.value); 
function generateQR(){
    qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " + qrText.value;
 console.log(qrText.value);

}
if(qrText.value == "")
{
   alert("Enter the name or URL first");
}

generateQR(qrimage);
});




