/*
DiQuick v1.2.1 (http://www.diquick.com)
*/

$(function(){
	
	//mobile-touch
	$("*").click(function () {  });
	
	//panel
	$(".panel").each(function () {
		var obj = $(this);
		obj.children(".action").children("[data-fold='panel']").click(function () {
			obj.children(".content").slideToggle("normal");
			$(this).toggleClass("active");
		});
		obj.children(".action").children("[data-close='panel']").click(function () {
			obj.fadeOut("slow");
		});
	});
	
	//tab
	$(".tab").each(function () {
		var obj = $(this);
		obj.children(".nav").children("li").click(function () {
			var num = $(this).index(); 
			obj.children("ul").children("li.active").removeClass("active"); 
			obj.children(".nav").children("li:eq("+num+")").addClass("active"); 
			obj.children(".content").children("li:eq("+num+")").addClass("active"); 
		});
	});
	
	//accordion
	$(".accordion").each(function () {
		var obj = $(this);
		obj.children("li.active").children(".content").show();
		obj.children("li").children(".title").click(function () {
			if ($(this).parent("li").hasClass("active")) {
				$(this).parent("li").removeClass("active");
				$(this).next(".content").slideUp("normal");
			}
			else {
				obj.children("li").removeClass("active");
				obj.children("li").children(".content").slideUp("normal");
				$(this).parent("li").addClass("active");
				$(this).next(".content").slideDown("normal");
			}
		});
	});

	//msg
	$(".msg").children("[data-close='msg']").click(function () {
		$(this).parent(".msg").fadeOut("slow");
	});
	
	//input-icon
	$(".form>li>div>input").each(function () {
		$(this).prev("i[class*='flaticon']").parent("div").addClass("icon");
	});
	
	//label-disabled
	$("label>input:disabled").each(function () {
		$(this).parent("label").addClass("disabled");
	});

	//menu-arrow
	$(".menu>div>ul").each(function () {
		$(this).prev("a").append("<i class='arrow'></i>");
	});
	
	//menu-accordion
	$(".menu.accordion").each(function () {
		var obj = $(this);
		obj.children("div").children("ul").prev("a").click(function () {
			if ($(this).parent("div").hasClass("active")) {
				$(this).parent("div").removeClass("active");
				$(this).next("ul").slideUp("normal");
			}
			else {
				obj.children("div").removeClass("active");
				obj.children("div").children("ul").slideUp("normal");
				$(this).parent("div").addClass("active");
				$(this).next("ul").slideDown("normal");
			}
		});
		obj.children("div.active").children("ul").each(function () {
			$(this).show();
		});
	});

	//toggle navigation
	$("#togglenavigation").each(function () {
		var obj = $(this);
		if (obj.length > 0) {
			$("body").addClass("toggle-content");
			$("[data-click='togglenavigation']").click(function () {
				if (obj.hasClass("fixed")) {
					obj.toggleClass("active");
				}
				if (obj.hasClass("relative")) {
					obj.toggleClass("active");
					$(".toggle-content").toggleClass("active");
				}
			});
			obj.find("[data-close='togglenavigation']").click(function () {
				obj.removeClass("active");
				$(".toggle-content").removeClass("active");
			});
			if (obj.hasClass("relative") && obj.hasClass("active")) {
				$("body").addClass("toggle-content active");
			}
		}
	});
	
	//mask
	$("[data-click='mask']").click(function () {
		var obj = $(this).attr("data-target"); 
		$(".mask#"+obj).fadeIn("fast").css("display","table");
	});
	$(".mask").find("[data-close='mask']").click(function () {
		$(".mask").fadeOut("fast");
	});

});