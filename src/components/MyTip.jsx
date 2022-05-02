import React from "react";
import "../styles/MyTip.scss";
import { MdBookmarkRemove } from "react-icons/md";

function MyTip(props) {
  return (
    <aside>
      <div className="mytip">
        <div className="mytip__title">나만의 꿀팁</div>
        <div className="mytip__body">
          <div className="article">
            <div className="article__img">이미지</div>
            <div className="article__title">제목</div>
            <div className="btn__remove">
              <MdBookmarkRemove />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default MyTip;
