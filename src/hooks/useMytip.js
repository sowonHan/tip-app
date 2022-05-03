import { useContext } from "react";
import StateContext from "../contexts/StateContext";

function useMytip() {
  const { mytip } = useContext(StateContext);
  return mytip;
}

export default useMytip;
