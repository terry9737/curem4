import { createContext } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
export const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [opened, setOpened] = useState(false);
  // !slider-left
  const { ref, inView } = useInView({
    threshold: "1",
  });

  const control = useAnimation();

  const variants = {
    initial: {
      x: "-100vw",
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 1,
        type: "tween",
      },
    },
    active: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        type: "tween",
      },
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("active");
      console.log(1212);
    } else {
      control.start("initial");
    }
  });
  return (
    <DataContext.Provider value={{ opened, setOpened, ref, variants, control }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
