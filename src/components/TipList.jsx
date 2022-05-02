import React from "react";
import "../styles/TipList.scss";
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";
import classNames from "classnames";

function TipList(props) {
  return (
    <main>
      <div className="list__title">꿀팁 목록</div>
      <div className="list">
        <div className="content">
          <div className="content__image">이미지</div>
          <div className="content__body">
            <h3 className="content__title">타이틀</h3>
            <p className="content__desc">설명</p>
            <p className="content__date">날짜</p>
          </div>
          <div className={classNames("btn__add")}>
            <MdBookmarkAdd />
          </div>
        </div>
      </div>
    </main>
  );
}

export default TipList;
