// JavaScript Document
$(function(){
	$('.event,.tab').hide();
	$('.event:first,.tab:first').show();
	$('.event-box').click(function(){
		$('.event').hide();
		var activeEvent = $(this).attr('href');
		$(activeEvent).show();
		$('.join-box').addClass("jump");
		var set = setTimeout(() => {
			$('.join-box').removeClass("jump");
		},1500)
	});
	$('.block').click(function(){
		$('.tab').hide();
		var activeTab = $(this).attr('href');
		$(activeTab).show();
	});
	$('.view-switch').change(e =>{
		$('.tab').hide();
		$('#tab'+ e.target.value).show();
	});
	$('.addToCart').click(function(){
		$('.add').addClass('fadeIn');
		var set = setTimeout(() => {
			$('.add').removeClass('fadeIn');
		},2000)
	});
	$('.cart').click(function(){
		$('#cart').fadeIn();
	});
	$('.close-cart').click(function(){
		$('#cart').fadeOut();
	})
	$('.social,.checkout').click(function(){
		alert('目前尚無網路 請稍後再試')
	})
	$('.contact-check').click(function(){
		alert('您尚未填寫基本資料')
	})
	$('.heart').click(function(){
		$(this).toggleClass('h-check');
		if($(this).hasClass('h-check')){
			$('body').append('<div class="alert01">加入最愛</div>');
		}
		else{
			$('body').append('<div class="alert01">取消最愛</div>');
		}
	});
})
var blockContainer = document.querySelector('.block-container');
var blocks = Array.from(document.querySelectorAll('.block'));
var isMouseOn = false;
var leftPositions = blocks.map((block,i) => i * 250);

blockContainer.onmouseover = e => isMouseOn = true; 
blockContainer.onmouseout = e => isMouseOn = false; 

setInterval(function(){
	leftPositions.forEach((leftPosition,i) => blocks[i].style.left = leftPosition + "px");
	
	if(!isMouseOn){
		leftPositions = leftPositions.map(leftPosition => {
			leftPosition--;
			if(leftPosition == -250){
				leftPosition = (blocks.length - 1) * 250
			}
			return leftPosition;
		})
	}
},10)