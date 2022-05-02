import React from "react";
import "../styles/Header.scss";

function Header(props) {
  return (
    <header>
      <div className="header__container">
        <h1 className="header__title">나만의 꿀팁</h1>
        <p className="header__subtitle">
          나에게 필요한 꿀팁만 모아서 언제든지 꺼내보자!
        </p>
      </div>
    </header>
  );
}

export default Header;
