import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

export default function RouterHandler({setLoading, hideMenu}) {
    let location = useLocation();
    useLayoutEffect(() => {
      function menuHider() {
        if (window.screen.width <= 768) {
          hideMenu();
        }
      }
      menuHider();
    }, [location.pathname]);
    useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 400);
      return () => clearTimeout(timer);
    }, [location.pathname]);

    return null;
  }