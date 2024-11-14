import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

export function Swipe() {
  const [swipeType, setSwipeType] = useState("なし");
  const handlers = useSwipeable({
    onSwipedLeft: () => setSwipeType("left"),
    onSwipedRight: () => setSwipeType("right"),
  });

  return (
    <>
      <div
        {...handlers}
        style={{
          width: "300px",
          height: "400px",
          border: "2px solid #333",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          userSelect: "none",
        }}
      >
        <h1>スワイプしてみてください！</h1>
        <p>スワイプ方向表示：{swipeType}</p>
      </div>
    </>
  );
}
