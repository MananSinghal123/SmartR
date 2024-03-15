import Layout from "../Layout";
import QRCode from "react-qr-code";
import "./UserDashboard.css";
import { useSelector } from "react-redux";
import { useLogoutMutation } from "../../redux/features/auth/authApi";

function UserDashboard() {
  const { user } = useSelector((state) => state.auth);
  const [logout, { isSuccess, error }] = useLogoutMutation();

  const value = `http://localhost:5173/helper/${user._id}`;
  return (
    <Layout>
      <div className="user_dashboard">
        <div className="top">
          <div className="user_details">
            <div className="user_profile">
              <ul className="user_details_list">
                <li> Name: {user.name}</li>
                <li>email: {user.email}</li>
                <li>vehicle: {user.vehicle}</li>
                <li>Phone: {user.phone}</li>
                <li>address: {user.address}</li>
              </ul>
            </div>
          </div>
          <div className="qr_code">
            <QRCode
              size={256}
              style={{ height: "auto" }}
              value={value}
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>
        <div className="bottom">
          {user.emergencyContact.map((contact, index) => (
            <div className="contact" key={index}>
              <ul key={index} className="relative_details">
                <h1>Contact {index + 1}</h1>
                <li> Name: {contact.name}</li>
                <li>Phone: {contact.contact}</li>
                <li>Relation: {contact.relation}</li>
              </ul>
            </div>
          ))}
        </div>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </Layout>
  );
}

export default UserDashboard;
