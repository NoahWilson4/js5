$(document).on('ready', function() {
  
	$('.philosophy').click(function(){
		
		var boxWidth = $('.philosophy').width();
		var boxHeight = $('.philosophy').height();
		$('.philosophy').after('<input type="text" class="info-input1">');
		$('.info-input1').css({
							display: 'block',
							width: boxWidth,
							height: boxHeight
						});
		$('.philosophy').hide();
		$('.info-input1').on('keydown', function(e){
			if (e.keyCode === 13) {
				$('.philosophy').text(
				$('.info-input1').val())
				$('.info-input1').remove();
				$('.philosophy').show();
				
			}	
		});
	});




	$('.background').click(function(){
		var boxWidth = $('.background').width();
		var boxHeight = $('.background').height();
		$('.background').after('<form id="info-form"><input type="text" class="info-input2"><input type="submit" class="info-submit"></form>');
		$('.info-input2').css({
							display: 'block',
							width: boxWidth,
							height: boxHeight
						})
		$('.info-submit').css({
							width: 150,
							height: 30,
							marginTop: 5,
							marginLeft: 356
						})
		$('.background').hide();
			$('.info-submit').on('click', function(){
				$('.background').text($('.info-input2').val());
				$('.info-submit').remove();
				$('.info-input2').remove();
				$('.background').show();
		});

	});

	$('.color').click(function(){
		var boxWidth = $('.color').width();
		var boxHeight = $('.color').height();
		$('.color').after('<input type="text" class="info-input3">');
		$('.info-input3').css({
							display: 'block',
							width: boxWidth,
							height: boxHeight
						})
		$('.color').hide();
		$('.info-input3').blur(function(){
			if ($('.info-input3').val().length !== 0){
				$('.color').text($('.info-input3').val());
				$('.color').show();
				$('.info-input3').remove();
			}
		})
	});

// ALL 3 WAYS OF ENTERING TEXT-  ENTER KEY, SUBMIT BUTTON, BLUR/UNFOCUS

	$('.all3').click(function(){
		var boxWidth = $('.all3').width();
		var boxHeight = $('.all3').height();
		$('.all3').after('<input type="text" class="info-input4"><input type="submit" class="info-submit">');
		$('.info-input4').css({
							display: 'block',
							width: boxWidth,
							height: boxHeight
						})
		$('.info-submit').css({
							width: 150,
							height: 30,
							marginTop: 5,
							marginLeft: 356
						})
		$('.all3').hide();

		$('.info-input4').on('keydown', function(e){
			if (e.keyCode === 13) {
				if ($('.info-input4').val().length !== 0){
					$('.all3').text($('.info-input4').val());
					$('.info-input4').remove();
					$('.info-submit').remove();
					$('.all3').show();
				}
			}
		});

		$('.info-submit').on('click', function(){
				if ($('.info-input4').val().length !== 0){
					$('.all3').text($('.info-input4').val());
					$('.info-input4').remove();
					$('.info-submit').remove();
					$('.all3').show();
				}
		});

		$('.info-input4').blur(function(){
			if ($('.info-input4').val().length !== 0){
				$('.all3').text($('.info-input4').val());
				$('.all3').show();
				$('.info-submit').remove();
				$('.info-input4').remove();
			}
		})
		

	});


});



// .blur(), .on(), 