import classes from "./Register.module.css";

const Register = () => {
  return (
    <div className={classes.register}>
      <h1>Register</h1>
      <div className={classes.formContainer}>
        <form className={classes.registerForm} method="POST">
          <div>
            {/* <label for="name"> Name </label> <br /> */}
            <input type="text" name="name" id="name" placeholder="Full Name" />
          </div>
          <div>
            {/* <label for="email"> Email </label> <br /> */}
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>

          <div>
            {/* <label for="password">Password</label> */}
            <input
              type="password"
              name="password"
              value=""
              placeholder="Password"
            />
          </div>

          <div>
            {/* <label for="passwordConfirm">Confirm Password</label> */}
            <input
              type="password"
              name="passwordConfirm"
              value=""
              placeholder="Confirm Password"
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
