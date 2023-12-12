import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import { Section } from "./components/Section";
import List from "./components/List";
import ReducerHook from "./hooks/ReducerHook";

function App() {
  // const [count, setCount] = useState<number>(0);
  return (
    <>
      {/* <Heading title={"Hellow Peter!"} />
      <Section title={"Section"}>This is Section Wrapper</Section>
      <Counter setCount={setCount}>Current count is in: {count}</Counter>
      <List
        items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      /> */}

      <ReducerHook />
    </>
  );
}

export default App;
