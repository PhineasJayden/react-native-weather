import { useEffect, useState } from "react";
import { nowToHHMM } from "../../utils/date-time.js";
import { Txt } from "../Txt/Txt.jsx";
import { style } from "./Clock.style.jsx";

export function Clock({}) {
  const [time, setTime] = useState(nowToHHMM());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <>
      <Txt styleNew={style.time}>{time}</Txt>
    </>
  );
}
