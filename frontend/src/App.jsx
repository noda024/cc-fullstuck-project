import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import { Swipe } from "./swipe";
// import NewItemForm from "./NewItemForm";
// import TodoList from "./TodoList";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function App() {
  // state作成
  const [profiles, setProfiles] = useState([]);
  const [swipeType, setSwipeType] = useState("なし");

  const handlers = useSwipeable({
    onSwipedLeft: () => setSwipeType("left"),
    onSwipedRight: () => setSwipeType("right"),
  });
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
  console.log(profiles);

  // setProfiles((currentProfiles) => [...currentProfiles, profiles[0]]);
  if (profiles.length === 0) {
    return <p>Loading...</p>; // データがない場合は「Loading...」を表示
  }
  return (
    // command + shift + mでスワイプtu-ru(devツールから)
    <>
      <h1>match</h1>
      {/* <NewItemForm onSubmit={addTodo} /> */}
      <p className="header">返却値の確認(ここできたら疎通完了)</p>
      <div {...handlers}>
        <img
          src="/public/img/cat.png"
          width="400"
          height="200"
          {...handlers}
        ></img>
        <p>
          開発用:swipe方向:
          {swipeType}
        </p>
      </div>
      {/* <Swipe /> */}
      <p>
        名前：{profiles[0].name}
        <br></br>
        ひとこと：{profiles[0].description}
        <br></br>
        いいね数：{profiles[0].good.length}
      </p>
      <p></p>
      {/* <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} /> */}
    </>
  );
}
