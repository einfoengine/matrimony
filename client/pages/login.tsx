const Login = () => {
    return (
        <form>
  {/* <!-- Email input --> */}
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form2Example1">Email address</label>
    <input type="email" id="form2Example1" className="form-control" />
  </div>

  {/* <!-- Password input --> */}
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form2Example2">Password</label>
    <input type="password" id="form2Example2" className="form-control" />
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
      <div className="form-check">
        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
      </div>
    </div>

    <div className="col">
      {/* <!-- Simple link --> */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

  {/* <!-- Register buttons --> */}
  <div className="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
</form>
    )
}

export default Login;