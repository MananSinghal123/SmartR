import { useEffect, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useActivationMutation } from "../../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const { token } = useSelector((state) => state.auth);
  const [activation, { isSuccess, error }] = useActivationMutation();
  const [invalidError, setInvalidError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast.success(
        "Account activated successfully, Please login to continue.."
      );
      navigate("/");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error;
        toast.error(errorData.data.message);
        setInvalidError(true);
      } else {
        console.log("An error occured: ", error);
      }
    }
  }, [isSuccess, error]);

  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const [verifyNumber, setVerifyNumber] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
  });

  const verificationHandler = async () => {
    const verificationNumber = Object.values(verifyNumber).join("");
    if (verificationNumber.length !== 4) {
      setInvalidError(true);
      return;
    }
    console.log(token, verificationNumber);
    await activation({
      activation_token: token,
      activation_code: verificationNumber,
    });
  };

  const handleInputChange = (index, value) => {
    setInvalidError(false);
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);

    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  return (
    <div>
      <Toaster />
      <h1>Verify Your Account</h1>
      <br />
      <div>
        <div>
          <VscWorkspaceTrusted size={40} />
        </div>
      </div>
      <br />
      <br />
      <div>
        {Object.keys(verifyNumber).map((key, index) => (
          <input
            type="number"
            maxLength={1}
            key={key}
            ref={inputRefs[index]}
            placeholder=""
            value={verifyNumber[key]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <br />
      <br />
      <div>
        <button onClick={verificationHandler}>Verify OTP</button>
      </div>
      <br />
      <h5>
        Go back to log in?
        <span onClick={() => navigate("/")}>Login</span>
      </h5>
    </div>
  );
};

export default Verification;
