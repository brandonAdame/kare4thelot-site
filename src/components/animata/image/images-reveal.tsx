import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// import "./styles.css";

import HopeWellnessFair from "@/assets/images/edited-photos/september-update/hope-and-wellness-fair.webp";
import BloodPressure from "@/assets/images/edited-photos/september-update/blood-pressure.webp";
import RetirementHomeCrafts from "@/assets/images/edited-photos/september-update/retirement-home-crafts.webp";
import Boutique from "@/assets/images/edited-photos/september-update/boutique.webp";
import ColgateSmiles from "@/assets/images/edited-photos/september-update/teeth.webp";

const cards = [
  {
    src: HopeWellnessFair,
    angle: "8deg",
  },
  {
    src: BloodPressure,
    angle: "-15deg",
  },
  {
    src: RetirementHomeCrafts,
    angle: "-5deg",
  },
  {
    src: ColgateSmiles,
    angle: "10deg",
  },
  {
    src: Boutique,
    angle: "-5deg",
  },
];

interface CustomProps {
  index: number;
  angle: string;
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.2 },
  visible: (custom: CustomProps) => ({
    opacity: 1,
    scale: 1,
    rotate: custom.angle,
    transition: {
      delay: custom.index * 0.1,
      duration: 0.3,
      type: "spring" as const,
      stiffness: 150,
      damping: 20,
      mass: 0.5,
    },
  }),
};

export default function ImagesReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      <div className="relative my-10 ml-10 flex flex-row justify-center md:ml-20">
        {cards.map((card, i) => (
          <motion.img
            key={i}
            className="relative -ml-10 size-24 rounded-2xl border-[6px] border-white object-cover shadow-xl md:-ml-20 md:size-36"
            src={card.src}
            custom={{ index: i, angle: card.angle }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{
              scale: 1,
              rotate: "0deg",
              zIndex: 10,
              transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 150,
                damping: 20,
              },
            }}
          />
        ))}
      </div>
    </div>
  );
}
