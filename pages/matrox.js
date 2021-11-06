import { useState, useEffect } from "react";

const list = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "a",
  "s",
  "d",
  "f",
  "q",

  "e",
  "r",
  "t",

  "x",
  "c",
  "v",

  "p",
  "o",

  "l",

  ";",

  "w",
  "j",
  "k",
];

function Matrox() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      index > 5 ? setIndex(0) : setIndex(index + 1);

      console.log(index);
    }, 300);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <div className="bg-green-300">asdasdads</div>
      <div className="flex items-center justify-center ">
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 3]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 3]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 1]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 2]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 5]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 7]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 3]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 1]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 2]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 5]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 7]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 3]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 1]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 2]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 5]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 7]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 3]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 1]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 2]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 5]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 7]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 3]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 1]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 2]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 5]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 7]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 3]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 1]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 2]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 5]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 7]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 3]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 1]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 2]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 5]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 7]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 3]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 1]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 2]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 5]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 7]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 3]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 1]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 2]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 5]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 7]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 3]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 1]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 2]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 5]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 7]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 3]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 1]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 2]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 5]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 7]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index * 3]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 1]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index * 2]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 5]}</div>
          ))}
        </div>
        <div className="flex  flex-col items-center">
          {list.map((e, i, arr) => (
            <div key={e}>{arr[i + index + 7]}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Matrox;
