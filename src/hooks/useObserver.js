import { useEffect, useState, useRef } from "react";

export const useObserver = (
  options = {
    // root:null,
    rootMargin:"20px",
    threshold: 0.2,
  }
) => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onChange = (observerEntries, observer) => {
      const element = observerEntries[0];

      if (element.isIntersecting) {
        setShow(true);

        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  });

  return [show, ref];
};
