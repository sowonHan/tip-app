import { useContext } from "react";
import StateContext from "../contexts/StateContext";

function useActions() {
  const { addToMyTip, remove } = useContext(StateContext);
  return { addToMyTip, remove };
}

export default useActions;
