 
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 43,
            "density": {"enable": true, "value_area": 1042.21783956259}
        },
        "color": {"value": "#ff8040"},
        "shape": {
            "type": "circle",
            "stroke": {"width": 0, "color": "#000000"},
            "polygon": {"nb_sides": 5},
            "image": {"src": "img/github.svg", "width": 100, "height": 100}
        },
        "opacity": {
            "value": 0.6,
            "random": false,
            "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
        },
        "size": {
            "value": 16.03412060865523,
            "random": true,
            "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
        },
        "line_linked": {"enable": false, "distance": 64.13648243462092, "color": "#ffffff", "opacity": 0.4, "width": 1},
        "move": {
            "enable": true,
            "speed": 5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
        }
		
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {"enable": false, "mode": "repulse"},
            "onclick": {"enable": false, "mode": "push"},
            "resize": true
        },
        "modes": {
            "grab": {"distance": 400, "line_linked": {"opacity": 1}},
            "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
            "repulse": {"distance": 200, "duration": 0.4},
            "push": {"particles_nb": 4},
            "remove": {"particles_nb": 2}
        }
    },
    "retina_detect": false
});


$(document).ready(function(){

	$(".Pricing-toggle-button").click(function(){
		var serviceId = $(this).attr("id");
		if(serviceId.indexOf('_') > -1)
			serviceId = serviceId.split('_')[1];
		if(serviceId == "Service1")
		{
			$("#Service2").removeClass("serviceActive");
			$("#Service1").addClass("serviceActive");
			$("#data_Service1").removeClass("hideDiv");
			$("#data_Service2").addClass("hideDiv");
		}
		else
		{
			$("#Service1").removeClass("serviceActive");
			$("#Service2").addClass("serviceActive");
			$("#data_Service2").removeClass("hideDiv");
			$("#data_Service1").addClass("hideDiv");
		}

	});

});

$(document).ready(function(){
	$(".pricing-item").click(function(){
		var id = $(this).attr("id");
		$("#myModal").show();
		$("#ModelPopupHeading").html($("#"+id+" > div").html())
		$("#ModelPopupData").html($("#"+id+"_child").html())
	});
	$(".modalPopUp-close").click(function(){
		$("#myModal").hide();
		$("#ModelPopupHeading").html("");
		$("#ModelPopupData").html("");
	});

    var navBtn = $('main .nav-btn');
	$('main nav, #service_submenu').removeAttr("style");
	$("#rightSubMenuServices").removeAttr("href");
	
    function toggleNav() {
        navBtn.toggleClass('open');
        $('main nav').toggleClass('open');
    }
    navBtn.click(function() {
        toggleNav();
    })
    $('main nav ul li a').click(function(e) {
        toggleNav();
    })
	$(".HorizontalSubmenu").click(function(){
		var id = $(this).attr("id");
		$(".HorizontalSubmenu").removeClass("SubmenuActive");
		$(this).addClass("SubmenuActive");
		$(".SubmenuItemsWrapper > div").addClass("hideDiv");
		$("#child_"+id).removeClass("hideDiv");
	});
	
	$(".SubMenuchild").click(function(){
		var id = $(this).closest('[id]').attr("id");
		displayServiceDetails(id);
	});
	
	$(".rightMenuChild div").click(function(){
		var id = $(this).closest('[id]').attr("id");
		displayServiceDetails(id);
		toggleNav();
	});
	
	function displayServiceDetails(parentId)
	{
		if(parentId == "child_DSS" || parentId == "child_DSS1")
		{
			$("#Service1").removeClass("serviceActive");
			$("#Service2").addClass("serviceActive");
			$("#data_Service2").removeClass("hideDiv");
			$("#data_Service1").addClass("hideDiv");
		}
		else
		{
			$("#Service2").removeClass("serviceActive");
			$("#Service1").addClass("serviceActive");
			$("#data_Service1").removeClass("hideDiv");
			$("#data_Service2").addClass("hideDiv");
		}
		var elmnt = document.getElementById("Services");
		elmnt.scrollIntoView();
	}
	
	$(".customNavLinks main nav ul li div").click(function(){
		var hRef = $(this).attr("href")
		if(typeof hRef == "undefined" || hRef == "")
			return false;

		if(hRef != "#")
		{
			window.location = hRef;
			toggleNav();
		}
		
	});

});

