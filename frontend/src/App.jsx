import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./App.css";
import { Swipe } from "./Swipe";
import axios from "axios";
import Header from "./Header";
import { Matching } from "./Matching";
import { NoMatching } from "./NoMatching";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function App() {
  // state作成
  // ユーザー内容保持
  const [profiles, setProfiles] = useState([]);
  // userId保持
  const [userId, setUserId] = useState();
  // フリックしたか保持　falseでいいね完了画面に遷移
  const [flick, setFlick] = useState(true);

  const [swipeType, setSwipeType] = useState("なし");

  // randomな数字設定
  useEffect(() => {
    setUserId(Math.floor(Math.random() * 3));
  }, []);

  // APIを利用してユーザー情報取得
  useEffect(() => {
    try {
      const fetchProfiles = async () => {
        const res = await axios.get(`${baseUrl}/match`);
        setProfiles(res.data);
      };
      fetchProfiles();
    } catch (err) {
      // エラーハンドリング
    }
  }, []);

  //子から親に運ぶための関数
  function handleSwipeType(direction) {
    setSwipeType(direction);
  }

  // データがない場合は「Loading...」を表示
  if (profiles.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    // command + shift + mでスワイプtu-ru(devツールから)
    <>
      {flick ? (
        <>
          <Header />
          <Swipe
            profiles={profiles}
            userId={userId}
            setFlick={setFlick}
            // setSwipeType={setSwipeType}
            handleSwipeType={handleSwipeType}
          />
        </>
      ) : swipeType === "right" ? (
        <Matching />
      ) : (
        <NoMatching />
      )}
    </>
  );
}
