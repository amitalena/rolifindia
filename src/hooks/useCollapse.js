import { useContext } from "react";
import { CollapseContext } from "../providers/CollapseProvider";

const useCollapse = () =>  useContext(CollapseContext);
export default useCollapse;