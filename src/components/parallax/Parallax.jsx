import React, { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ type }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      className={`parallax ${
        type === "skills" ? "skills-background" : "projects-background"
      }`}
      ref={ref}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "skills" ? "What I've Learnt?" : "What I Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="stars" style={{ x: xBg }}></motion.div>
    </div>
  );
}
