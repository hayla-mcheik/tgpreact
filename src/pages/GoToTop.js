import { useEffect , useLayoutEffect} from "react";
import { useLocation } from "react-router-dom";
  
export default function GoToTop() {
  const { routePath } = useLocation();

useEffect(() => {
  window.scrollTo({top: 0 , behavior: "auto"});
}, [routePath])
  
  return null;
}