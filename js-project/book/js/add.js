async function main(){
    bindSaveButton();

    const token = getToken();
    if(token === null){
        location.assign('/login');
        return;
    }

    const user = await getUserByToken(token);
    if(user === null){
        localStroage.clear();
        location.assign('/login');
        return;
    }
}

function bindSaveButton(){
    const form = document.getElementById('form-add-book');
    form.addEventListener('submit', save);
}

async function save(event){
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.add('was-validated');

    const titleElement = document.getElementById('title');
    const messageElement = document.getElementById('message');
    const authorElement = document.getElementById('author');
    const urlElement = document.getElementById('url');

    const title = titleElement.value;
    const message = messageElement.value;
    const author = authorElement.value;
    const url = urlElement.value;

    if(!title || !message || !author || !url){
        return;
    }

    const token = getToken();
    if(token === null){
        location.assign('/login');
        return;
    }

    try{
        await axios.post('https://api.marktube.tv/v1/book', {
            title,
            message,
            author,
            url
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        location.assign('/');
    } catch(error){
        console.log('save error', error);
        alert('책 추가 실패');
    }
}

function getToken(){
    return localStorage.getItem('token');
}

async function getUserByToken(token){
    try{
        const res = await axios.get('https://api.marktube.tv/v1/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch(error){
        console.log('getUserByToken error', error);
        return null;
    }
}

document.addEventListener('DOMContentLoaded', main);