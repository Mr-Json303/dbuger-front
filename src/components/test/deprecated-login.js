import React, { useState } from "react";
import { useUserDispatch, loginUser, useUserState } from "../../context/UserContext2";
import { Link } from "react-router-dom";
import AxiosManager from "../config/axios";
import { useHistory } from "react-router-dom";
import { checkInput } from '../utilities/checkInput';

function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  var userDispatch = useUserDispatch();
  let history = useHistory();

  const { email: emailState } = useUserState();

  const userLogueado = emailState !== undefined;
  if(userLogueado) {
    history.push("/dashboard");
  }

  async function login(e) {
    e.preventDefault();

    const ToValidate = ['email', 'password'];

    if (checkInput(e, ToValidate)) {
      console.log('value returned was true');
      const data = {
        email: email,
        password: password,
      };
  
      console.log("Datos para enviar al login :", data);
  
      await AxiosManager.post("/login", data).then((res) => {
        console.log("llega a la api", res.data.data);
  
        loginUser(userDispatch, res.data.data.token, res.data.data.email, res.data.data.id, history);
  
      });
    }else{
      console.log('value returned was false');
    }
  }

  return (
    <>
      <div className="center-parent">
        <div className="ui middle aligned center aligned grid container">
          <div className="fifteen wide phone six tablet seven wide computer column">
            <h2 className="ui teal image header">
              <img
                src="assets/images/dbuger-logo.svg"
                alt="dbuger logo"
                className="image"
              />
              <div className="content">Log-in to your account</div>
            </h2>

            {/* //*Form */}
            <form className="ui large form error" onSubmit={login}>
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input
                      type="email"
                      name="email"
                      placeholder="email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input
                      type="password"
                      name="password"
                      placeholder="123abc"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                {/* <div className="ui fluid large teal submit button">Login</div> */}
                <button className="ui large teal submit button" type="submit">
                  Submit
                </button>
              </div>

              <div className="ui error message">

              </div>
            </form>

            <div className="ui message">New to us? Sign up</div>
            <Link to="/">Back to HomePage</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
