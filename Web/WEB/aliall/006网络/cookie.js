function setCookie(name,value,day){
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+day);
    document.cookie=name+"="+value+";expires="+oDate;
}

function getCookie(name){
    var str=document.cookie;
    var arr=str.split("; ");
    for(var i=0;i<arr.length;i++){
        var arr1=arr[i].split("=");
        if(arr1[0]==name){
            return arr1[1];
        }
    } 
}
function removeCookie(name){
    setCookie(name,1,-1);
}