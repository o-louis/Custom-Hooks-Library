import { useEffect, useState } from "react";

const useScroll = (ref) => {
  const [pos, setPos] = useState({x: 0, y: 0})

  useEffect(() => {
    const handleScroll = (e) => {
      setPos({
        x: e.target.scrollLeft || window.pageXOffset || 0,
        y: e.target.scrollTop || window.pageYOffset || 0,
      })
    }

    ref = ref?.current || window;
    ref.addEventListener('scroll', handleScroll);

    return () => ref.removeEventListener('scroll', handleScroll);
  }, [ref])

  return pos;
}

export default useScroll;
