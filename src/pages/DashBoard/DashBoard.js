import { useContext, useEffect } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function DashBoard() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  //   const handleClick = () => {
  //     toggleTheme();
  //   };

  return (
    <main className={theme}>
      <h1>DashBoard</h1>
      <span>{theme}</span>
      <button onClick={toggleTheme}>Zmień motyw</button>
    </main>
  );
}

export default DashBoard;
