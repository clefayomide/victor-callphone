import Logo from "../components/Logo";
import LoginLayout from "../layout/Login";
import LoginForm from "../components/Login";

const Login = () => {
  return (
    <div className="login-page-container">
      <LoginLayout>
        <div className="mt-10">
          <Logo />
        </div>
        <LoginForm />
      </LoginLayout>
    </div>
  );
};

export default Login;
