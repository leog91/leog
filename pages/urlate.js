import React, { useEffect, useMemo, useState } from "react";
import { Temporal, Intl, toTemporalInstant } from "@js-temporal/polyfill";

Date.prototype.toTemporalInstant = toTemporalInstant;

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const UrlNewRename = ({
  deadline = new Date(`December, 31, ${new Date().getFullYear() + -2}`),
}) => {
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );

    return () => clearInterval(interval);
  }, [parsedDeadline]);
  return (
    <div className="bg-green-400 p-10">
      asdd
      <div className="timer">
        {Object.entries({
          Days: time / DAY,
          Hours: (time / HOUR) % 24,
          Minutes: (time / MINUTE) % 60,
          Seconds: (time / SECOND) % 60,
        }).map(([label, value]) => (
          <div key={label} className="col-4">
            <div className="box">
              <p>{`${Math.floor(value)}`.padStart(2, "0")}</p>
              <span className="text">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function Urlate() {
  //   const [arriving, setArriving] = useState(new Date());

  const [arriving, setArriving] = useState(Temporal.Now.plainDateTimeISO());

  const [remaining, setRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const remainingToleave = () => {
    return;
  };

  const toInput = () => "asdsad";

  //handle
  const fromInput = () => "handle";

  const dateTime = Temporal.Now.plainDateTimeISO();

  const time1 = Temporal.PlainTime.from({
    hour: 23,
    minute: 39,
  });
  const time2 = Temporal.PlainTime.from({
    hour: 19,
    minute: 22,
  });
  const duration = time1.until(time2);
  console.log(duration.hours, duration.minutes);

  //   const compute = () => {
  //     const res = Temporal.Now.plainDateTimeISO().until(arriving);

  //     setRemaining({ hours: res.hours, minutes: res.minutes });
  //   };

  const compute = () => {
    const res = () => Temporal.Now.plainDateTimeISO().until(arriving);
    setRemaining({
      hours: res().hours,
      minutes: res().minutes,
    });
  };

  // const aInterval = setInterval(() => {
  //   console.log("asd");
  //   compute();
  // }, 10000);

  useEffect(() => {
    const update = () => {
      const res = () => Temporal.Now.plainDateTimeISO().until(arriving);
      setRemaining({
        hours: res().hours,
        minutes: res().minutes,
      });
    };
    update();

    const a = setInterval(() => {
      update();
    }, 10000);

    return () => {
      clearInterval(a);
    };
  }, [arriving]);

  //   console.log("===datetime ===", dateTime);

  const handleArriving = (e) => {
    //   setArriving(e.valueAsDate.toLocaleTimeString().slice(0, 5));
    // setArriving(e.valueAsDate);
    // console.error("qqqqq", e.valueAsDate.getUTCHours());

    const toSave = Temporal.Now.plainDateTimeISO().with({
      minute: e.valueAsDate.getMinutes(),
      hour: e.valueAsDate.getUTCHours(),
    });

    compute();

    setArriving(toSave);

    // conso;

    // new Date();

    // console.log(e.value);
    // console.log(e.valueAsDate.getMinutes());
    // console.log(e.valueAsNumber);
    // console.log(typeof e.valueAsDate);

    // Math.abs(new Date() - new Date().setMinutes(10)) / 1000 / 60;

    // const arriving = e.valueAsDate;
    const now = new Date();

    // console.log("arriving", arriving, "----", "now", now);

    // const test = Math.floor(Math.abs(arriving - now) / 1000 / 60);

    // console.log("leaving in .. ", test);

    // console.log("qweqwe", arriving.toPlainTime().toLocaleString());

    console.log("==================");
  };

  return (
    <div className="bg-orange-200">
      <div className="m-auto flex h-screen  max-w-2xl flex-col items-center bg-orange-200 text-5xl font-bold ">
        <h1 className="mb-3  text-9xl ">U.R.late</h1>

        <UrlNewRename />
        {/* <UrlNewRename deadline="December, 31, 2022" /> */}

        {/* </form> */}
        <div className="m-2 flex flex-col space-x-2 ">
          <p>arriving</p>
          {/* {arriving.toLocaleTimeString().slice(0, 5)} */}
          {/* {arriving} */}
          <div>{JSON.stringify(arriving)}</div>
          <input
            className="bg-red-400"
            // value={`${arriving.hour}:${arriving.minute}`}
            value={arriving.toPlainTime().toLocaleString().slice(0, 5)}
            onChange={(e) => handleArriving(e.target)}
            type="time"
          />
        </div>
        <button
          onClick={() => compute()}
          className="border-2 bg-red-400 shadow-lg shadow-black"
        >
          {" "}
          nextDay?
        </button>
        <div className="m-2">
          {" "}
          remaining
          {remaining && (
            <div>
              {remaining.hours}h{remaining.minutes}'
            </div>
          )}
        </div>

        <div>
          REMAINING to LEAVE :
          <div>
            {" "}
            {">>"} xxxxxxx {"<<"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Urlate;
