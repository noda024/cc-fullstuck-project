import React, { useState } from "react";

export function Login({ name, handleLogin, setName }) {
  function handleLoginCheck(e) {
    setName(e.target.value);
  }

  function handleSubmit() {
    handleLogin(true, name);
  }

  // 聞いた内容
  // useEffectではない考え方
  // button useRefでinputの内容を持ってくる方法→制御componsetと非制御がある
  //   基本的に制御をした方が良い
  //   　state→view変化の方が良い、1文字ずつ変化させる
  //   userefはdom側で保持しないといけないため、制御コンポーネントで調べると出てくる

  //   useEffect→外部のものを副作用として利用したいときになる
  //   ドキュメントの必要ですかというところが

  return (
    <>
      <h1>ログイン画面</h1>
      <h2>名前を入力してください</h2>
      <input
        type="text"
        placeholder="名前入力"
        value={name}
        onChange={handleLoginCheck}
      />
      <button onClick={handleSubmit}>ログイン</button>
    </>
  );
}
