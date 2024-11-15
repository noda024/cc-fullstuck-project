import { useEffect, useState } from "react";
import "./App.css";
import { Swipe } from "./Swipe";
import axios from "axios";
import Header from "./Header";
import { Matching } from "./Matching";
import { NoMatching } from "./NoMatching";
import { Login } from "./Login";
import { Sorry } from "./Sorry";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function App() {
  // state作成
  // ユーザー内容保持
  const [profiles, setProfiles] = useState([]);
  // userId保持
  const [userId, setUserId] = useState();
  // フリックしたか保持　falseでいいね完了画面に遷移
  const [flick, setFlick] = useState(true);
  // swipe方向を保存
  const [swipeType, setSwipeType] = useState("なし");
  // 名前保存(自分の名前を入れる、簡単のため一意であるアプリとする)
  const [name, setName] = useState("");
  // login画面遷移→その後ログイン名を入力させ存在すれば、ログイン、できなければ名前入力遷移
  const [login, setLogin] = useState(false);
  // すでに表示された人保持する配列、自分のuserIdは100と設定
  const [looked, setLooked] = useState([100]);
  // 自分のIDを保管
  const [myId, setMyId] = useState();
  // もう表示できない
  const [sorry, setSorry] = useState(false);

  // randomな数字設定
  // todo 9の部分をユーザーの数に変更(API呼び出し後にpropertiesの長さに変更)
  useEffect(() => {
    let newId;
    const checkArray = Array.from(new Set(looked));
    console.log(checkArray);
    if (checkArray.length < 7) {
      do {
        newId = Math.floor(Math.random() * 7);
        // 見たことある人と自分以外を調べるためにlooked内で検索している
      } while (looked.includes(newId));
      setUserId(newId);
    } else {
      setSorry(true);
    }
  }, [flick]);

  // API
  // APIを利用してユーザー情報取得
  useEffect(() => {
    try {
      const fetchProfiles = async () => {
        const res = await axios.get(`${baseUrl}/matches`);
        console.log(baseUrl);
        setProfiles(res.data);
      };
      fetchProfiles();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // // ログイン情報を利用して登録(名前があれば登録、なければheaderにログイン名を)
  // useEffect(() => {
  //   // try {
  //   const nameList = profiles.map((item) => item.name);
  //   console.log(nameList);
  //   try {
  //     if (!nameList.includes(name)) {
  //       const insertProfiles = async () => {
  //         const res = await axios.post(`${baseUrl}/matches`, name);
  //         // setProfiles(res.data);
  //       };
  //       insertProfiles();
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [login]);

  // 子から親にフリック方向を運ぶための関数
  function handleSwipeType(direction) {
    setSwipeType(direction);
  }

  // login状態を変更する関数
  function handleLogin(state, name) {
    setLogin(state);
    setName(name);
  }

  // todo 自分のIDを100番にしてる、本当はテーブルから取ってくるようにしたい
  useEffect(() => {
    setMyId(100);
    setLooked([myId]);
  }, [login]);

  // swipeするとuserIdが見た人に追加される
  useEffect(() => {
    setLooked([...looked, userId]);
  }, [swipeType]);

  // データがない場合は「Loading...」を表示
  if (profiles.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    // command + shift + mでスワイプtu-ru(devツールから)
    <>
      {/* [must]マストの修正(開発のためloginの前に！を消している) */}
      {sorry ? (
        <Sorry />
      ) : !login ? (
        <Login
          name={name}
          handleLogin={handleLogin}
          setName={setName}
          profiles={profiles}
          baseUrl={baseUrl}
        />
      ) : flick ? (
        <>
          <Header name={name} />
          <Swipe
            profiles={profiles}
            userId={userId}
            setFlick={setFlick}
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
