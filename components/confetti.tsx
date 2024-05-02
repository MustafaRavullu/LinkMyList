"use client";

import useScreenSize from "@/hooks/use-screen-size";
import ReactConfetti from "react-confetti";

export default function Confetti() {
  const { width, height } = useScreenSize();
  return (
    <div>
      <ReactConfetti
        width={width}
        height={height}
        tweenDuration={1000}
        recycle={false}
      />
    </div>
  );
}
