import { createContext, useState } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
export const DataContext = createContext({});

const DataProvider = ({ children }) => {
  // !navbar
  const { ref, inView } = useInView();
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("hidden");
    } else {
      controls.start("active");
    }
  });
  const variants = {
    hidden: {
      height: "4em",
    },
    active: {
      height: "3em",
    },

    rotateNone: {
      rotate: "0deg",
    },
    rotateStart: {
      rotate: "180deg",
      transition: {
        duration: 0.5,
      },
    },
  };
  const [active, setActive] = useState(false);
  // !!!!!!
  return (
    <DataContext.Provider
      value={{ ref, inView, controls, variants, active, setActive }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
