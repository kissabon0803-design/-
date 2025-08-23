let count =0;
document.getElementById("button1").addEventListener("click",function() {
count ++;
document.getElementById("result").textContent = count;
});
document.getElementById("button2").addEventListener("click",function(){
count --;
document.getElementById("result").textContent = count;
});
document.getElementById("reset").addEventListener("click",function(){
count = 0;
document.getElementById("result").textContent =count;    
});