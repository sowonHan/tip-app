import { useContext } from "react";
import StateContext from "../contexts/StateContext";

function useList() {
  const { list } = useContext(StateContext);
  return list;
}

export default useList;
