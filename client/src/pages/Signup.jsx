import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { useRegisterMutation } from "../../redux/features/auth/authApi";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import CustomModal from "../components/CustomModal";
import Verification from "./Verification";

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name!"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
  vehicle: Yup.string().required("Please enter your vehicle no."),
  phone: Yup.number().required("Please enter your phone no.").min(10),
  address: Yup.string().required("Please enter your address!"),
  emergencyContact: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Please enter name of the person!"),
        relation: Yup.string().required(
          "Please enter relation with the person!"
        ),
        contact: Yup.number().required("Please enter your phone no.").min(10),
      })
    )
    .min(2, "Min 2 contacts are needed"),
});

const Signup = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [register, { data, error, isSuccess }] = useRegisterMutation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || "Registration successful";
      toast.success(message);
      // setRoute("verification");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      vehicle: "",
      phone: "",
      address: "",
      emergencyContact: [
        {
          name: "",
          relation: "",
          contact: "",
        },
        {
          name: "",
          relation: "",
          contact: "",
        },
      ],
    },
    validationSchema: schema,
    onSubmit: async (data) => {
      await register(data);
      setOpen(true);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <div className="signup">
      <Toaster />
      <h1>Join with Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="name">Name</label>

          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            id="name"
            placeholder="ABC123"
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>

        <div className="input">
          <label htmlFor="vehicle">Vehicle no.</label>

          <input
            type="text"
            name="vehicle"
            value={values.vehicle}
            onChange={handleChange}
            id="vehicle"
            placeholder="ABC123"
          />
          {errors.vehicle && touched.vehicle && <span>{errors.vehicle}</span>}
        </div>

        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="signupmail@gmail.com"
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
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>

        <div className="input">
          <label htmlFor="phone">Phone no.</label>

          <input
            type="number"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            id="phone"
            placeholder="9182XXX"
          />
          {errors.phone && touched.phone && <span>{errors.phone}</span>}
        </div>

        <div className="input">
          <label htmlFor="name">Address</label>

          <input
            type="text"
            name="address"
            value={values.address}
            onChange={handleChange}
            id="address"
            placeholder="B-34,GaXX..."
          />
          {errors.address && touched.address && <span>{errors.address}</span>}
        </div>

        <h1>Helper Contacts</h1>

        {values.emergencyContact.map((contact, index) => (
          <div className="contactInfo" key={index}>
            <h2>Person {index + 1}</h2>
            <div className="input">
              <label htmlFor={`name${index}`}>Name</label>
              <input
                type="text"
                name={`emergencyContact[${index}].name`}
                value={contact.name}
                onChange={handleChange}
                id={`name${index}`}
                placeholder="Steve"
              />

              {/* {errors.emergencyContact[index].name &&
                touched.emergencyContact[index].name && (
                  <span>{errors.emergencyContact[index].name}</span>
                )} */}
            </div>

            <div className="input">
              <label htmlFor={`relation${index}`}>Relation</label>
              <input
                type="text"
                name={`emergencyContact[${index}].relation`}
                value={contact.relation}
                onChange={handleChange}
                id={`relation${index}`}
                placeholder="Mother"
              />

              {/* {errors.emergencyContact[index].relation &&
                touched.emergencyContact[index].relation && (
                  <span>{errors.emergencyContact[index].relation}</span>
                )} */}
            </div>

            <div className="input">
              <label htmlFor={`contact${index}`}>Contact</label>
              <input
                type="text"
                name={`emergencyContact[${index}].contact`}
                value={contact.contact}
                onChange={handleChange}
                id={`contact${index}`}
                placeholder="9811XXXX"
              />

              {/* {errors.emergencyContact[index].name &&
                touched.emergencyContact[index].name && (
                  <span>{errors.emergencyContact[index].name}</span>
                )} */}
            </div>
          </div>
        ))}

        <div>
          <input type="submit" value="Signup" />
        </div>

        <h5>
          Already have an account ?
          <span className="loginRedirect" onClick={() => navigate("/")}>
            {" "}
            Login
          </span>
        </h5>
      </form>
      <br />
      <CustomModal open={open} setOpen={setOpen}>
        <Verification />
      </CustomModal>
    </div>
  );
};

export default Signup;
