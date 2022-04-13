import Loading from "./Loading/index";
import { useObserver } from "./../../hooks";

export default function LazyLoad({ children }) {
  const [isIntersecting, ref] = useObserver();
  return <div ref={ref}>{isIntersecting ? children : null}</div>;
}
