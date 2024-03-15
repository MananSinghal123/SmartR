import { useEffect, useState } from "react";
import "./Helper.css";
import Layout from "../Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

function Helper() {
  const [user, setUser] = useState("");
  const { id } = useParams();

  const getUser = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/v1/user/${id}`);
      const user = res.data.user;
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);

  return (
    <Layout>
      <h1>{user.name}</h1>
    </Layout>
  );
}

export default Helper;
