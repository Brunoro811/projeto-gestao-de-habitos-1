import Habits from "./Pages/DachboardHabits/index.jsx";
import "./Utils/globalStyle.js";
import { GlobalStyle } from "./Utils/globalStyle.js";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Habits />
    </div>
  );
}

export default App;
