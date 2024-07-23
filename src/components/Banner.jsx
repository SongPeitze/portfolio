import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";

import headerImg from "../assets/img/header-img.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "Web Developer", "Mobile Developer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      opacity: 1,
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <BrowserRouter>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <motion.div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <motion.span className="tagline" variants={textVariants}>
                      Welcome to my Portfolio
                    </motion.span>
                    <motion.h1 variants={textVariants}>
                      {`I'm Song Peitze`}{" "}
                    </motion.h1>
                    <motion.h2 variants={textVariants}>
                      A{" "}
                      <span
                        className="txt-rotate"
                        dataperiod={period}
                        data-rotate="toRotate"
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </motion.h2>
                    <motion.p variants={textVariants}>
                      Detail-oriented software engineer with a strong aptitude
                      for frontend design and development, as well as a keen
                      interest in backend technologies. Proficient in HTML, CSS,
                      JavaScript, and modern frameworks like React.js. Known for
                      strong problem-solving skills, effective collaboration
                      within cross-functional teams, and a passion for
                      continuous learning and innovation.
                    </motion.p>
                    {/* <HashLink to="#contact">
                      <motion.button variants={textVariants}>
                        Let’s Connect <ArrowRightCircle size={25} />
                      </motion.button>
                    </HashLink> */}
                  </motion.div>
                )}
              </TrackVisibility>
              <motion.div
                className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
              >
                Software Engineer
              </motion.div>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img src={headerImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </BrowserRouter>
  );
}
