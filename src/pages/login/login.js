import "./login.css"

    function Login(){
        return(
            <>
            <article>
                <h1>Logowanie</h1>
                <p>Podaj nazwe: <input type="text"></input></p>
                <p>Podaj hasło: <input type="password"></input></p>
                <button>Zaloguj</button>
                </article>
            </>
        )
    }

    export default Login;