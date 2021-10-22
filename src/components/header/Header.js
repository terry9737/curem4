import { useContext } from "react";
import { DataContext } from "../context/context";
const Header = () => {
  const { ref } = useContext(DataContext);
  return <p ref={ref}>21</p>;
};

export default Header;
