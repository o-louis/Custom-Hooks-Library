import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(undefined);

  const toggleTheme = () => {
    if (theme === "white") {
      setTheme("black");
    } else {
      setTheme("white");
    }
  }

  const toggleClass = (theme) => {
    if (theme === "white") {
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.add("dark-theme");
    }
  }

  useEffect(() => {
    const localTheme = theme || localStorage.getItem("preferred-theme");
    localStorage.setItem("preferred-theme", localTheme);

    if(!localTheme) {
      setTheme("white");
    }
    
    toggleClass(localTheme)
  }, [theme]);
  
  return [theme, toggleTheme];
}

export default useTheme;