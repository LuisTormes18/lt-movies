import { useObserver } from "./../../hooks";

export default function LazyLoad({ children }) {
  const [isIntersecting, ref] = useObserver();
  return (
    <div ref={ref}>{isIntersecting ? <h1>Intersectado...</h1> : null}</div>
  );
}
