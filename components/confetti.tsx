"use client";

import useScreenSize from "@/hooks/use-screen-size";
import ReactConfetti from "react-confetti";

export default function Confetti() {
  const { width, height } = useScreenSize();
  return (
    <div>
      <ReactConfetti
        width={width - 20}
        height={height - 10}
        tweenDuration={1000}
        recycle={false}
      />
    </div>
  );
}
