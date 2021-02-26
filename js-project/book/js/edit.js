async function main(){
    const bookId = new URL(location.href).searchParams.get('id');

    const token = getToken();
    if(token === null){
        location.href = '/login';  
        return;
    }

    const user = await getUserByToken(token);
    if(user === null){
        localStorage.clear();
        location = '/login';
        return;
    }

    const book = await getBook(bookId);
    if(book === null){
        alert('서버에서 책 가져오기 실패');
        return;
    }

    render(book);
}

function getToken(){
    return localStorage.getItem('token');
}

function getUserByToken(token){
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

async function getBook(bookId){
    const token = getToken();
    if(token === null){
        location.href = '/login';
        return null;
    }

    try{
        const res = await axios.get(`https://api.marktube.tv/v1/book/${bookId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch(error){
        console.log('getBook error', error);
        return null;
    }
}

function render(book){
    document.getElementById('title').value = book.title;
    document.getElementById('message').value = book.message;
    document.getElementById('author').value = book.author;
    document.getElementById('url').value = book.url;

    document.getElementById('form-edit-book');
    FormData.addEventListener('submit', async event => {
        event.preventDefault();
        event.stopPropagation();
        event.target.classList.add('was-validated');

        try{
            await updateBook(book.bookId);
            location.assign(`book?id=${book.bookId}`);
        } catch(error){
            console.log(error);
        }
    });

    document.getElementById('btn-cancel').addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();

        location.assign(`book?id=${book.bookId}`);
    });
}

async function updateBook(bookId){
    const title = document.getElementById('title').value;
    const message = document.getElementById('message').value;
    const author = document.getElementById('author').value;
    const url = document.getElementById('url').value;

    if(!title || !message || !author || !url){
        return;
    }

    const token = getToken();
    if(token === null){
        location.assign('/login');
        return;
    }

    await axios.patch(`https://api.marktube.tv/v1/book/${bookId}`, {
        title,
        message,
        author,
        url
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

document.addEventListener('DOMContentLoaded', main);