import Layout from "../Layout";
import QRCode from "react-qr-code";
import "./UserDashboard.css";

function UserDashboard() {
  const value = "http://localhost:5173/helper";
  return (
    <Layout>
      <div className="user_dashboard">
        <div className="qr_code">
          <QRCode
            size={256}
            style={{ height: "auto" }}
            value={value}
            viewBox={`0 0 256 256`}
          />
        </div>
        <div className="user_details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum impedit
          quasi, nisi vitae aspernatur voluptatibus quod voluptate beatae nam
          non, rerum repellat alias sequi porro. Pariatur eius modi delectus
          fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          impedit quasi, nisi vitae aspernatur voluptatibus quod voluptate
          beatae nam non, rerum repellat alias sequi porro. Pariatur eius modi
          delectus fugiat? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Illum impedit quasi, nisi vitae aspernatur voluptatibus quod
          voluptate beatae nam non, rerum repellat alias sequi porro. Pariatur
          eius modi delectus fugiat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Illum impedit quasi, nisi vitae aspernatur
          voluptatibus quod voluptate beatae nam non, rerum repellat alias sequi
          porro. Pariatur eius modi delectus fugiat? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Illum impedit quasi, nisi vitae
          aspernatur voluptatibus quod voluptate beatae nam non, rerum repellat
          alias sequi porro. Pariatur eius modi delectus fugiat? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Illum impedit quasi, nisi
          vitae aspernatur voluptatibus quod voluptate beatae nam non, rerum
          repellat alias sequi porro. Pariatur eius modi delectus fugiat?
        </div>
      </div>
    </Layout>
  );
}

export default UserDashboard;
