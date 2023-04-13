function getCurrentDate() {
  fetch('/date')
  .then(response => {
    if (response.ok) {
      return response.text();
    }
    throw new Error('readyState or stateCode 상태에 문제있음');
  })
  .then(date => {
    const root = document.getElementById('root');
    root.innerHTML = date;
  })
  .catch(error => {
    console.error("fetch 처리가 에러가 발생했을 때 catch 구문이 실행되는 예외처리 방식입니다.");
  });
}

setInterval(getCurrentDate, 1000);