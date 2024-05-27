"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";

const ClientsFood = () => {
  const clientsItem = [
    { image: "/assets/clientscarousel1.png" },
    { image: "/assets/clientscarousel2.png" },
    { image: "/assets/clientscarousel3.png" },
    { image: "/assets/clientscarousel4.png" },
  ];
  const sliderRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplayspeed: 500,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="md:py-[56px] py-[26px]" style={{ background: "#FFFFFF" }}>
        <Container>
          <div className="row">
            <div className="col-12">
              <Slider ref={sliderRef} {...settings}>
                {clientsItem.map((item, index) => (
                  <div key={index} className="px-2">
                    <div
                      className="flex items-center justify-center"
                      style={{ height: "100px" }}
                    >
                      <div
                        style={{
                          width: "172px",
                          height: "55px",
                          position: "relative",
                        }}
                      >
                        <Image
                          src={item.image}
                          alt="clients"
                          layout="fill"
                          objectFit="cover"
                          className="img"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ClientsFood;
