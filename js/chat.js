$(document).ready(function () {
  $(".header").load("../html/header.html");
});


$('#submitButton').click(function() {
  // 버튼이 클릭되었을 때 실행할 코드 작성

  const subject = "we talk about " + $('#action').val() + " Please answer in one line";
  const userChat = $('#userChat').val();
  alert(subject);
  alert(userChat);
  const url = 'http://localhost:80/chat-gpt/question';

  const data = {
    userRequest: subject,
    question: userChat
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(responseData => {
      // 요청에 대한 응답 처리
      alert(JSON.stringify(responseData));
    })
    .catch(error => {
      // 오류 처리
      console.error('Error:', error);
    });
});
