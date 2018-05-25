var wsUrl = "ws://39.107.64.146:10666/message";
var baseUrl = "http://198.13.40.99:8000";
//var baseUrl = "http://localhost:37735/";


//格式化状态
function formtState(Status) {
	switch(Status) {
		case 1:
			return "未处理";
		case 2:
			return "勘查完成,未处理";
		case 3:
			return "处理完成";
		case 4:
			return "处理中";
		case 5:
			return "采购中";
		case 6:
			return "采购完成";
		case 7:
			return "施工中";
		case 8:
			return "施工完成";
		default:
			return "";
	}
}


//格式化日期
function formatyn(nS) {
	if(nS != null) {
		var birthdayMilliseconds = parseInt(nS.replace(/\D/igm, ""));
		var datetime = new Date(birthdayMilliseconds);
		var year = datetime.getFullYear();
		var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
		var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
		var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
		var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
		var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
		return month + "/" + date + " " + hour + ":" + minute;
	}
}
//textarea高度自动
function autoGrow(oField) {
	if(oField.scrollHeight > oField.clientHeight) {
		oField.style.height = oField.scrollHeight + "px";
	}
}

function gotoMain(){
	mui.back()
	//返回到index  
	//openwindow方法回造成
//	mui.openWindow({
//		url: "index.html",
//	})     
}
