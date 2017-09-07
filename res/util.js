$(function (){
	$('.noti').hide('fast', function() {
		
	});
	var canGuessCount = 4;
	var randomNum = Math.random() * 100;
	var guessNum = 0;
	$('#enter').change(function(event) {
		guessNum = event.target.value;
	});
	$('#submit').click(function(event) {
		if (guessNum === randomNum) {
			showSuccessInfo();
		} else if (guessNum < randomNum) {
			showFailInfo(false);
		} else {
			showFailInfo(true);
		}
		updateGuessCount();
	});

	function showSuccessInfo(){
		showToast('恭喜你猜对了');
	}
	function showFailInfo(isBigger){
		if (isBigger) {
			showToast('嗯，你猜的数字大了');
		} else {
			showToast('嗯，你猜的数字小了');
		}
	}
	function updateGuessCount()
	{
		canGuessCount --;
		if (canGuessCount === 0) {
			showToast('嗯，你输了');
			canGuessCount = 0;
		}
	}
	function showToast(msg){
		$('.noti').text(msg);
		$('.noti').show('fast', function() {
		});
		setTimeout(hideToast,3000);
	}
	function hideToast(){
		$('.noti').hide('fast', function() {
			
		});
	}
})