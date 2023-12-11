const liList = document.querySelectorAll("li");
let conter = 10;
document.querySelector("button").addEventListener("click", function () {
    conter++;
    liList.forEach(function (li) {
   
        li.style.display = "block";
       
        li.style.fontSize = conter+"px";
    
    }); 
});
document.querySelector("button:nth-child(2)").addEventListener("click", function () {
    conter--;
    liList.forEach(function (li) {

        li.style.display = "block";

        li.style.fontSize = conter+"px";
        
    });
});