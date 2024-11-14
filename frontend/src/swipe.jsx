import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

export function Swipe({ profiles, userId, setFlick, handleSwipeType }) {
  // const [swipeType, setSwipeType] = useState("なし");

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      handleSwipeType("left");
      setFlick(false);
      setTimeout(() => {
        setFlick(true);
      }, 1000);
    },
    onSwipedRight: () => {
      handleSwipeType("right");
      setFlick(false);
      setTimeout(() => {
        setFlick(true); // 元に戻す
      }, 1000);
    },
  });

  return (
    <>
      <div {...handlers}>
        <img
          src={`/public/img/${profiles[userId].image_path}`}
          className="user_img"
          {...handlers}
        />
      </div>
      <div className="user_info">
        <p>
          名前：{profiles[userId].name}
          <br></br>
          ひとこと：{profiles[userId].description}
          {/* <br></br>
              いいね数：{profiles[2].good.length} */}
        </p>
      </div>
    </>
  );
}
