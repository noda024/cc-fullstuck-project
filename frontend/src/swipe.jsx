import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useEffect } from "react";

export function Swipe({
  profiles,
  userId,
  setFlick,
  handleSwipeType,
  // handleLooked,
}) {
  // const [swipeType, setSwipeType] = useState("なし");

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      handleSwipeType("left");
      setFlick(false);
      setTimeout(() => {
        setFlick(true);
        handleSwipeType("なし");
      }, 1000);
    },
    onSwipedRight: () => {
      handleSwipeType("right");
      setFlick(false);
      setTimeout(() => {
        setFlick(true); // 元に戻す
        handleSwipeType("なし");
      }, 1000);
    },
  });

  // function handleLookedMen() {
  //   handelLooked(profiles.id);
  // }

  // useEffect(() => {
  //   handleLooked(profiles.id);
  // }, []);

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
          <br></br>
          出身：{profiles[userId].born} 年齢：{profiles[userId].age}
        </p>
      </div>
    </>
  );
}
