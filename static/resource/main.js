window.addEventListener('load', function() {
    loadUserInfo();
    loadUserRepo();
    loadUserGist();
});


async function loadUserInfo(){
    let url = '/git/user';
    let method = 'GET';

    // 요청 후 응답 객체 받기
    let response = await fetch(url, {method: method});
    // 응답 body에서 텍스트 받기
    let text = await response.text();
    // json 형식의 text를 객체로 변환
    let user = JSON.parse(text);

    // 데이터를 뿌려줄 HTML 엘리먼트 수집
    let userImg = document.querySelector('#user-img');
    let userName = document.querySelector('#user-name');
    let userEmail = document.querySelector('#user-email');
    let userLink = document.querySelector('#user-link');

    userImg.src = user.img;
    userName.innerText = user.nickname + ' ' + user.name;
    userEmail.innerText = user.email;
    userLink.href = user.url;
}

async function loadUserRepo() {
    let url = '/git/repo';
    let method = 'GET';

    let response = await fetch(url, {method: method});
    let repo = await response.json();

    let repolist = document.querySelector('#repo-list');

    for (let r of repo) {
        let li = document.createElement('li');
        li.className = 'list-group-item';
        
        let a = document.createElement('a');
        a.href = r.url;
        a.innerText = r.title;
        
        li.append(a);
        repolist.append(li);
    }
}

async function loadUserGist() {
    let url = '/git/gist';
    let method = 'GET';

    let response = await fetch(url, {method: method});
    let gist = await response.json();

    let gistlist = document.querySelector('#gist-list');

    for (let g of gist) {
        let li = document.createElement('li');
        li.className = 'list-group-item';

        let a = document.createElement('a');
        a.href = g.url;
        a.innerText = g.title;

        li.append(a);
        gistlist.append(li);
    }
}
