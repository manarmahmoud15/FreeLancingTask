
function toggleElements() {
    var element1 = document.getElementById("welcome_1");
    var element2 = document.getElementById("wolfteam_pro");
    var element3 = document.getElementById("my_carttop");
var targetElement = document.getElementById('scrool_mypro');
    var element4 = document.getElementById("hideme");
    var element5 = document.getElementById("cart_close");
    var element3 = document.getElementById("my_carttop");
    var elementt4 = document.getElementById("shoppwolf");
    var isHidden = true;
    
    element4.addEventListener("click", function() {
        if (isHidden) {
            element3.style.right = "0";
        } else {
            element3.style.right = "-800px";
        }
        isHidden = !isHidden; // Toggle the state
    });

    element5.addEventListener("click", function() {
        if (isHidden) {
            element3.style.right = "0";
        } else {
            element3.style.right = "-800px";
        }
        isHidden = !isHidden; // Toggle the state
    });
    
    elementt4.addEventListener("click", function() {
        if (isHidden) {
            element3.style.right = "0";
        } else {
            element3.style.right = "-800px";
        }
        isHidden = !isHidden; // Toggle the state
    });

    if (element1.style.display === "none") {
        element1.style.display = "block";
        element2.style.display = "none";
        element3.style.right = "-800px";
        targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        element1.style.display = "none";
        element2.style.display = "block";
        toggleElements()
    }
}
