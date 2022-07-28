//
import classes from "./Login.module.css";

const Login = () => {
  return (
    <>
      <div className={classes.formContainer}>
        <h1>Login</h1>
        <form className={classes.loginForm}>
          <div>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value=""
              placeholder="Enter Password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
