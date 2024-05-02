const emailBox = document.querySelector('.box-email-input');
const pwBox = document.querySelector('.box-pw-input');


// 경고
const warningBorder = 'border: 1px solid #FF7777;';
const warningColor = 'color : #FF7777;';
const warningShadow = 'box-shadow : 0 0 0 3px rgba(255, 119, 119, .3);';
const originBorder = 'border : 1px solid #dbdbdb;';
const originColor = 'color : #2f3438;';
const correctShadow = 'box-shadow : 0 0 0 3px rgba(53, 197, 240, .3);';
const correctBorder = 'border : 1px solid #35c5f0;';
const transition = 'transition : 200ms;';

let emailStatus = 0;

/* 1. 이메일 ---------------------------------------------------------------------- */
function email() {
  /* 포커스 */
  emailBox.addEventListener('click', () => {
    const text = document.getElementById('id').value;

    if(emailStatus < 1 ){
      emailStatus = 10;
      emailBox.setAttribute('style', correctShadow +transition );
    }else if(emailStatus >= 1 && !text){
      emailStatus++;
      emailBox.setAttribute('style', warningShadow + warningBorder + transition) ;
    } ;

  });

  /* 포커스 아웃  */
  emailBox.addEventListener('focusout', () => {
    const text = document.getElementById('id').value;
    if (!text) {
      emailBox.setAttribute('style', warningBorder);
    } else {
      emailBox.setAttribute('style', originBorder);
    }
  });
}
/* 2. 비밀번호 ---------------------------------------------------------------------- */
let pwStatus = 0;

function password() {
  const text = document.getElementById('pw').value;
  pwBox.addEventListener('click', () => {
    if(pwStatus < 1 ){
      pwStatus = 10;
      pwBox.setAttribute('style', correctShadow + transition );
    }else if(pwStatus >= 1 && !text){
      pwStatus++;
      pwBox.setAttribute('style', warningShadow + warningBorder + transition) ;
    } ;

  });

  pwBox.addEventListener('focusout', () => {
    const text = document.getElementById('pw').value;
    if (!text) {
      pwBox.setAttribute('style', 'border : 1px solid red');
    } else {
      pwBox.setAttribute('style', 'border : 1px solid #dbdbdb');
    }
  });
}

email();















/* 
emailBox.addEventListener('click', () => {
  console.log('클릭');
  emailBox.setAttribute('style', 'border : 1px solid #35c5f0; outline: none; box-shadow: 0 0 0 3px #44c4eb50; transition : 300ms;');
});

emailBox.addEventListener('focusout', () => {
  console.log('blur');
  emailBox.setAttribute('style', 'border : 1px solid red');
});
 */
