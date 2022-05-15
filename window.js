var mynewWindow;
function openWindow(){
    mynewWindow = window.open("", "", "height=300px, width=500px, top=100px,left=100px");
    mynewWindow.document.write("<h1>Welcome to new window...!</h1>");
}
function closeWindow(){
    mynewWindow.close();
}
function moveTo(){
    mynewWindow.moveTo(50,50);
    mynewWindow.focus();
}
function moveBy(){
    mynewWindow.moveBy(50,100);
    mynewWindow.focus();
}