import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: { opacity: 0, x: -500, y: 100 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1 },
  },
};

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section className="skill">
      <motion.div
        className="container"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={isInView && "animate"}
      >
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I've learnt these programming languages and tools for
                development.<br></br>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Mobile Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Prototyping</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Frontend Design</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
