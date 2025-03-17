(function (){ 
window["公用模块"] = {}
function ts_lnbox(msg){

    alert(msg);

}

function ts_ask(msg){





    return confirm(msg);

}

function ts_input(prompt, content){





    return prompt(prompt,content);

}

function trace(msg){



	console.log(msg);

}

function str_verticalbar(str){





	var tstr;

	var tstrs;

	var tstr2;

	var index= 0;



	tstr = str;

	if(tstr == "" ){

		return "";

	}

	tstrs = 文本操作.分割文本(tstr,"|");

	if(数组操作.取成员数 (tstrs) == 0 ){

		return "";

	}else{

		tstr = "";

		mui.each(tstrs,function(索引,成员){

			tstr2 = tstrs[index];

			if(tstr == "" ){

				tstr = "　　" + tstr2;

			}else{

				tstr = tstr + "\n" + "　　" + tstr2;

			}

			index = index + 1;

		})

		return tstr;

	}

}

function str_encrypt(str, pw){





	var tstr;

	if(pw == null ){

		pw = "ucksjg";

	}

	tstr = 加密操作1.rc4加密(str, pw);

	return(tstr);

}

function str_decrypt(str, pw){





	var tstr;

	if(pw == null ){

		pw = "fucksjg";

	}

	tstr = 加密操作1.rc4解密(str, pw);

	return(tstr);

}

function str_timenow(){





	var tstr;





	tstr = 时间操作.取现行日期() + "/" + 时间操作.取现行时间();



	tstr = 文本操作.子文本替换(tstr, "/", "");

	tstr = 文本操作.子文本替换(tstr, ":", "");

	return(tstr);

}

function str_getrandomnumber(len){





	var tstr= "";

	while(文本操作.取文本长度(tstr) < len){

		tstr = tstr + 转换操作.到文本(数学操作.取随机数(1, 9));

	}

	return tstr;

}

function str_isnumber(str){





	var tlog= false;

	var tnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

	var index= 0;

	mui.each(tnums,function(索引,成员){

		if(str == 转换操作.到文本(成员) ){

			tlog = true;

			return false;

		}

		index = index + 1;

	})

	return tlog;

}

function time_wait(ms){



	var tnum1;

	var tnum2;

	公用模块.trace("开始等待");

	tnum1 = 时间操作.取时间戳(时间操作.取当前日期时间());

	tnum2 = 时间操作.取时间戳(时间操作.取当前日期时间());

	while( tnum2 - tnum1 < ms){

		tnum2 = 时间操作.取时间戳(时间操作.取当前日期时间());

	}

	公用模块.trace("等待结束");

}

function str_cnblogsurl(url){



	var tstr;

	var tstr2;

	var tnum;

	var tstrs;

	tstr = url;



	tstrs = 文本操作.取指定文本(tstr, "t=", "&download");

	if(数组操作.取成员数(tstrs) != 0 ){

		tstr = tstrs[0];

		console.log("取到的中间文本：" + tstr);

		tstr2 = tstr;



		tnum = 文本操作.取文本长度(tstr);



		tstr = 公用模块.str_getrandomnumber(tnum);





		tstr = 文本操作.子文本替换(url, tstr2, tstr);







	}else{

		tstr = url;



	}

	return tstr;

}

function str_getmid(str, begin, end){

	var tstr;

	var tstrs;

	tstrs = 文本操作.取指定文本(str, begin, end);

	if(数组操作.取成员数(tstrs) != 0 ){

		tstr = tstrs[0];

		return tstr;

	}else{

		return "";

	}

}

function num_isinarray(num,array){

	var tlog= false;

	mui.each(array,function(索引,成员){







		if(num==成员 ){

			tlog=true;

			return tlog;

		}

	})

	return tlog;

}

function num_getrandom(min, max, count){

	var tarray = [];

	var tnum;

	tnum = 数学操作.取随机数(min,max);

	数组操作.加入尾成员(tarray,tnum);

	while(数组操作.取成员数(tarray) < count){

		tnum = 数学操作.取随机数(min, max);

		while(num_isinarray(tnum,tarray) == true){

			tnum = 数学操作.取随机数(min,max);

		}

		数组操作.加入尾成员(tarray,tnum);

	}

	return tarray;

}
window["公用模块"]["ts_lnbox"]=ts_lnbox;
window["公用模块"]["ts_ask"]=ts_ask;
window["公用模块"]["ts_input"]=ts_input;
window["公用模块"]["trace"]=trace;
window["公用模块"]["str_verticalbar"]=str_verticalbar;
window["公用模块"]["str_encrypt"]=str_encrypt;
window["公用模块"]["str_decrypt"]=str_decrypt;
window["公用模块"]["str_timenow"]=str_timenow;
window["公用模块"]["str_getrandomnumber"]=str_getrandomnumber;
window["公用模块"]["str_isnumber"]=str_isnumber;
window["公用模块"]["time_wait"]=time_wait;
window["公用模块"]["str_cnblogsurl"]=str_cnblogsurl;
window["公用模块"]["str_getmid"]=str_getmid;
window["公用模块"]["num_isinarray"]=num_isinarray;
window["公用模块"]["num_getrandom"]=num_getrandom;
})();