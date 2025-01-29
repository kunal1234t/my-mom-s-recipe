const SignUp=()=>{
    return(
        <div className="signup">
        <header>
        <span><h2 class='logo'>Di<h2>Gnosis</h2></h2></span>
        <nav class="navigation">
            <a href="#" class="ab">Home</a>
            <a href="#" class="ab">About</a>
            <a href="#" class="ab">Services</a>
            <a href="#" class="ab">Contact</a>
            <button class="btnlogin"><a href="DiGnosis (CyberPulse)/DiGnosis (CyberPulse)/login.html">Login</a></button>
        </nav>
        </header>
        <div class="wrapper">
            <div class="form-box login">
                <h2>Register</h2>
                <form action="#">
                    <div class="input-box">
                        <span class="icon"><i class="fa-solid fa-envelope"></i></span>
                        <input type="email" required />
                        <label>E-mail</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class="fa-solid fa-lock"></i></span>
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <button type="submit" class="btn">Register</button>
                </form>

            </div>

        </div>
        <script src="app.js"></script>
    </div>
    )
}
export default SignUp;