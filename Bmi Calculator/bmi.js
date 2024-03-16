

let btn=document.getElementById("btn");

btn.addEventListener('click', Calc);



function Calc(){
    let height=parseInt(document.getElementById("heightbox").value);
    let weight=parseInt(document.getElementById("weightbox").value);
    let result=document.getElementById("result_display");
    let height_stat=false, weight_stat=false;
    if(height==="" || isNaN(height)|| (height<=0)){
        document.getElementById('height_error').innerHTML="Please provide a valid Height"
    }
    else{
        document.getElementById('height_error').innerHTML=" ";
        height_stat=true;
    }

    if(weight==="" || isNaN(weight)|| (weight<=0)){
        document.getElementById('weight_error').innerHTML="Please provide a valid weight";
    }
    else{
        document.getElementById('weight_error').innerHTML=" ";
        weight_stat=true;
    }
    
    if(weight_stat && height_stat){
        let bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        if(bmi<18.6){
            result.innerHTML="Under Weight :" +bmi;
        }
        else if(bmi>= 18.6 && bmi<24.9){
            result.innerHTML="Normal:" +bmi;

        }
        else{
            result.innerHTML="Over weight:" +bmi  
        }
    }else{
        alert('The form has error')
        result.innerHTML=" ";
    }

}