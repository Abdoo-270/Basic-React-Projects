import { useGlobalContext } from "./context";

const App = () => {
  const { name } = useGlobalContext();
  return <h2>wlecome..{name}</h2>;
};
export default App;
