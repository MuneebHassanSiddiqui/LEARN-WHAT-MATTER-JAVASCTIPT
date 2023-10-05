function INSTAFOLLOWREMOVEBTN (){
    var i = document.querySelector("h5")
    var a = document.querySelector("#add")
    
    var check = 0
    a.addEventListener("click", function () {
    
        if (check == 0) {
    
            i.innerHTML = "Friends"
            i.style.color = "green"
            a.innerHTML = "REMOVE"
            check = 1
        }else{
            i.innerHTML = "Stranger"
            i.style.color = "red"
            a.innerHTML = "FOLLOW"
            check = 0
        }
    });
    


}
INSTAFOLLOWREMOVEBTN();

