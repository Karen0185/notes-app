import { useState } from 'react';
import '../assets/styles/login.css'


const Login = () => {

    const [isAccount, setIsAccount] = useState(false)

    return(
        <div className="Login">
            {
                isAccount ? <div className="signin">
                <div className="title">Вход</div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <input type="text" placeholder='Имя пользователя'/>
                    <input type="password" placeholder='Пароль'/>
                    <button>Вход</button>
                </form>
                <div className="createAccount">Создать аккаунт</div>
            </div> 
            :
            <div className="registration">
            <div className="title">Регистрация</div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <input type="text" placeholder='Придумайте имя пользователя'/>
                    <input type="password" placeholder='Придумайте пароль'/>
                    <input type="password" placeholder='Подтвердите пароль'/>
                    <button>Создать аккаунт</button>
                </form>
            </div>
            }
            
        </div>
    );
}

export default Login;