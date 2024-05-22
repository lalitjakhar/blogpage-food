import React from "react";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Image1 from "../../../public/assets/image1herohome.jpg";
import Image2 from "../../../public/assets/image2herohome.jpg";
import Image3 from "../../../public/assets/image3herohome.jpg";
import Image4 from "../../../public/assets/image4herohome.jpg";
import Image5 from "../../../public/assets/image2herohome.jpg";

function Herosection() {
  return (
    <div className="md:py-[56px] py-[26px]" style={{ background: "#FFFFFF" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "514px",
              }}
            >
              <Image
                src={Image1}
                alt="Image 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <div className="HeroSectionImagesHomepage">
                  <Image
                    src={Image2}
                    alt="Image 2"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="HeroSectionImagesHomepage">
                  <Image
                    src={Image3}
                    alt="Image 3"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="HeroSectionImagesHomepage">
                  <Image
                    src={Image4}
                    alt="Image 4"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="HeroSectionImagesHomepage">
                  <Image
                    src={Image5}
                    alt="Image 5"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Herosection;
