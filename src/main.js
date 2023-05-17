import "./styles.css";
import searchIcon from "./searchIcon.svg";

function Main({ onClick, value, onChange }) {
  return (
    <main>
      <span>ImgSearch</span>
      <div>
        <img src={searchIcon} alt="검색아이콘" />
        <input type="text" value={value} onChange={onChange} />
      </div>
      <button onClick={onClick}>검색하기</button>
    </main>
  );
}

export default Main;
