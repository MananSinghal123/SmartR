import Banner from "../components/Banner";
import Card from "../components/Card";
import Layout from "../Layout";
import "./Home.css";
import Testimonial from "../assets/img/banner_img.jpg";

function Home() {
  return (
    <Layout>
      <div className="home">
        <Banner />
        <h1>Testimonials</h1>
        <div className="cards">
          <Card
            title={`
          "As a busy mom, knowing my kids have their emergency contacts readily available with your QR code gives me immense peace of mind. It's a simple solution that could make a huge difference in an emergency." - Sarah Jones, Mother of two
          `}
          />
          <Card
            title={`
            "Exploring new places solo is exciting, but having your QR code on my backpack adds an extra layer of security. It allows loved ones to access my emergency contacts quickly if anything happens." - Emily Brown, Solo travel enthusiast          `}
          />
          <Card
            title={`
            "My elderly parents often forget their phones, but they always wear their medical alert bracelets engraved with your QR code. It's reassuring to know help is just a scan away, no matter where they are." - Michael Lee, Son of elderly parents          `}
          />
          <Card
            title={`
            "I often hike in remote areas where phone reception is patchy. Your QR code attached to my gear gives me confidence knowing help is reachable even without a signal." - David Miller, Adventure hiker          `}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
