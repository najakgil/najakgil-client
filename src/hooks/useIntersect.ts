import { useEffect, useRef } from "react";

export const useIntersect = (
  callback: () => void,
  options?: IntersectionObserverInit
) => {
  const target = useRef(null);

  useEffect(() => {
    if (!target.current) return;

    const observer = new IntersectionObserver(callback, options);
    observer.observe(target.current);
  }, [callback, options]);

  return target;
};
