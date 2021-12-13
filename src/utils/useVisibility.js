import { useRef, useEffect, useState } from "react";
import throttle from "lodash.throttle";

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */
export default function useVisibility(offset = 0, throttleMilliseconds = 100) {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = useRef();

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const top = currentElement.current.getBoundingClientRect().top;
    setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
  }, throttleMilliseconds);

  // This will set to visible all elements in the viewPort
  useEffect(() => {
    onScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isVisible) {
      document.addEventListener("scroll", onScroll, true);
      return () => document.removeEventListener("scroll", onScroll, true);
    }
  });

  return [isVisible, currentElement];
}
