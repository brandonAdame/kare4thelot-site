import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import HealthFair from "../../../assets/images/Health-Fair.png?url";
import Activity from "../../../assets/images/activity.jpg?url";
import SnackTable from "../../../assets/images/snack-table.jpg?url";
import RetirementHome from "../../../assets/images/retirement-home.jpg?url";
import RetirementHome2 from "../../../assets/images/retirement-home-2.jpg?url";
import "./styles.css";

const cards = [
  {
    src: HealthFair,
    angle: "8deg",
  },
  {
    src: RetirementHome,
    angle: "-15deg",
  },
  {
    src: RetirementHome2,
    angle: "-5deg",
  },
  {
    src: SnackTable,
    angle: "10deg",
  },
  {
    src: Activity,
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
      type: "spring",
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
      <h1 className="text-center text-2xl font-semibold dark:text-white">
        Community Events
      </h1>
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
