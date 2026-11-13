import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Pages handles direct requests via public/_redirects. This also handles SPA navigation.
export default function LegacyTripRedirect() {
  const { pathname, search, hash } = useLocation();
  const target = new URL(pathname + search + hash, "https://trips.huixinyang.com").href;

  useEffect(() => {
    window.location.replace(target);
  }, [target]);

  return <p role="status" className="p-8 text-center">Trips has moved. <a href={target}>Continue to Trips</a></p>;
}
