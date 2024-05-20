var istatus = document.querySelector("h5");
var add = document.querySelector("#add");


var umm = 0;

add.addEventListener("click", function() {
    if(umm == 0){
        istatus.innerHTML= "Friends";
        istatus.style.color= "green";
        add.innerHTML="Remove";
        umm = 1;
    }
    else{
        add.innerHTML="Add Friend";
        istatus.innerHTML= "Stranger";
        istatus.style.color= "red";
        umm = 0;
    }
        
        
    
})



