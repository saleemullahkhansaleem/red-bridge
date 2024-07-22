import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubTitle from "./SubTitle";

const logos = [
  "/logos/logo-1.png",
  "/logos/logo-2.png",
  "/logos/logo-3.png",
  "/logos/logo-4.png",
  "/logos/logo-5.png",
  "/logos/logo-6.png",
  "/logos/logo-7.png",
];

const LogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Box sx={{ mx: "auto", my: 8, width: "90%" }}>
      <Box textAlign="center" mt={4}>
        <SubTitle>Clients & Partners</SubTitle>
      </Box>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              style={{
                margin: "auto",
                maxWidth: "100%",
                height: "35px",
                transition: "transform 0.5s ease-in-out",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default LogoSlider;
