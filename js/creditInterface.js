function applyJump(id,url){
	window.open(url);
	return;
	if(url.indexOf("ebanks.cgbchina.com.cn") > 0) {
		var popupDiv = "<div class='main_check'><div class='check_warp clearfix'><a href='javascript:void(0);' onclick='closeLayer();' class='check_close'>&times;</a><p class='checktit'><em></em>信用卡申请条件初审…</p><form class='select_form clearfix'><div class='select_have clearfix'><input type='radio' name='RadBankA' id='RadBankA_0' onclick='checkrad(0,"+id+","+"\""+url+"\""+");'><label for='RadBankA_0'>是</label><input type='radio' name='RadBankA' id='RadBankA_1' onclick='checkrad(1,"+id+","+"\""+url+"\""+");'><label for='RadBankA_1'>否</label><p class='ptips'><em></em>是否拥有本行信用卡</p></div><div class='select_list clearfix'><select name='xindairecord' id='xindairecord' onchange='checkrad(2,"+id+","+"\""+url+"\""+");'><option value='' selected=''>请选择</option><option value='1'>无他行信用卡 </option><option value='2'>有他行卡且还款良好</option><option value='3'>有他行卡且3次以上逾期还款</option></select><p class='ptips'><em></em>有无其它信用卡及还款情况</p></div><div class='select_list clearfix'><select name='edu' id='edu' onchange='checkrad(2,"+id+","+"\""+url+"\""+");'><option value='' selected=''>请选择</option><option value='1'>高中或以下</option><option value='2'>专科</option><option value='3'>本科</option><option value='4'>硕士或以上</option></select><p class='ptips'><em></em>文化程度</p></div><div class='select_list clearfix'><select name='hkqk' id='hkqk' onchange='checkrad(2,"+id+","+"\""+url+"\""+");'><option value='' selected=''>请选择</option><option value='1'>从未有过信贷记录</option><option value='2'>有过其他银行贷款记录</option><option value='3'>有过房贷记录</option></select><p class='ptips'><em></em>信贷情况</p></div><p class='perror'>抱歉，暂不支持已有银行第二张卡申请！</p><div class='select_btn'><a href='javascript:void(0);'><input type='button' value='下一步' /></a></div></form></div></div><style>div#creditShengheDiv { position: relative; z-index: 99999;} .main_check {background: #fff; border:1px solid #e6e6e6; box-shadow:inset 0px 0px 8px #f2f2f2; font-family:'微软雅黑'; color:#555; font-size:14px; width:760px; height:400px; padding-top:30px; position:fixed; top:50%; left:50%;margin-top:-215px; margin-left:-380px;_position:absolute;_top:expression(eval(document.documentElement.clientHeight/2+document.documentElement.scrollTop)); _left:expression(eval(document.documentElement.clientWidth/2+document.documentElement.scrollLeft));}.main_check .check_warp { position:relative;}.check_warp .check_close { position:absolute; top:-10px; right:15px; width:22px; height:22px; text-align:center; line-height:22px; color:#ccc; font-size:20px; border:1px solid #ccc;}.check_warp .check_close:hover { border:1px solid #c00; color:#c00;}.main_check p.checktit { height:70px; padding-left:20px; font:normal 24px/70px '微软雅黑'; color:#333;}.main_check p.checktit em { float:left; width:54px; height:50px; background:url(http://res.cngoldres.com/credit/img/credit_cgb_stepbg.png) no-repeat; margin-right:10px;}.main_check .select_form { padding-left:90px;}.main_check .select_form .select_have { padding:0px 0px 5px 350px; height:20px; overflow:hidden;}.main_check .select_form .select_have input { float:left;}.main_check .select_form .select_have label { float:left; padding:0px 10px 0px 5px; }.main_check .select_form .ptips { float:right; color:#aaa; width:218px; position:relative;}.main_check .select_form .ptips em { float:left; width:20px; height:20px; background:url(http://res.cngoldres.com/credit/img/credit_cgb_stepbg.png) 0px -51px no-repeat; margin-right:8px;}.main_check .select_form .ptips.verify em { background-position:-21px -51px;}.main_check .select_form .select_list {}.main_check .select_form .select_list select { float:left; width:434px; height:38px; padding:9px 10px; background:url(http://res.cngoldres.com/credit/img/credit_cgb_stepbg.png) -62px -48px no-repeat; margin-top:18px;font-family:'微软雅黑'; font-size:14px; color:#666; line-height:18px; margin-left:3px;}.main_check .select_form .select_list .ptips { margin-top:26px; *margin-top:20px; _margin-top:20px;}.main_check .select_form .select_btn input { width:441px; height:47px; background:url(http://res.cngoldres.com/credit/img/credit_cgb_stepbg.png) -55px 0px no-repeat; color:#fff; font-size:18px;font-family:'微软雅黑'; margin-top:25px;display:none;}.main_check .select_form p.perror { height:20px; line-height:20px; padding-left:100px; color:red; padding-top:15px;display:none;}</style>";
		if ($('#creditShengheDiv').length > 0){
			$('#creditShengheDiv').show();
			$(":radio[name='RadBankA']").removeAttr("checked");
			$("#xindairecord").val("");
			$("#edu").val("");
			$("#hkqk").val("");
			$(".select_have>p:eq(0)").removeClass("verify");
			$(".select_list:eq(0)>p:eq(0)").removeClass("verify");
			$(".select_list:eq(1)>p:eq(0)").removeClass("verify");
			$(".select_list:eq(2)>p:eq(0)").removeClass("verify");
			$(".select_btn>a>input").hide();
		}else{
			var bodys = document.body;
			var newDiv = document.createElement("div");
			newDiv.id = "creditShengheDiv";
			newDiv.innerHTML = popupDiv;
			bodys.appendChild(newDiv);
		}
	} else if(url.indexOf("code.bankrate.com.cn") > 0) {
		var popupDiv = "<div class='pop-inner'><div class='checktit'><em></em><p>信用卡申请条件初审</p><a href='javascript:;' onclick='closePop();'>x</a></div><div class='codition'><p>您即将前往银行申请以下信用卡，请问您是否有平安银行信用卡：</p></div><div class='codition clearfix'><div class='cfl choose'><select name='select_choose' id='select_choose'><option value='0'>请选择</option><option value='1'>没有，但最近3个月申请过</option><option value='2'>有，但已经被我注销了</option><option value='3'>我有平安银行信用卡</option><option value='4'>我还没有平安银行信用卡</option></select></div><label class='cfl'><em></em>是否有平安银行信用卡</label></div><div class='codition'><input id='decide_enter' class='btn' name='next_step' value='下一步'><div id='reminder' style='display:none'>已持有或曾经持有平安银行信用卡的用户，建议您选择其他银行信用卡<br>申请。或去平安银行官网申请</div></div></div>";
		if ($('#credit-popbox').length > 0){
			$("#select_choose").val("0");
			$("#decide_enter").hide();
			$("#reminder").hide();
			$("#select_choose").parent().parent().find("label.cfl").removeClass("check-pass");
		}else{
			var bodys = document.body;
			var newDiv = document.createElement("div");
			newDiv.id = "credit-popbox";
			newDiv.className = "pop-panel";
			newDiv.innerHTML = popupDiv;
			bodys.appendChild(newDiv);
		}
		$("#credit-popbox").show();
		$("#decide_enter").click(function(){
			var choose_index=$("#select_choose").val();
			if(choose_index==4){
				var mvcurl="\""+url+"\"";
				applyAjax(id,url,mvcurl);
			} else {
				window.open("http://credit.cngold.org/shenqing/");
			}
			
		});
	} else {
		var mvcurl="\""+url+"\"";
		applyAjax(id,url,mvcurl);
	}
    
}

function closeLayer(){
	$('#creditShengheDiv').hide(); 
}

function getVisitCount(id){
    $.ajax({
        type:"GET",
        url:"http://credit.cngold.org/s/api/v1/credit/internal/visitcount/"+id,
        dataType:"json",
        contentType:"application/json",
        data:"{}",
        success:function(data){
            return data.data;
        }
    });

}

function checkrad(rad,id,url){
	var mvcurl = "\""+url+"\"";
	if(rad=="0"){
		$(".select_list").hide();
		$(".perror").show();
		$(".select_btn>a>input").show();
		$(".select_btn>a>input").val("申请其他银行信用卡");
		$(".select_btn>a").attr("href","http://credit.cngold.org/xyksq/");
		$(".select_btn>a").unbind("click");
		$(".select_have>p:eq(0)").addClass("verify");
	}else if(rad=="1"){
		$(".select_list").show();
		$(".perror").hide();
		$(".select_btn>a>input").hide();
		$(".select_btn>a>input").val("下一步");
		$(".select_btn>a").attr("href","javascript:void(0);");
		$(".select_have>p:eq(0)").addClass("verify");
		$(".select_btn>a").bind("click",function(){
			if(checkrad(2,id,url)){
				applyAjax(id,url,mvcurl);
			}
		});
		checkrad(2,id,url);
	}else{
		$(".select_btn>a>input").val("下一步");
		if($(":radio[name='RadBankA']:checked").length==1){
			var RadBank=$(":radio[name='RadBankA']:checked").attr("id").replace("RadBankA_","");
			if(RadBank=="0"){
				$(".select_btn>a>input").val("申请其他银行信用卡");
			}
		}
		var xindairecord=$("#xindairecord").val();
		if(xindairecord==""){
			$(".select_list:eq(0)>p:eq(0)").removeClass("verify");
		} else {
			$(".select_list:eq(0)>p:eq(0)").addClass("verify");
		}
		var edu=$("#edu").val();
		if(edu==""){
			$(".select_list:eq(1)>p:eq(0)").removeClass("verify");
		} else {
			$(".select_list:eq(1)>p:eq(0)").addClass("verify");
		}
		var hkqk=$("#hkqk").val();
		if(hkqk==""){
			$(".select_list:eq(2)>p:eq(0)").removeClass("verify");
		} else {
			$(".select_list:eq(2)>p:eq(0)").addClass("verify");
		}
		if((xindairecord=="3" && edu=="1") || (xindairecord=="1" && edu=="1" && hkqk=="1")){
			// $(".xykNwbox-con .ApplyHidnr>dl:eq(3)").after("<dl><dt></dt><dd><font color='red'>抱歉，您暂不满足银行信用卡发卡要求！</font></dd></dl>");
			$(".perror").html("抱歉，您暂不满足银行信用卡发卡要求！");
			$(".perror").show();
			$(".select_btn>a>input").show();
			$(".select_btn>a>input").val("申请其他银行信用卡");
			$(".select_btn>a").attr("href","http://credit.cngold.org/xyksq/");
			$(".select_btn>a").unbind("click");
			return true;
		}else if(xindairecord!="" && edu!="" && hkqk!=""){
			$(".perror").hide();
			$(".select_btn>a>input").show();
			$(".select_btn>a").attr("href","###");
			$(".select_btn>a").bind("click",function(){
				if(checkrad(2,id,url)){
					applyAjax(id,url,mvcurl);
				}
			});
			return true;
		}else{
			$(".select_btn>a>input").hide();
			$(".perror").hide();
			return false;
		}
	}
}

function applyAjax(id,url,mvcurl) {
	$.ajax({
        type:"POST",
        url:"http://credit.cngold.org/s/rc"+id,
        dataType:"json",
        contentType:"application/json",
        data:mvcurl,
        success:function(data){
        }
    });
    window.open(url);
}

function closePop(){
	$("#credit-popbox").hide();
}
function searchCard(){
	console.log("searchCard");
}
$(document).ready(function(){
	$("#select_choose").live('click',function(){
		var choose_index=$("#select_choose").val();
		if(choose_index==4){
			$("#decide_enter").show();
			$(this).parent().parent().find("label.cfl").addClass("check-pass");
			$("#reminder").hide();
		}else if(choose_index !=0 && choose_index !=4){
			$("#decide_enter").show();
			$("#reminder").show();
			$(this).parent().parent().find("label.cfl").removeClass("check-pass");
		} else {
			$("#decide_enter").hide();
			$("#reminder").hide();
			$(this).parent().parent().find("label.cfl").removeClass("check-pass");
		}
	});
	$("#keywords").keydown(function(event){ 
		if(event.keyCode==13){
			searchCard();
			return false;
		}
	});
});
