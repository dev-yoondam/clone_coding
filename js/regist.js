const emailInput = document.querySelector('.box-email-input');
const emailSelect = document.querySelector('.box-email-select');
const emailTitle = document.querySelector('.title-email');
const emailWarning = document.querySelector('.warning-email');
const emailButton = document.querySelector('.email-button');
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
let pwStatus = 0;
let nicknameStatus = 0;
let checkPwStatus = 0;
let statusCnt = 0;

/* 1. 이메일 ----------------------------------------------------------------------- */
function email() {
  /* 포커스 */
  emailInput.addEventListener('click', () => {
    const text = document.getElementById('email').value;

    if (emailStatus < 1) {
      emailStatus = 10;
      emailInput.setAttribute('style', correctShadow + transition);
    } else if (emailStatus >= 1 && !text) {
      emailStatus++;
      console.log(statusCnt);
      emailInput.setAttribute('style', warningShadow + warningBorder + transition);
    }
  });

  /* 포커스 아웃  */
  emailInput.addEventListener('focusout', () => {
    const text = document.getElementById('email').value;
    const select = document.querySelector('.box-email-select select').value;

    if (!text && !select) {
      emailInput.setAttribute('style', warningBorder);
      emailSelect.setAttribute('style', warningBorder);
      emailTitle.setAttribute('style', warningColor);
      emailWarning.innerText = '필수 입력 항목입니다.';
    } else if (!text || !select) {
      emailInput.setAttribute('style', warningBorder);
      emailSelect.setAttribute('style', warningBorder);
      emailTitle.setAttribute('style', warningColor);
      emailWarning.innerText = '이메일 형식이 올바르지 않습니다.';
    } else {
      console.log('둘 다 value 있음');
      emailInput.setAttribute('style', originBorder);
      emailSelect.setAttribute('style', originBorder);
      emailTitle.setAttribute('style', originColor);
      emailWarning.innerText = '';
      emailButton.setAttribute(
        'style',
        'background-color : #fff; border-color : #35c5f0; color : #35c5f0'
      );
    }
  });
} // email() 끝

email();

/* 2. 비밀번호 --------------------------------------------------------------------------- */
const pwInput = document.querySelector('.pw-input');
const pwWarning = document.querySelector('.warning-pw');
const pwTitle = document.querySelector('.title-pw');
/* 경고 */

function pw() {
  // 클릭시

  pwInput.addEventListener('click', () => {
    if (pwStatus < 1) {
      pwStatus = 10;
      pwInput.setAttribute('style', correctShadow + transition);
    } else if (pwStatus >= 1 && !pwInput.value) {
      pwStatus++;
      console.log(pwStatus);
      pwInput.setAttribute('style', warningShadow + warningBorder + transition);
    }
  });

  pwInput.addEventListener('focusout', () => {
    if (!pwInput.value) {
      pwInput.setAttribute('style', warningBorder);
      pwTitle.setAttribute('style', warningColor);
      pwWarning.innerText = '필수 입력 항목입니다.';
    } else {
      pwInput.setAttribute('style', originBorder);
      pwTitle.setAttribute('style', originColor);
      pwWarning.innerText = '';
    }
  });
}

pw();

/* 3. 비밀번호 확인 --------------------------------------------------------------- */
const checkPwInput = document.querySelector('.pw-check-input');
const checkPwTitle = document.querySelector('.pw-check-title');
const checkPwWarning = document.querySelector('.warning-pw-check');

function isMatch(password1, password2) {
  return password1 === password2;
}

function pwCheck() {
  checkPwInput.addEventListener('click', () => {
    if (checkPwStatus < 1) {
      checkPwStatus = 10;
      checkPwInput.setAttribute('style', correctShadow + transition);
    } else if (checkPwStatus >= 1 && !checkPwInput.value) {
      checkPwStatus++;
      checkPwInput.setAttribute('style', warningShadow + warningBorder + transition);
    }
  });

  checkPwInput.addEventListener('focusout', () => {
    console.log('포커스아웃');
    console.log(checkPwInput.value);
    console.log(pwInput.value);

    if (!checkPwInput.value) {
      console.log('비번확인 입력 안 함');
      checkPwInput.setAttribute('style', warningBorder);
      checkPwTitle.setAttribute('style', warningColor);
      checkPwWarning.innerText = '비밀번호가 일치하지 않습니다.';
    } else if (isMatch(checkPwInput.value, pwInput.value)) {
      console.log('비밀번호 일치');
      checkPwInput.setAttribute('style', originBorder);
      checkPwTitle.setAttribute('style', originColor);
      checkPwWarning.innerText = '';
    } else {
      console.log('비번확인 입력 안 함22');
      checkPwInput.setAttribute('style', warningBorder);
      checkPwTitle.setAttribute('style', warningColor);
      checkPwWarning.innerText = '비밀번호가 일치하지 않습니다.';
    }
  });
}

pwCheck();

/* 4. 닉네임 ------------------------------------------------------------------- */
const nicknameInput = document.querySelector('.nickname-input');
const nicknameTitle = document.querySelector('.title-nickname');
const nicknameWarning = document.querySelector('.warning-nick');

function nickName() {
  nicknameInput.addEventListener('click', () => {
    if (statusCnt < 1) {
      statusCnt = 10;
      nicknameInput.setAttribute('style', correctShadow + transition);
    } else if (statusCnt >= 1 && !nicknameInput.value) {
      statusCnt++;
      nicknameInput.setAttribute('style', warningShadow + warningBorder + transition);
    } else if (nicknameInput.value > 2) {
      nicknameInput.setAttribute('style', correctShadow + transition);
    }
  });

  nicknameInput.addEventListener('focusout', () => {
    if (!nicknameInput.value) {
      nicknameInput.setAttribute('style', warningBorder);
      nicknameTitle.setAttribute('style', warningColor);
      nicknameWarning.innerText = '필수 입력 항목입니다.';
    } else if (nicknameInput.value.length <= 2) {
      nicknameInput.setAttribute('style', warningBorder);
      nicknameTitle.setAttribute('style', warningColor);
      nicknameWarning.innerText = '2자 이상 입력해주세요.';
    } else {
      nicknameInput.setAttribute('style', originBorder);
      nicknameTitle.setAttribute('style', originColor);
      nicknameWarning.innerText = '';
    }
  });
}

nickName();

/* 5. 전체약관동의 ------------------------------------------------------------- */
NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.forEach = Array.prototype.forEach;

const all = document.querySelector('.all');
const terms = document.querySelectorAll('input.etc');
console.log(terms);

all.addEventListener('click', () => {
  terms.forEach((term) => {
    term.checked = all.checked;
  });
});

terms.forEach((term) => {
  term.addEventListener('click', (e) => {
    all.checked = terms.map((term) => term.checked).filter((checked) => checked).length === 5;
  });
});
