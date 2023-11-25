/** @file submit-test-async.js */

window.addEventListener('load', function() {

    let form = document.querySelector('#submit-form-async');
    
    // 폼 전송시 이벤트 핸들러 등록
    form.addEventListener('submit', async function(evt) {
        // 기존 이벤트 무시
        evt.preventDefault();

        // 폼 데이터를 가져옴 (input 값들)
        let formData = new FormData(form);
        
        // 폼 메서드와 액션을 가져옴
        let url    = form.getAttribute('action');
        let method = form.getAttribute('method');

        // 서버로 비동기 전송을 시도
        let promise = fetch(url, {
            method: method,
            body  : formData
        });

        // // 요청 완료 후 응답을 처리하기 위한 콜백 등록
        // let textPromise = promise.then(function(response) {
        //     return response.text();
        // });

        // // 요청 body를 텍스트로 변환하는 promise 객체에
        // // 반환 완료 후 동작을 위한 콜백 등록
        // textPromise.then(function(text){
        //     let receive = document.querySelector("#receive");
        //     receive.value = text;
        // });

        // (async function(){
        //     let response = await fetch(url, {
        //         method : method,
        //         body : formData
        //     });

        //     let text = await response.text();

        //     let receive = document.querySelector("#receive");
        //     receive.value = text;
        // })();

        let response = await fetch(url, {
            method : method,
            body : formData
        });

        let text = await response.text();

        let receive = document.querySelector("#receive");
        receive.value = text;

    });
});