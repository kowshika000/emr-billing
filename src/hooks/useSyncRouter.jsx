import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const useSyncRouter = ({ basename }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const newPath = `${basename}${
    location.pathname === "/" ? "" : location.pathname
  }`;

  console.log({ newPath });

  useEffect(() => {
    console.log("billing-module dispatches");
    window.dispatchEvent(
      new CustomEvent("billing-module", { detail: newPath })
    );

    const shellNavigated = ({ detail }) => {
      console.log("shellNavigated");
      console.log({ detail });

      if (detail === location.pathname) {
        return;
      }
      navigate(detail);
    };

    window.addEventListener("shell", shellNavigated);

    return () => {
      window.addEventListener("shell", shellNavigated);
    };
  }, [location]);
};

export default useSyncRouter;
