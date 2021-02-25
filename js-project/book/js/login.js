async function main(){
    bindLoginButton();

    const token = getToken();
    if(token !== null){
        location.assign('/');
        return;
    }
}

function bindLoginButton(){
    const form = document.getElementById('form-login');
    form.addEventListener('submit', login);
}

async function login(event){
    event.preventDefault();
    event.stopPropagation();

    const emailElement = document.getElementById('email');
    const passwordElement = document.getElementById('password');

    const email = emailElement.value
    const password = passwordElement.value;

    try{
        const res = await axios.post('https://api.marktube.tv/v1/me', {
            email,
            password
        });

        const token = res.data.token;
        if(token === undefined){
            return;
        }
        localStorage.setItem('token', token);
        location.assign('/');
    } catch(error){
        const data = error.response.data;
        if(data){
            const state = data.error;
            switch(state){
                case 'USER_NOT_EXIST':
                    alert('사용자가 존재하지 않습니다');
                    break;
                case 'PASSWORD_NOT_MATCH':
                    alert('비밀번호가 맞지 않습니다.');
            } 
        }
    }
}

function getToken(){
    return localStorage.getItem('token');
}

document.addEventListener('DOMContentLoaded', main);