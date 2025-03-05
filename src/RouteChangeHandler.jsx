import { useEffect } from "react";
// import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

export default function RouteChangeHandler({ setLoading, hideMenu }) {
  let location = useLocation();
  // useLayoutEffect(() => {
  //   function menuHider() {}
  //   menuHider();
  // }, [location.pathname]);
  useEffect(() => {
    setLoading(true);
    if (window.screen.width <= 768) {
      hideMenu();
    }
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}
