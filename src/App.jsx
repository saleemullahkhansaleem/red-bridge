import "./App.css";
import {
  AboutUs,
  ContactUs,
  Header,
  HeroSection,
  LogoSlider,
  News,
  WhyUs,
} from "./Componentes/Index";
import { IconButton } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <News />
      <WhyUs />
      <LogoSlider />
      <ContactUs />
      <IconButton
        aria-label="chat"
        sx={{
          position: "fixed",
          bottom: "15px",
          right: "15px",
        }}
      >
        <img src="/chat-btn.png" alt="Chat" width="170px" />
      </IconButton>
    </>
  );
}

export default App;
