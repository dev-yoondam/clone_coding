function checkEnd(){
  slideBox.addEventListener('mouseover', ()=> {


    if (currIdx <= 0) {
      prevBtn.setAttribute('style', 'display : none');
    } else {
      prevBtn.setAttribute('style', 'display : block');
    }
    
    if (currIdx >= slideCnt - 1) {
      nextBtn.setAttribute('style', 'display : none');
    } else {
      nextBtn.setAttribute('style', 'display : block');
    }

  })
};



/* 기존코드 ==================================================================== */
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
};

/*배너 마우스오버 화살표               */
slideBox.addEventListener('mouseover', () => {
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
});