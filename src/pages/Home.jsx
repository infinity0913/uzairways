import React, { useEffect } from "react";
import Lorem from "../components/lorem";
import Section from "../components/section";
import Sa from "../components/sa";
import Watch from "../components/wathes";
import Reg from "../components/refistr";
import Saaa from "../components/about";
import { db } from "../config";
import { collection, getDocs } from "firebase/firestore";
import { motion, useScroll, useSpring } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const aboutme = collection(db, "watch");
  useEffect(() => {
    const getInfo = async () => {
      const data = await getDocs(aboutme);
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getInfo();
  }, []); 


  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Lorem />
      <Section />
      <Sa />
      <Watch />
      <Saaa />
      <Reg />
    </>
  );
};

export default Home;
