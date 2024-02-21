window.addEventListener('DOMContentLoaded', function () {
    let button = this.document.querySelector('#export-button');
    button.addEventListener('click', function() {
        let link = this.document.querySelector('#export-link').value;
        button.setAttribute('disabled', '');
        submitLink(link).finally(function() {
            button.removeAttribute('disabled');
        });
    })
})

async function submitLink (link) {
    console.log(link);
    try {
        let response = await fetch('/export/link', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body   : JSON.stringify({
                link: link
            })
        });

        let result = await response.json();
        
        location.href = '/music';
    } catch(e) {
        alert('추출하는데 실패하였습니다');
    }
}
