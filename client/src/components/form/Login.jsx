import './style.css';

export default function Login() {
    function loginCheck() {
        document.location.href = '/home-page';
    }

    return (
        <>
            <h1>SoFresh</h1>
            <div className="form">
                <input className="form-input" placeholder="Email" />
                <br />
                <input className="form-input" placeholder="Password" />
                <br />
                <a href="">Forgot your password?</a>
                <br />
                <button className="input-btn" onClick={loginCheck}>Sign in</button>
            </div>
        </>
    );
}