
const openBtn = document.querySelector('#birthday_result_btn');

console.log (openBtn)
// 12로 값 변경하기
const users_birthday = document.querySelector('#users_birthday')
console.log (users_birthday)
function birthday12(){
    users_birthday.value = 12;
}

// 나의 꽃과 꽃말 만나기 클릭 시 팝업창 띄우고 배경 어둡게 만들기
const popup = document.querySelector('.popup');
const popup_bg = document.querySelector('.popup_bg')
//자바스크립트에서 css쓰려면 작성하는 속성 -> 객체.style.속성 = 값
console.log (popup, popup_bg)
popup.style.display = 'none';
popup_bg.style.display = 'none';
//자바스크립트에서 display=none으로 숨겼다가 특정이벤트에 따라 다시 보이게하고 싶을때
//무조건 block을 쓰는게 아닌 그 선택자가 원래 가지고 있는 display속성으로 되돌리기
//display:flex가 선택자의 원래 속성이라면, 자바스크립트도 display=flex
//display가 선택자에 없었다면, 원래 태그 고유속성에 따라 display=block 또는 display=inline
function popup_show(){
    popup.style.display = 'flex';
    popup_bg.style.display = 'block';
}
function popup_close(){
    popup.style.display = 'none';
    popup_bg.style.display = 'none';
}