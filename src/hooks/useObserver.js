import { useEffect, useState, useRef } from "react";

export const useObserver = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onChange = (observerEntries, observer) => {
      console.log(observerEntries[0].isIntersecting);

      const element = observerEntries[0];

      if (element.isIntersecting) {
        setShow(true);

        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      root: null,
      rootMargin: "20px",
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  });

  return [show, ref];
};

// const [elements, setElements] = useState([]);
// const [entries, setEntries] = useState([]);

//

// useEffect(() => {
//   const currentObserver = observer.current;
//   currentObserver.disconnect();

//   if (elements.length > 0) {
//     elements.forEach((element) => currentObserver.observer(element));
//   }

//   return () => {
//     if (currentObserver) {
//       currentObserver.disconnect();
//     }
//   };
// }, [elements]);

// return [observer.current, setElements, entries];
