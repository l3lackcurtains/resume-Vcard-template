$('#paragraph2').click(function(){
	$('#paragraph').hide();
});

// fading - hide div first
$(document).ready(function(){
	$('#message').fadeIn('slow');
});

$(document).ready(function(){

});
// Check if the delected id is load or not and execute function assigned.
$('#image').load(function(){
	alert('loaded');
});

// all elements loading
$('window').load(function(){
	alert('loaded');
});
// alert just before leaving page
$(window).unload(function(){
	var c = confirm("You're leaving page");
	if(c){ return true;}else{return false;}
});

// SELECTORS
// kati ota selector xa page ma napne
var count = $('*').length; // count ecerything on page

var count1 = $('#area').find('*').length; // count element inside area diV

var name = $('#name').val(); // GEt value from that id

$("#click_me").click(function(){
	alert('clicked');
});

// $('p').text('hello');
// $('p:first').text('hello'); // inserting text inside diV

$(':button').click(function(){ // select all button (input type)
	// $(this).attr('value','please wait');
});

$(':text').focusin(function(){ // blur, focusout
	$(this).css('background-color','yellow');
});

$('#select').click(function(){
	//$('p').css('color','red').css("background-color","black");
});

// Multiple Selector

$('#button, #paragraph').click(function(){
// codes
});

$(document).ready(function(){
	$('.table tr:odd').addClass('highlight');
});

$(document).ready(function(){
	var email_def = 'Enter Your Email Address';
	$('input[type="email"]').attr('value',email_def).focus(function(){
		if($(this).val() == email_def){
			$(this).attr('value',' ')
		}
	}).blur(function(){
		if($(this).val() == ''){
			$(this).attr('value',email_def);
		}
	});
});

// SElector / highlighting
/*
$(document).ready(function(){
	$('#search').keyup(function(){
		search_name = $(this).val();
		$('#names li').removeClass('highlight');
		if(jQuery.trim(search_name != ''){
		$("#names li:contains('"+search_name+"')").addClass('highlight');
		}
	});
});
	

$(':text').focusin(function(){
	$(this).css('background-color','yellow');
});

$(':text').blur(function(){
	$(this).css('background-color', 'white');
});

$(':button').click(function(){
	$(this).attr('value','please wait');
	$(this).attr('disabled','true');
});

// font sizingf
function change_size(element, size){
	var current = praseInt(element.css('font-size'));
	if(size == 'smaller'){
		vae new_size = current-2;
	}else if(size == 'bigger'){
		var new_size = current+2;
	}
	element.css('font-size', new_size+'px');
}
$('#smaller').click(function(){
	change_size($('p'),'smaller');
});

$('#bigger').click(function(){
		change_size($('p'),'bigger');

});

*/

// $(document).ready(function(){
// 	$('#file').change(function(){
// 		$('#submit').removeAttr('disabled');
// 	});
// 	$('input[type="file"]').change(function(){
// 		$(this).next().removeAttr('disabled');
// 	}).next().attr('disabled','disabled'));
// });

// $('#h_msg').click(function(){
// 	$('#msg').hide();
// });

// // click -> event handler
// // hide -> function

// $('#menu_link').dblclick(function(){
// 	$('#menu').show();
// });

// $('#user_text').keydown(function(){
// 	var user_text = $('user_text').val();
// 	$('#user_text_feedback').html('user_text');
// });

// $('#signup').submit(function(){
// 	var uemail = $('user_email').val();
// 	$('email_feedback').html(uemail+'has been added to subscription list.');
// });

// // toogle - show and hide element

// $('#click_me').toogle(function(){
// 	$('#click_event').html('yes');
// },function(){
// 	$('#click_event').html('no');

// });

// $('#menu_videos').hover(function(){
// 	$('#menu-html').html('free tutorials');
// });

$('#some_text').scroll(function(){
	var scroll_pos = $('#some_text').scrollTop();
	$('#some_feedback').html('Scrolling at '+scroll_pos);
});