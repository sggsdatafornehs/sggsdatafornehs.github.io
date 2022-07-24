function login() {
    var sss
var username = document.getElementById("username");
var pass = document.getElementById("password");
if (username.value == "") {
alert("請輸入使用者名稱");
} else if (pass.value  == "") {
alert("請輸入密碼");
} 
    else {
sss=username.value+pass.value
        location.href=sss
}
}
document.onmousedown = function(e){
    if ( e.which == 2 ){// 滑鼠滾下，滾動不觸發
        return false;
    }
    if( e.which==3 ){// 滑鼠右鍵
        return false;
    }
}
document.onkeydown = function(){

        if (window.event && window.event.keyCode == 123) {
            event.keyCode = 0;
            event.returnValue = false;
        }

    


}
