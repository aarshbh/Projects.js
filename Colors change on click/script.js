const randomColor = function () {
  const hexCode = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexCode[Math.floor(Math.random() * hexCode.length)];
  }
  return color;
};
let intervalClass
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

start.addEventListener('click',function(){
    if(!intervalClass){
        intervalClass = setInterval(changeBgColor,1000);
    }
    function changeBgColor() { 
        document.body.style.backgroundColor = randomColor();
    }

})


stop.addEventListener('click',function(){
    clearInterval(intervalClass)
    intervalClass = null;
})