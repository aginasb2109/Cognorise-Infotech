let display=document.getElementById("input")
// let input=document.getElementById("input")

function displayfunc(inputs){
      display.value +=inputs;
}
function clearfunc(){
      display.value=" "
}
function oneclear(){
      display.value=display.value.slice(0,-1)

}
function calculate(){
      try{
            display.value=eval(display.value)
      }catch(error){
            display.value="Error"
      }

}
