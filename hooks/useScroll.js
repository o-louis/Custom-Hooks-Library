import { useEffect, useState } from "react";

const useScroll = (element) => {
  const [pos, setPos] = useState({x: 0, y: 0})

  useEffect(() => {
    const handleScroll = (e) => {
      setPos({
        x: e.target.scrollLeft || window.pageXOffset || 0,
        y: e.target.scrollTop || window.pageYOffset || 0,
      })
    }

    element = element?.current || window;
    element.addEventListener('scroll', handleScroll);

    return () => element.removeEventListener('scroll', handleScroll);
  }, [element])

  return pos;
}

export default useScroll;
