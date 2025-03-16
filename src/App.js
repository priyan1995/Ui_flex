import { FlexBox } from "./components/FlexBox";
import "./styles.css";

export default function App() {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  setDarkMode();

  return (
    <div className="App">
      <FlexBox />
    </div>
  );
}
