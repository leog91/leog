import { React, useEffect, useState } from "react";

import { useRouter } from "next/router";

import { type } from "../constants/train";

//trainer

//rename
//subtype
const exercises = {
  pushups: { name: "pushups", type: type.chest },

  Inclinebenchpress: { name: "Incline Bench Press", type: type.chest },
  Benchpress: { name: "Bench press", type: type.chest },
  SQUAT: { name: "Squat", type: type.chest },
  DEADLIFT: { name: "Deadlift", type: type.multy },
  WHEEL: { name: "Wheel", type: type.abs },
  MILITARY_PRESS: { name: "Military press", type: type.shoulder },
  PULL_UP: { name: "Pull Up", type: type.back },
  ONE_ARM_PUSH_UP: { name: "One-arm push-up", type: type.multy },
  DIAMOND_PUSH_UP: { name: "Diamond push-up", type: type.chest },
};

const routines = [
  {
    name: "Full Body",
    exercises: [
      exercises.DEADLIFT,
      exercises.SQUAT,
      exercises.Benchpress,
      exercises.MILITARY_PRESS,
      exercises.PULL_UP,
    ],
  },
  {
    name: "Chest",
    exercises: [
      exercises.Benchpress,
      exercises.Inclinebenchpress,
      exercises.DIAMOND_PUSH_UP,
      exercises.ONE_ARM_PUSH_UP,
    ],
  },
  {
    name: "Home",
    exercises: [exercises.ONE_ARM_PUSH_UP, exercises.DIAMOND_PUSH_UP],
  },
];

//1 each
const getRandom = () => {};
//all from
const getType = () => {};

// const pre-selected =

// ("!just  for prototyping  !");

function Train() {
  const router = useRouter();

  const [routine, setRoutine] = useState([]);

  //date?
  const [done, setDone] = useState([]);
  const [toRemove, setToRemove] = useState(null);

  const hasParams = () => Object.keys(router.query).length !== 0;

  const someData = {
    name: 123,
    qty: 123,
    types: [{ up: "up1" }, { down: "down1" }],
  };

  //update-DB
  useEffect(() => {
    if (routine?.length !== 0) {
      console.log("empty routine !!!!!)!");
      localStorage.setItem("routine", JSON.stringify(routine));
      console.log("routines", routine);
      console.log("db =>", JSON.parse(localStorage.getItem("routine")));
    }
  }, [routine]);

  useEffect(() => {
    const db = JSON.parse(localStorage.getItem("routine"));
    console.log("rouuttt", db);
    if (!db || db === "") {
      console.log("null db");
    } else {
      console.log("not Null db");
      setRoutine(db);
    }
  }, []);

  const save = () => {
    console.log("saving");
    // setRoutine([...routine, 3]);
    setRoutine((p) => {
      console.log("p =>", p);
      return [...p, 4123];
    });
  };

  const clear = () => {
    console.log("dropping");
    setRoutine([]);
    localStorage.clear();
  };

  useEffect(() => {
    if (!router.isReady) return;
    //extract
    if (hasParams()) {
      try {
        console.log(
          "data parsed ---->",
          JSON.parse(Buffer.from(router.query.data, "base64").toString("utf8"))
        );
      } catch {
        console.log("invalid param");
        router.push(`/train`);
      }
    }

    //check test, get from router
    router.push(
      `/train?data=${Buffer.from(JSON.stringify(someData), "utf8").toString(
        "base64"
      )}`
    );

    console.log("router =>", router);

    console.log("hasParams ?", hasParams());
  }, [router.isReady]);

  const confirmRemove = (d) => {
    setToRemove(d);
    console.log("dd", d);
  };

  return (
    <div className=" h-screen bg-slate-500">
      <div className="mx-auto  flex max-w-xl  flex-col items-center bg-slate-500 text-amber-200">
        <button onClick={() => save()}> save!</button>
        <button onClick={() => clear()}> clear</button>
        <div className="flex w-full flex-col items-center px-1">
          total
          {Object.entries(exercises)
            .map((j) => j[1])
            .map((e) => (
              <div
                className="m-1 w-full cursor-pointer rounded-md bg-slate-400 p-1 text-center hover:bg-slate-300 hover:font-bold hover:text-amber-700"
                key={e.name}
                onClick={() => {
                  if (!done.includes(e)) {
                    setDone([...done, e]);
                  }
                }}
              >
                {e.name} {" > "} {e.type}
              </div>
            ))}
        </div>
        <div>
          done
          <div>
            {done.map((e) => (
              <div
                className="m-1 rounded-md bg-slate-800 p-1 text-center"
                key={e.name}
                // onClick={() => setDone(done.filter((d) => d !== e))}
                onClick={() => confirmRemove(e)}
              >
                {e.name}
              </div>
            ))}
          </div>
          {/*  */}
          {/* <div>
            <dialog open={true}> confirm</dialog>
          </div> */}
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default Train;
