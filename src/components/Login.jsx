import React from "react";
import { useState } from "react";
import WelcomeCard from "../layout/WelcomeCard";
import Button from "./Button";
import Input from "./Input";
import InputPassword from "./InputPassword";
import { useDispatch } from "react-redux";
import { loginIn } from "../slice/user/userSlice";
import authentication from "../feature/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reqBody = { email: "super@airvend.ng", password: "Qwerty@123!!!!" };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !email) alert("all field is required");
    else {
      authentication("login", reqBody)().then((res) => {
        if (res) {
          dispatch(loginIn(res));
          navigate("/dashboard");
        }
      });
    }
  };
  return (
    <WelcomeCard>
      <form className="w-full">
        <div className="w-full">
          <h4 className="text-2xl font-medium text-center">Welcome Back!</h4>
          <p className="font-normal text-base text-center mt-2">
            Log into your account
          </p>
          <Input
            label="Username"
            placeholder="Ferdnardjohn73"
            type="text"
            required={true}
            value={email}
            onValueChange={setEmail}
            id="username"
          />
          <InputPassword
            placeholder="example: 123xyz"
            password={password}
            setPassword={setPassword}
            label="Password"
            id="password"
          />
          <div className="mt-5 flex justify-between">
            <div className="flex gap-3 items-center">
              <input type="checkbox" name="remember" id="remember" />
              <p className="font-medium text-xs">Remember me</p>
            </div>
            <p className="font-medium text-xs">Forgot Password?</p>
          </div>
          <div className="mt-10">
            <Button innerText="Login" onClick={handleSubmit} />
          </div>
        </div>
      </form>
    </WelcomeCard>
  );
};

export default Login;
