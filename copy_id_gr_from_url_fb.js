javascript:
function fail(){
alert("Bạn phải ở đúng trang đã");
}
function copy(id){
var b=document.createElement("textarea"),c=document.getSelection();
b.textContent=id,document.body.appendChild(b),c.removeAllRanges(),b.select(),document.execCommand("copy"),c.removeAllRanges(),document.body.removeChild(b)
};
function getMe(){
    try{
        var id = encodeURIComponent(require("TimelineController").getProfileID());
        if(id!="null") return id;
        else return "0";
    }
    catch (e){
        return "0";
    }
}
function getGroup(){
    try{
        var div = document.getElementsByClassName("coverWrap");
        var id = div[0].dataset.referrerid;
        if(id!="null") return id;
        else return "0";
    }
    catch (e){
        return "0";
    }
}
function getPage(){
    try{
        var id = encodeURIComponent(require("CurrentPage").getID());
        if(id!="null") return id;
        else return "0";
    }
    catch (e){
        return "0";
    }
}
 
var id = getMe();
if(id=="0"){
    id = getGroup();
    if(id=="0"){
        id = getPage();
    }
}
console.log(id);
if(id!="0"){
    alert("Welcome Đức Sơn <3\nDone!");
    copy(id);
}
else{
    fail();
}