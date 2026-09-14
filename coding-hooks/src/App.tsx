import { useState } from "react";

import Previous from "./hooks/01-usePrevious/App";
import Debounce from "./hooks/02-useDebounce/App";
import DebounceCallback from "./hooks/03-useDebounceCallback/App";
import Toggle from "./hooks/04-useToggle/App";
import Interval from "./hooks/05-useInterval/App";
import LocalStorage from "./hooks/06-useLocalStorage/App";
import Fetch from "./hooks/07-useFetch/App";
import Throttle from "./hooks/08-useThrottle/App";

export default function App() {
  const [question, setQuestion] = useState(1);

  return (
    <div>
      <h1>Senior React Hooks</h1>

      <div>
        <button onClick={() => setQuestion(1)}>
          01 Previous
        </button>

        <button onClick={() => setQuestion(2)}>
          02 Debounce
        </button>

        <button onClick={() => setQuestion(3)}>
          03 DebounceCallback
        </button>

        <button onClick={() => setQuestion(4)}>
          04 Toggle
        </button>

        <button onClick={() => setQuestion(5)}>
          05 Interval
        </button>

        <button onClick={() => setQuestion(6)}>
          06 LocalStorage
        </button>

        <button onClick={() => setQuestion(7)}>
          07 Fetch
        </button>

        <button onClick={() => setQuestion(8)}>
          08 Throttle
        </button>
      </div>

      <hr />

      {question === 1 && <Previous />}
      {question === 2 && <Debounce />}
      {question === 3 && <DebounceCallback />}
      {question === 4 && <Toggle />}
      {question === 5 && <Interval />}
      {question === 6 && <LocalStorage />}
      {question === 7 && <Fetch />}
      {question === 8 && <Throttle />}
    </div>
  );
}
