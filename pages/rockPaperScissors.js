import React, { useState, useEffect } from "react";

const rows = 20;

const columns = 20;

const S = { ROCK: "ROCK", PAPER: "PAPER", SCISSOR: "SCISSOR " };

//change DIR to constants

const allDir = ["UP", "DOWN", "LEFT", "RIGHT"];

const EMPTY = "EMPTY";

const shape = [S.ROCK, S.PAPER, S.SCISSOR];

const randomShape = () => shape[Math.floor(Math.random() * 3)];

const isPutShape = () => Math.random() > 0.85;

const initializeMatrix = () => {
  const matrix = [];

  for (let c = 0; c < columns; c++) {
    let row = [];
    for (let r = 0; r < rows; r++) {
      isPutShape() ? row.push(randomShape()) : row.push(EMPTY);
    }
    matrix.push(row);
  }
  return matrix;
};

const evalShape = (shape1, shape2) => {
  if (shape1 === shape2) return shape1;
  if (shape1 === S.ROCK) {
    if (shape2 === S.PAPER) return S.PAPER;
    if (shape2 === S.SCISSOR) return S.ROCK;
  }
  if (shape1 === S.PAPER) {
    if (shape2 === S.ROCK) return S.PAPER;
    if (shape2 === S.SCISSOR) return S.SCISSOR;
  }
  if (shape1 === S.SCISSOR) {
    if (shape2 === S.PAPER) return S.SCISSOR;
    if (shape2 === S.ROCK) return S.ROCK;
  }
  return "WRONG";
};

const randomPossibleMove = (x, y) => {
  let dir = [...allDir];

  if (x === 0) {
    dir = dir.filter((d) => d !== "LEFT");
  }
  if (y === 0) {
    dir = dir.filter((d) => d !== "UP");
  }

  if (y === rows - 1) {
    dir = dir.filter((d) => d !== "DOWN");
  }
  if (x === columns - 1) {
    dir = dir.filter((d) => d !== "RIGHT");
  }

  return dir[Math.floor(Math.random() * dir.length)];
};

const RockPaperScissors = () => {
  const [steps, setSteps] = useState(0);

  const [matrix, setMatrix] = useState([[]]);

  const scissors = matrix.flat().filter((e) => e === S.SCISSOR).length;
  const rocks = matrix.flat().filter((e) => e === S.ROCK).length;
  const papers = matrix.flat().filter((e) => e === S.PAPER).length;

  const tick = () => {
    const matrixDraft = structuredClone(matrix);

    matrixDraft.forEach((row, iy) => {
      row.forEach((e, ix) => {
        if (e !== EMPTY) {
          const dir = randomPossibleMove(ix, iy);
          if (dir === "UP") {
            if (matrixDraft[iy - 1][ix] !== EMPTY) {
              matrixDraft[iy - 1][ix] = evalShape(
                matrixDraft[iy - 1][ix],
                matrixDraft[iy][ix]
              );
            }
            if (matrixDraft[iy - 1][ix] === EMPTY) {
              matrixDraft[iy - 1][ix] = matrixDraft[iy][ix];
            }
            matrixDraft[iy][ix] = EMPTY;
          }
          if (dir === "DOWN") {
            if (matrixDraft[iy + 1][ix] !== EMPTY) {
              matrixDraft[iy + 1][ix] = evalShape(
                matrixDraft[iy + 1][ix],
                matrixDraft[iy][ix]
              );
            }
            if (matrixDraft[iy + 1][ix] === EMPTY) {
              matrixDraft[iy + 1][ix] = matrixDraft[iy][ix];
            }
            matrixDraft[iy][ix] = EMPTY;
          }
          if (dir === "RIGHT") {
            if (matrixDraft[iy][ix + 1] !== EMPTY) {
              matrixDraft[iy][ix + 1] = evalShape(
                matrixDraft[iy][ix + 1],
                matrixDraft[iy][ix]
              );
            }
            if (matrixDraft[iy][ix + 1] === EMPTY) {
              matrixDraft[iy][ix + 1] = matrixDraft[iy][ix];
            }
            matrixDraft[iy][ix] = EMPTY;
          }
          if (dir === "LEFT") {
            if (matrixDraft[iy][ix - 1] !== EMPTY) {
              matrixDraft[iy][ix - 1] = evalShape(
                matrixDraft[iy][ix - 1],
                matrixDraft[iy][ix]
              );
            }
            if (matrixDraft[iy][ix - 1] === EMPTY) {
              matrixDraft[iy][ix - 1] = matrixDraft[iy][ix];
            }
            matrixDraft[iy][ix] = EMPTY;
          }

          setMatrix(matrixDraft);
        }
      });
    });
  };

  useEffect(() => {
    setMatrix(initializeMatrix());
  }, []);

  useEffect(() => {
    const time = setTimeout(() => {
      setSteps((prev) => prev + 1);
      tick();
    }, 300);

    return () => {
      clearTimeout(time);
    };
  }, [matrix]);

  return (
    <div className="flex min-h-screen flex-col items-center bg-green-800 text-blue-300">
      <h1 className="text-4xl font-light"> Rock-paper-scissors</h1>
      {/* <button
        className="mt-4 rounded-md border-2 border-white bg-black p-2"
        onClick={() => tick()}
      >
        tick!
      </button> */}
      <div className="mt-3  flex    gap-2  border-2 border-green-300 p-1 font-bold text-black">
        <div>Steps:{steps}</div>
        <div>
          📐{rows}x{columns}
        </div>
        <div>🪨{rocks}</div>
        <div> 📃{papers}</div>
        <div> ✂️{scissors}</div>
      </div>
      <div className="mt-4 flex flex-col border-2 border-green-300 p-2">
        {matrix.map((r, i) => (
          <div className="flex " key={i}>
            {r.map((e, ie) => (
              <div className="h-4 w-4 " key={ie}>
                {" "}
                {e === EMPTY
                  ? ""
                  : e === S.ROCK
                  ? "🪨"
                  : e === S.PAPER
                  ? "📃"
                  : e === S.SCISSOR
                  ? "✂️"
                  : "⚠️"}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-4 text-center font-mono">
        <h3 className="  text-lg font-semibold underline  underline-offset-2 ">
          to-do
        </h3>
        <ul className="">
          <li>draw/tie</li>
          <li>path strategy - escape/follow/aggressive/passive</li>
        </ul>
      </div>
    </div>
  );
};

export default RockPaperScissors;
