export default function Header(name) {
  return (
    <>
      <header className="header">
        <div className="header_content">
          <img src="/public/img/puzzle.png" className="header_img" />
          <h1 className="Title">To matching</h1>
        </div>
      </header>
      <div>
        <h2>Hello {name.name} さん</h2>
        良いと思ったものには右フリック!<br></br>
        微妙だと思ったものは左フリックしてみよう！
      </div>
    </>
  );
}
