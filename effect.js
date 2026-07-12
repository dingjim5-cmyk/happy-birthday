$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

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
		$('body').css('background-color','#FFF'); // 顺手修复原版代码的拼写错误[cite: 8]
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

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
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

	// === ✨ 核心修改点 1：送上香香软软蛋糕，让老蛋糕和猫狗同步优雅出现 🚀 ===
	$('#cake_fadein').click(function(){
		// 原版经典扁平蛋糕淡入[cite: 8]
		$('.cake').fadeIn('slow');
		
		// 强行召唤左右护法！通过错开几百毫秒延时淡入，视觉上的出场感会非常灵动[cite: 8]
		$('#surprise_cat').delay(400).fadeIn('slow');
		$('#surprise_dog').delay(800).fadeIn('slow');

		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	// === ✨ 核心修改点 2：点击“点蜡烛”，控制原本的经典 CSS 蜡烛火苗冒出来 🕯️ ===
	$('#light_candle').click(function(){
		// 恢复原版经典火苗显示[cite: 8]
		$('.fuego').fadeIn('slow');

		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	// === ✨ 核心修改点 3：进入文字部分时，优雅淡出经典蛋糕与猫狗，腾出完整的干净空间 📝 ===
	$('#story').click(function(){
		$(this).fadeOut('slow'); //[cite: 8]
		
		// 留言文字淡入前，让老蛋糕、傲娇猫咪和贪玩狗子一起平滑隐去[cite: 8]
		$('.cake, #surprise_cat, #surprise_dog').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow'); //[cite: 8]
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					// 当所有的文字都播放完毕，让经典老蛋糕和猫狗再次共同淡入[cite: 8]
					$('.cake, #surprise_cat, #surprise_dog').fadeIn('fast');
					// 🎁 同步淡入生日抽奖盲盒彩蛋区域 🎁
					$('#gift_section').fadeIn('slow');
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

// === 🎁 盲盒奖品逻辑配置中心 🎁 ===
// 这里已经为你准备好了三个好玩又带特权的盲盒奖品，可以根据实际情况随时在文字内更改你的真实实体礼物
const gifts = {
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

// 点击打开盲盒
window.openGift = function(boxNum) {
    var prize = gifts[boxNum];
    $('#result_title').text(prize.title);
    $('#result_text').html(prize.text);
    
    // 弹出全屏遮罩层
    $('#gift_overlay').css('display', 'flex');
};

// 关闭遮罩层
window.closeOverlay = function() {
    $('#gift_overlay').hide();
};