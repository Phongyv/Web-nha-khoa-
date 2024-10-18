import "../css/login.css"
import { loginSubmit } from "./firebase";

function Login(){
    return(
        <div className="login">
           <span className="login-span">Dương Thu Lab</span>
           <div className="login-form">
            <div className="login-form_item">
                <input className="login-form_item-input" id="login-email" type="email" placeholder="Nhập email"/>
            </div>
            <div className="login-form_item">   
                <input className="login-form_item-input" id="login-password" type="password" placeholder="Nhập mật khẩu"/>
            </div>
           </div>
           <button className="login-button" onClick={loginSubmit}>Đăng nhập</button>
        </div>
    )
}

export default Login;
