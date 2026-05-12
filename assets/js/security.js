// 1. 우클릭 방지 (이미지 전용)
document.addEventListener('contextmenu', function(e) {
  // 클릭된 대상이 이미지(IMG)이거나 이미지의 자식 요소일 경우
  if (e.target.nodeName === 'IMG' || e.target.closest('img')) {
    e.preventDefault();
    return false;
  }
}, false);

// 2. 드래그 방지 (이미지 전용)
document.addEventListener('dragstart', function(e) {
  if (e.target.nodeName === 'IMG' || e.target.closest('img')) {
    e.preventDefault();
    return false;
  }
}, false);

// 3. 개발자 도구 및 소스보기 단축키 차단
document.onkeydown = function(e) {
  // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  if (
    e.keyCode === 123 || 
    (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || 
    (e.ctrlKey && e.keyCode === 85)
  ) {
    return false;
  }
};
