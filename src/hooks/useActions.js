import { useContext } from "react";
import StateContext from "../contexts/StateContext";

function useActions() {
  const { onToggle, addToMyTip, remove } = useContext(StateContext);
  return { onToggle, addToMyTip, remove };
}

export default useActions;
