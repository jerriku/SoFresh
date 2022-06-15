export default function Login() {
    function loginCheck() {
        document.location.href = '/home-page';
    }

    return (
        <>
            <h1>SoFresh</h1>
            <div>
                <input placeholder="Email" />
                <br />
                <input placeholder="Password" />
                <br />
                <a href="">Forgot your password?</a>
                <br />
                <button onClick={loginCheck}>Sign in</button>
            </div>
        </>
    );
}