import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [login, { isSuccess, error }] = useLoginMutation();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      await login({ email, password });
      navigate("/user-dashboard");
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Successfully");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="login">
      <Toaster />
      <h1 className="loginHeading">Login with SmartR</h1>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="loginmail@gmail.com"
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>

        <div className="input">
          <label htmlFor="password">Password</label>
          <input
            type={!show ? "password" : "text"}
            name="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="password!@%"
          />
          {!show ? (
            <AiOutlineEyeInvisible size={20} onClick={() => setShow(true)} />
          ) : (
            <AiOutlineEye size={20} onClick={() => setShow(false)} />
          )}
        </div>
        {errors.password && touched.password && <span>{errors.password}</span>}
        <div className="submitButton">
          <input type="submit" value="Login" />
        </div>
        <h5>
          Not have any account ?
          <span onClick={() => navigate("signup")}>Sign up</span>
        </h5>
      </form>
      <br />
    </div>
  );
};

export default Login;
