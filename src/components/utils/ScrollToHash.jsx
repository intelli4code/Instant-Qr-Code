import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // If there is a hash (e.g., #faq), find the element and scroll to it
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Small timeout to ensure DOM is ready
    }
  }, [pathname, hash, key]);

  return null;
}
