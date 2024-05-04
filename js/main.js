const bookmark = document.querySelectorAll('.ul-photoList li');
const fill = document.querySelector('.bookmark-fill');
const blank = document.querySelector('.bookmark-blank');

/* 1. 북마크 하다 만거 =============================================================================== */
/* bookmark.forEach((bookmark) => {
  let status = false;

  bookmark.addEventListener('click', () => {
    if (status) {
      // 비었다면
      fill.setAttribute('style', 'display : block');
      blank.setAttribute('style', 'display : none');
    } else {
      fill.setAttribute('style', 'display : none');
      blank.setAttribute('style', 'display : block');
    }
    status = !status;
  });
}); */

/* 2. 글쓰기 버튼 : 클릭 드롭다운  ---------------------------------------------------------------- */
const writeButton = document.querySelector('.btn-write');
const writeDropdown = document.querySelector('.dropdown-write');

writeButton.addEventListener('click', () => {
  writeDropdown.setAttribute('style', 'display : block; transition : opacity 0.2s ease 0s;');
});
writeButton.addEventListener('blur', () => {
  writeDropdown.setAttribute('style', 'display : none');
});

/* 2. 슬라이드배너 오른쪽  ----------------------------------------------------------------*/
const rightBanner = document.querySelector('.right-banner-relative');
const allArr = document.querySelector('.banner-arr');

const slideBox = document.querySelector('.right-banner'); // 보여지는
const slideBoxUl = document.querySelector('.box-right-banner');
const slideIme = document.querySelectorAll('.right-slide-img'); // 움직이는
/* 화살표 */
const prevBtn = document.querySelector('.arr-left');
const nextBtn = document.querySelector('.arr-right');
const currCnt = document.querySelector('.current-count');
const allCnt = document.querySelector('.all-count');

let slideWidth = 270;
let currIdx = 0;
let slideCnt = slideIme.length;

currCnt.innerText = 1;

/* 2-1. 배너 클릭시 넘어가는거 ---------------------------------------------------------------- */
checkEnd();

nextBtn.addEventListener('click', () => {
  currIdx++;
  currCnt.innerText = currIdx + 1;
  slideBox.style.left = -(currIdx * slideWidth) + 'px';
  slideBox.style.transition = '0.5s ease';
  checkEnd();
});

prevBtn.addEventListener('click', () => {
  currIdx--;
  currCnt.innerText = currIdx + 1;
  slideBox.style.left = -(currIdx * slideWidth) + 'px';
  slideBox.style.transition = '0.5s ease';
  checkEnd();
});

allCnt.innerText = slideCnt;
// 2-2. 슬라이드가 처음이나 마지막에 도달했는지 확인하고 이전/다음 버튼을 표시/숨김처리
function checkEnd() {
  if (currIdx <= 0) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
  }

  if (currIdx >= slideCnt - 1) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
  }
}
/* 2-3.부들부들 화살표 ---------------------------------------------------------------- 수정해 !!! */
slideBox.addEventListener('mouseleave', () => {
  prevBtn.style.display = 'none';
  nextBtn.style.display = 'none';
});

slideBox.addEventListener('mouseenter', () => {
  checkEnd();
});

/* 3. 하단 nav 드롭다운   ---------------------------------------------------------------- */

/* 3-1. 드롭다운 1  왼쪽 */
const ddOneBtn = document.querySelector('.down-btn');
const ddTwoBtn = document.querySelector('.btn-chart');
const ddListOne = document.querySelector('.dropdown-first');
const ddListTwo = document.querySelector('.dropdown-second');

ddOneBtn.addEventListener('click', () => {
  console.log('클릭');
  ddListOne.setAttribute('style', 'display : block;');
});
document.addEventListener('click', (event) => {
  if (!ddOneBtn.contains(event.target)) {
    ddListOne.style.display = 'none';
  }
});

/* 3-2. 드롭다운 2 오른쪽 */
ddTwoBtn.addEventListener('click', () => {
  ddListTwo.setAttribute('style', 'display : block;');
  ddListTwo.style.transition = 'opacity 0.5s ease';
});
ddTwoBtn.addEventListener('blur', () => {
  ddListTwo.setAttribute('style', 'display : none');
  ddListTwo.style.transition = 'opacity 0.5s ease';
});




/* 4. 서치박스 드롭다운 ---------------------------------------------------------------- */
const searchBox = document.querySelector('.wrap-search');
const searchDropdown = document.querySelector('.dropdown-search');

searchBox.addEventListener('click', () => {
  searchDropdown.setAttribute('style', 'display : block;');
  searchDropdown.style.transition = 'opacity 0.5s ease';
});
document.addEventListener('click', (event) => {
  if (!searchBox.contains(event.target)) {
    searchDropdown.style.display = 'none';
  }
});
