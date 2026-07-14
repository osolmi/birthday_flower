const openBtn = document.querySelector('#birthday_result_btn');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('main')
console.log (openBtn)
console.log (popup)
openBtn.addEventListener('click',function(){
    popup.style.display='flex';
});
popupClose.addEventListener('click', function(){
    popup.style.display='none'
})