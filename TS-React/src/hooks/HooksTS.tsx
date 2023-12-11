import { useCallback, useEffect, useMemo, useRef, useState } from "react";
interface User {
  id: number;
  usrname: string;
}
type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 37;

const HooksTS = () => {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef?.current); //input element
  console.log(inputRef?.current?.value); //elemet value

  useEffect(() => {
    console.log("Mounting");
    console.log("Users: ", users);
    return () => console.log("Unmounting..");
  }, [users]);

  //Good to memorize functions
  const addTwo = useCallback(() => {
    setCount((prev) => prev + 2);
  }, []);

  //Good to memorize values
  const result = useMemo<number>(() => fib(myNum), [myNum]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addTwo}>+ADD</button>
      <h2>{result}</h2>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default HooksTS;
