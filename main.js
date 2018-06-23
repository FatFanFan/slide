var allButtons = $('#buttons > span')
for(let i =0;i<allButtons.length;i++){
  $(allButtons[i]).on('click',function(x){
    var index = $(x.currentTarget).index()
    var p = index * -275
    $('#images').css({
     transform: 'translate('+ p + 'px)'
    })
    n = index //初始化，再继续
    activeButton(allButtons.eq(n))
  })
}
//初始化
var n = 0;
var size = allButtons.length
clickButton(n % size)
//自动播放
var timerId = setTimer()
//触发停止
$('.window').on('mouseenter',function(){
   window.clearInterval(timerId)
 })
//离开继续
$('.window').on('mouseleave',function(){
  setTimer()
})
//函数封装
function activeButton($button) {
  $button
    .addClass('red')
    .siblings('.red').removeClass('red')
}
function setTimer() {
  return setInterval(() => {
    n += 1
  clickButton(n % size)
  }, 1000)
}
function clickButton(index){
 allButtons.eq(index).trigger('click')
}
