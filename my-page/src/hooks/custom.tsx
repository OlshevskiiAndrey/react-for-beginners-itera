import { useCallback, useState } from "react";

const useCounter = () => {
  const [value, setState] = useState(0);
  const increment = useCallback(() => setState(value + 1), [value]);
  return { value, increment };
};

const App = () => {
  const { increment, value } = useCounter();
  return <button onClick={increment}>Counted {value} times</button>;
};

export default App;
