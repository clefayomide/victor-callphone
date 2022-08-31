import React from "react";
import { useState } from "react";
import WelcomeCard from "../layout/WelcomeCard";
import Button from "./Button";
import Input from "./Input";
import InputPassword from "./InputPassword";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
            value={username}
            onValueChange={setUsername}
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
