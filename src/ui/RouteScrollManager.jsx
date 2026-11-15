import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Reset ordinary client-side navigation while retaining native history scrolling.
// Run after route content mounts so cross-page anchors (including /about) exist.
const RouteScrollManager = () => {
  const { pathname, search, hash, key } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (hash) {
      let id = hash.slice(1);
      try {
        id = decodeURIComponent(id);
      } catch {
        // Malformed URL escapes are treated as a literal element ID.
      }
      document.getElementById(id)?.scrollIntoView({ block: "start", behavior: "instant" });
    } else if (navigationType !== "POP") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, search, hash, key, navigationType]);

  return null;
};

export default RouteScrollManager;
