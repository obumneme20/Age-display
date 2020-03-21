document.getElementById("screen").value = "What is your Age?";

function btnClick(){   

    var enter = document.getElementById("enter").value;
    enter = Number(enter);
    
    if (enter == ""){
        document.getElementById("screen").value = "You forgot to input your age";

    } else if (enter <= 17){
        document.getElementById("screen").value = "You are a Child";

    } else if (enter <= 50){
        document.getElementById("screen").value = "You are an Adult";

    } else {
        document.getElementById("screen").value = "You are a Senior Citizen";
    }
}