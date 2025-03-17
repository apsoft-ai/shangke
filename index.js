mui.init({swipeBack: false
,gestureConfig: {tap:true,doubletap:true,longtap:true,hold:true,release:true}});

var 标题栏1 = new 标题栏("标题栏1",null,null,null);
var 编辑框1 = new 编辑框("编辑框1",null,null,null,null,null);
var 按钮1 = new 按钮("按钮1",按钮1_被单击,null,null);
var 按钮4 = new 按钮("按钮4",按钮4_被单击,null,null);
var 按钮2 = new 按钮("按钮2",null,null,null);
var 按钮3 = new 按钮("按钮3",null,null,null);
var 按钮5 = new 按钮("按钮5",按钮5_被单击,null,null);
var 按钮6 = new 按钮("按钮6",按钮6_被单击,null,null);
var 网络操作1 = new 网络操作("网络操作1",网络操作1_发送完毕);
if(mui.os.plus){
    mui.plusReady(function() {
        主窗口_创建完毕();
        
    });
}else{
    window.onload=function(){ 
        主窗口_创建完毕();
        
    }
}

var xuehao = [];
var xingming = [];
var index= 0;




function 主窗口_创建完毕(){
	列所有名字();
}

function 列所有名字(){
	网络操作1.发送网络请求("files/changqinghu.txt","get","txt","",5000);



}
function 网络操作1_发送完毕(发送结果,返回信息){
	编辑框1.置内容(返回信息);
}
function 按钮1_被单击(){
	var tstr;
	var tstrs;
	var tstrs2;
	var tarray = [];
	tstrs=文本操作.分割文本(编辑框1.取内容(),"\n");
	tarray=公用模块.num_getrandom(0,数组操作.取成员数(tstrs)-1,6);
	console.log( 公用模块.trace(tarray));
	编辑框1.置内容("");
	mui.each(tarray,function(索引,成员){
		编辑框1.置内容(编辑框1.取内容() + "\n" + tstrs[成员]);
	})

	tstrs=文本操作.分割文本(编辑框1.取内容(),"\n");
	公用模块.trace(tstrs);

	数组操作.清空数组(xuehao);
	数组操作.清空数组(xingming);
	mui.each(tstrs,function(索引,成员){
		tstr=成员;
		公用模块.trace(tstr);
		if(文本操作.删首尾空(tstr)!="" ){
			tstrs2=文本操作.分割文本(tstr,"，");
			数组操作.加入尾成员(xuehao,tstrs2[0]);
			数组操作.加入尾成员(xingming,tstrs2[1]);
		}

	})

	公用模块.trace(xuehao);
	公用模块.trace(xingming);

	index=0;

	按钮2.置标题(xuehao[index]);
	按钮3.置标题(xingming[index]);
	按钮1.置可视(false);


}
function 按钮4_被单击(){
	if(index>4 ){
		公用模块.ts_lnbox("已经全部点完！");
		return;
	}
	index=index+1;
	按钮2.置标题(xuehao[index]);
	按钮3.置标题(xingming[index]);


}
function 按钮5_被单击(){
	读写设置.保存设置("缺勤",公用模块.str_timenow() + " " + 按钮3.取标题());

}
function 按钮6_被单击(){
	var tstr;
	tstr=读写设置.读取设置("缺勤");
	公用模块.ts_lnbox(tstr);
}