//A JQuery function that creates a "Fading In" effect on the navigation buttons on scroll.


$(document).ready(function() {
	$(window).one("scroll", function() {
		$(".box1").hide().fadeIn();
		$(".box2").hide().fadeIn(500);
		$(".box3").hide().fadeIn(1500);
		$(".box4").hide().fadeIn(2500);
		$(".box5").hide().fadeIn(3500);
	});
});

$("#blogproject").hover(function() {
	 $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
});

/*
$(document).ready(function() {
	var elem = document.getElementById("myAnimation"); 
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 400) {
            clearInterval(id); 
        } else {
            pos++; 
            elem.style.top = pos + 'px'; 
			elem.style.left = pos + 'px';
			elem.style.top = pos + 'px'; 
        }
    }
});
*/

/* $(document).ready(function() {
    $("body").css("display", "none");
 
    $("body").fadeIn(1000);
 
    $("a.box2").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);      
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
});
*/
