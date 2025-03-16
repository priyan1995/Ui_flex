import { FlexBox } from "./components/FlexBox";
import "./styles.css";

export default function App() {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const changeTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <div className="App">
      <label className="text-white">
        <input type="checkbox" onChange={changeTheme} />
        Change theme
      </label>
      <br />
      <br />
      <br />
      <FlexBox />
    </div>
  );
}
