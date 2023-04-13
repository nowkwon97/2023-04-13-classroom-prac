function getCurrentDate() {
  const xhr = new XMLHttpRequest();
  // xhr은 'new' 키워드를 사용하였기에 어떠한 생성자 함수로부터 인스턴스로
  // '객체'를 생성한 행위이다. 즉 xhr는 객체이다.
  xhr.addEventListener('readystatechange', function() {
    if (this.readyState === 4 && this.status === 200) {
      const root = document.getElementById('root');
      root.innerHTML = this.responseText;
      // 일련의 text 데이터가 innerHTML 객체에 할당되는 것을 알 수 있음
    }
  });
  /*
    1. 위의 코드를 보았을 때 문서는 어떤 데이터를 받아와 문서에 새기는 동작이다.
    2. status === 200은 서버가 정상적으로 응답했다는 의미이다.
    3. readyState === 4는 서버가 응답을 완료했다는 의미이다.
    3-1. readyState 값은 말 그대로 '준비상태'를 의미한다.
    3-2. 숫자 4는 서버가 응답을 해서 어떤 데이터를 가져왔다는 의미이고, 준비'절차'는 약속이다.
    3-3. 0부터 4까지의 숫자는 각각 준비상태를 의미함

    0 UNSET, 1 OPENED, 2 HEADERS_RECEIVED, 3 LOADING, 4 DONE (위 코드에 해당)
  */
  xhr.open('GET', '/date');
  // 1. GET 방식으로 서버에 요청을 보낸다.
  // 2. '/date', GET 요청이므로 URL querystring에 해당
  // 3. 서버의 request로 url을 감지하여 그에 맞는 response를 보내준다.
  xhr.send();
  // 4. 보내는 동작
}
setInterval(getCurrentDate, 1000);

/*
  * "문서" vs app server 와 서로 통신하는 방법 "AJAX"
  * 1. XMLHttpRequest : 클래식한 방법이자, server의 response 응답패턴이 비슷하다.
  * 2. fetch : Promise 기반의 선언형 통신 방법, Promise의 장점을 살리면서도 간략함.
  * 대표적인 두 가지 방법이 '사람을 대신해' 서버와의 요청 응답을 처리한다.
*/