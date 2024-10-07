import SearchBar from "../SearchBar/SearchBar";
import menuIcon from "../img/menu.svg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={menuIcon} alt="'Menu" />
        <h1>
          <span>Hello,</span> Aiko<span>!</span>
        </h1>
        <div></div>
      </div>
      <SearchBar />
    </>
  );
};

export default Header;
