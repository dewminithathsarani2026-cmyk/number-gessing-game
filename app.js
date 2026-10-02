console.log("hello");
let number = Math.floor(Math.random() *10 +1);
let count=3;
function guessBtnOnAction(){

console.log(number);
    let num= document.getElementById("num").value;
    if(number==num && count!=0){
        console.log("Correct! You win...")
      Swal.fire({
  title: "You Win..!",
  icon: "success",
  draggable: true
});
    }else if (number>num && count!=0) {
      console.log(num+" is too low. Go higher.")
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: num+" is too low. Go higher." ,
  footer: "<a href=\"#\">Why do I have this issue?</a>"
});
count--;
    } else if(number<num && count!=0) {
      console.log(num+" is too high. Go lower.")
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: num+" is too high. Go lower.",
  footer: "<a href=\"#\">try again ?</a>"
});
      count--;
    }
}