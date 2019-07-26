var owl = $('.owl_banner');
owl.owlCarousel({
	margin: 0,
	nav: true,
	dots: false,
	autoplay: false,
	loop: true,
	items: 1
});

var owl2 = $('.owl_box7');
owl2.owlCarousel({
	margin: 10,
	nav: false,
	dots: true,
	autoplay: true,
	loop: true,
	responsive:{
		0:{
			items:2
		},
		600:{
			items:4
		},
		1000:{
			items:6
		}
	}
});
var owl3 = $('.owl_box9');
owl3.owlCarousel({
	margin: 10,
	nav: false,
	dots: true,
	autoplay: true,
	loop: true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:4
		}
	}
});
var owl4 = $('.owl_box10');
owl4.owlCarousel({
	margin: 10,
	nav: false,
	dots: true,
	autoplay: true,
	loop: true,
	items: 1
});


var owl4 = $('.owl_plash');
owl4.owlCarousel({
	margin: 0,
	nav: false,
	dots: false,
	autoplay: false,
	loop: false,
	items: 1,
	touchDrag: false,
	mouseDrag: false
});
$('.plash_yes a').click(function() {
	owl4.trigger('next.owl.carousel');
})
var owl5 = $('.owl_nghe');
owl5.owlCarousel({
	margin: 0,
	nav: false,
	dots: false,
	autoplay: false,
	loop: false,
	items: 1,
	touchDrag: false,
	mouseDrag: false
});

$('.nghe_tiep a').click(function() {
	owl5.trigger('next.owl.carousel');
})



var owl6 = $('.owl_viet');
owl6.owlCarousel({
	margin: 0,
	nav: false,
	dots: false,
	autoplay: false,
	loop: false,
	items: 1,
	touchDrag: false,
	mouseDrag: false,
	smartSpeed: 3000
});

$('.viet_butt4 a').click(function() {
	setTimeout(function(){
		owl6.trigger('next.owl.carousel');
	},800);
	
})


$('.viet_butt1 .a_vien_vang').click(function() {
	$(this).parent('.viet_butt1').addClass('dipslay_none');
	$(this).parent().next('.viet_goiy').addClass('dipslay_block');$(this).parents('.viet_item').find('.viet_input').focus();
});

$('.viet_butt2 .a_vien_vang').click(function() {
	var kq1 = $(this).parents('.viet_item').find('.kq').val();
	$(this).parents('.viet_goiy').addClass('dipslay_none');
	$(this).parents('.viet_item').find('.viet_goiy_kq').addClass('dipslay_block');
	$(this).parents('.viet_item').find('.viet_input').attr("placeholder", kq1).focus();
});

$('.viet_butt3 .a_vien_vang').click(function() {
	var kq1 = $(this).parents('.viet_item').find('.kq').val();
	$(this).parents('.viet_goiy_kq').addClass('dipslay_none');
	$(this).parents('.viet_item').find('.viet_goiy_final').addClass('dipslay_block');
	$(this).parents('.viet_item').find('.viet_input').attr("value", kq1);
	
});


var flag = false;
$('.viet_input').keyup(function(e){
	var viet_input = $(this).val().toLowerCase();
	var viet_input_num = $(this).val().length;
	var viet_new = viet_input.charAt(viet_input_num - 1).toLowerCase();
	var kq = $(this).next().val();
	var $a = $(this).parents('.viet_item').find('.viet_goiy .list_character span');
	$a.removeClass('opacity5');

	if((viet_input.substring(0,viet_input_num) === kq.substring(0,viet_input_num)) && (viet_input_num > 0)) {
		for(var i=0; i<viet_input.length;i++){
			var char_input = viet_input.charAt(i);
			for(var j = 0; j< $a.length; j++){
				var text_span = $a.eq(j).html();
				if(char_input === text_span){
					if($a.eq(j).hasClass('opacity5')){
						j = j;
					} else{
						$a.eq(j).addClass('opacity5');
						j= $a.length;
					}
				}
			}
		}

	}

	if(viet_input === kq){
		var code = e.keyCode || e.which;
		if(code == 13) {
			owl6.trigger('next.owl.carousel');
			var a = $(this).parents('.viet_item').find('.viet_butt4 a').attr('data-href');
			var audioElement = document.createElement('audio');
			audioElement.setAttribute('src', a);
			audioElement.play();
			$('.ds3_now').html(parseInt($('.ds3_now').html()) + 1);
			$('.diemso .ds2 .span2').css({"width": $('.diemso .ds2 .span2').innerWidth() + $('.diemso .ds2 span.cd').innerWidth() / ($('.owl-carousel .item').length - 1)});
		}
	}

});
$('.viet_butt4 a').click(function(){
	$('.ds3_now').html(parseInt($('.ds3_now').html()) + 1);
	$('.diemso .ds2 .span2').css({"width": $('.diemso .ds2 .span2').innerWidth() + $('.diemso .ds2 span.cd').innerWidth() / ($('.owl-carousel .item').length - 1)});
})






var owl7 = $('.owl_hocthu1');
owl7.owlCarousel({
	margin: 100,
	nav: false,
	dots: false,
	autoplay: false,
	loop: false,
	items: 1,
    lazyLoad : true,
	// touchDrag: false,
	// mouseDrag: false,
});

$('.ht1_butt a').click(function() {
	owl7.trigger('next.owl.carousel');
})



// ẩn hiện audio trang blog
var d = 0;
$('.blog_item_audio .blog_main-img').click(function(){
	d++;
	if(d % 2 != 0){
		$(this).find('.blog_audio').css({"display":"block"})
	} else{
		$(this).find('.blog_audio').hide();
	}
});


// tính điểm số
$(window).load(function() {
	var num_item = $('.owl-carousel .item').length - 1;
	var diemso = $('.diemso .ds2 span.cd').innerWidth() / num_item;
	var yes1 = 0;
	$('.diemso .ds3_tong').html(num_item);
	$('.plash_yes a, .nghe_tiep a').click(function(){
		yes1++;
		$('.diemso .ds2 .span2').css({"width": diemso*yes1});
		$('.ds3 span.ds3_now').html(yes1);
	});
});




$('[data-toggle="tooltip"]').tooltip(); 

$('.a_play').click(function(){
	var a = $(this).attr('data-href');
	var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', a);
	audioElement.play();
})


$('.viet_input').on("cut copy paste",function(e) {
	e.preventDefault();
});
$('a').dblclick(function(e){ 
	e.preventDefault();
})


var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
	forEach(hamburgers, function(hamburger) {
		hamburger.addEventListener("click", function() {
			this.classList.toggle("is-active");
		}, false);
	});
}
$('.hamburger').click(function(){
	$('.header-menu').slideToggle();
})
$('.hassub').click(function(){
	$(this).find('.m_level2_mb').slideToggle();
})


var d_ul1 = 0;
$('.hassub1 a').click(function(){
	d_ul1++;
	if(d_ul1 %2!=0){
		$(this).next('.review_ul2').slideDown();
	} else{
		$(this).next('.review_ul2').slideUp();
	}
})

$('.hassub2 a').click(function(){
	if($(this).next('ul').hasClass('mo')){
		$(this).next('ul').slideUp().removeClass('mo');
	} else{
		$(this).next('ul').slideDown().addClass('mo');
	}
})


var s_d = 0;
$('.search1').click(function(){
	$('.search_ul').hide();
	s_d++;
	if(s_d %2 !=0){
		$(this).find('.search_ul').show();
	} else{
		$(this).find('.search_ul').hide();
	}
	
})