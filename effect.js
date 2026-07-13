$(window).load(function(){
	$('.loading').fadeOut('fast', function(){
        // 当原本的 Loading 走完后，让我们的搞怪彩蛋图层温和地浮现出来
        $('#ready_overlay').fadeIn('slow');
    });
	$('.container').fadeIn('fast');
});

$('document').ready(function(){
		var vw;
		function isMobile() {
			return $(window).width() <= 850;
		}

		$(window).resize(function(){
			vw = $(window).width()/2;
		});

    // ==========================================================
    // 🎮 开局“准备好了吗”搞怪拉扯计数器与瞬移控制
    // ==========================================================
    var clickCount = 0;
    $('#ready_btn').click(function(e){
        clickCount++;
        
        if (clickCount === 1) {
            // 第一次闪现：闪现到偏左下方（完美避开上方 25% 的标题，拉开距离）
            $(this).css({
                'top': '70%',
                'left': '20%'
            });
        } 
        else if (clickCount === 2) {
            // 第二次闪现：闪现到偏右上方（卡在标题右侧的空白黄金区，极度调皮）
            $(this).css({
                'top': '45%',
                'left': '80%'
            });
        } 
        else if (clickCount === 3) {
            // 第三次：乖乖回到中轴线偏下，改头换面展现温馨红框[cite: 5]
            $(this).addClass('stop-joking').html('好了不闹了，让我们开始~').css({
                'top': '65%',
                'left': '50%'
            });
        } 
        else if (clickCount === 4) {
            // 第四次点击：搞怪功成身退！彻底拔除该图层，永不回弹！[cite: 5]
            $('#ready_overlay').fadeOut('slow', function(){
                $(this).remove(); // 物理卸载删除该节点[cite: 5]
            });
        }
    });
    // ==========================================================

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('background-color','#FFF'); 
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function getRandLeft() {
		var maxW = $(window).width() - 60;
		return maxW * Math.random();
	}

	function loopOne() {
		if($('#b1').hasClass('ordered')) return; 
		var randleft = getRandLeft();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		if($('#b2').hasClass('ordered')) return;
		var randleft = getRandLeft();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		if($('#b3').hasClass('ordered')) return;
		var randleft = getRandLeft();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		if($('#b4').hasClass('ordered')) return;
		var randleft = getRandLeft();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		if($('#b5').hasClass('ordered')) return;
		var randleft = getRandLeft();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}
	function loopSix() {
		if($('#b6').hasClass('ordered')) return;
		var randleft = getRandLeft();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		if($('#b7').hasClass('ordered')) return;
		var randleft = getRandLeft();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#summon_friends').fadeIn('slow');
		});
	});

	$('#summon_friends').click(function(){
		// 🐾 1. 满足原本仪式感：点击按钮时，猫（嘉年华）和狗（元宝）一左一右正常探头出来[cite: 3, 5]
		$('#surprise_cat').fadeIn('slow');
		$('#surprise_dog').delay(400).fadeIn('slow');

		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$('body').addClass('dimmed-candles'); 

		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

	$('#wish_message').click(function(){
		vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop(true, true);
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').addClass('ordered');

		if(isMobile()){
			$('#b1').css({top:200, left: vw - 158}); 
			$('#b2').css({top:200, left: vw - 113});  
			$('#b3').css({top:200, left: vw - 68});  
			$('#b4').css({top:200, left: vw - 23});   
			$('#b5').css({top:200, left: vw + 22});  
			$('#b6').css({top:200, left: vw + 67});  
			$('#b7').css({top:200, left: vw + 112}); 
		} else {
			$('#b1').css({top:240, left: vw - 350});
			$('#b2').css({top:240, left: vw - 250});
			$('#b3').css({top:240, left: vw - 150});
			$('#b4').css({top:240, left: vw - 50});
			$('#b5').css({top:240, left: vw + 50});
			$('#b6').css({top:240, left: vw + 150});
			$('#b7').css({top:240, left: vw + 250});
		}

		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(2000);
		
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('body').removeClass('dimmed-candles'); 
		
		// 🚨 2. 进入独白前置处理：把重叠的蛋糕、猫、狗暂时全部淡出隐藏，为情话朗读腾出干净的空间[cite: 3, 5]
		$('.cake, #surprise_cat, #surprise_dog').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;
		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
            
            // 🐾 ==========================================================
            // 🐱🐶 3. 完美结合：在独白朗读中，依然支持依次“踩点”重新显示猫和狗
            // ==========================================================
            if(i == 11) {
                // 读到第 11 句「你看，连最傲娇的嘉年华」时，猫咪重现探头[cite: 4]
                $('#surprise_cat').fadeIn('slow');
            }
            else if(i == 12) {
                // 读到第 12 句「和最贪玩的元宝」时，狗狗也加入重现探头[cite: 4]
                $('#surprise_dog').fadeIn('slow');
            }
            // ==========================================================

			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					var currentVW = $(window).width()/2;
					if(isMobile()){
						$('#b1').css({top:150, left: currentVW - 158});
						$('#b2').css({top:150, left: currentVW - 113});
						$('#b3').css({top:150, left: currentVW - 68});
						$('#b4').css({top:150, left: currentVW - 23});
						$('#b5').css({top:150, left: currentVW + 22});
						$('#b6').css({top:150, left: currentVW + 67});
						$('#b7').css({top:150, left: currentVW + 112});
					} else {
						$('#b1').css({top:180, left: currentVW - 350});
						$('#b2').css({top:180, left: currentVW - 250});
						$('#b3').css({top:180, left: currentVW - 150});
						$('#b4').css({top:180, left: currentVW - 50});
						$('#b5').css({top:180, left: currentVW + 50});
						$('#b6').css({top:180, left: currentVW + 150});
						$('#b7').css({top:180, currentVW: currentVW + 250});
					}
					// 🛠️ 4. 终结大退场：独白全部结束，再次把猫狗和蛋糕隐藏，彻底平铺盲盒[cite: 5]
					$('.cake, #surprise_cat, #surprise_dog').hide();
                    
                    // 同步唤醒类名锁链[cite: 5]
                    $('body').addClass('ordered-active-body');
                    $('.message').addClass('ordered-active-parent');
					$('#gift_section').addClass('ordered-active').fadeIn('slow');
				});
			}
			else{
				msgLoop(i);
			}			
		});
		}
		msgLoop(0);
	});
});

var gifts = {
    1: {
        title: "✨ 抽出直播专属奖！",
        text: "【网易云会员】<br><br>妈妈再也不用担心放歌要看广告了！"
    },
    2: {
        title: "🍫 抽出巧克力大王专属奖！",
        text: "【疯狂星期四v50】<br><br>巴山楚水凄凉地，can U V me fifty?"
    },
    3: {
        title: "🎁 抽出蓝蓝木屐专属奖！",
        text: "【西湖边神秘餐厅】<br><br>承包接送+西湖边神秘餐厅美味大餐一顿！"
    }
};

window.openGift = function(boxNum) {
    var prize = gifts[boxNum];
    $('#result_title').text(prize.title);
    $('#result_text').html(prize.text);
    $('#gift_overlay').css('display', 'flex');
};

window.closeOverlay = function() {
    $('#gift_overlay').hide();
};
