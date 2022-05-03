import React from "react";
import "../styles/TipList.scss";
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";
import classNames from "classnames";
import useActions from "./../hooks/useActions";
import useList from "./../hooks/useList";

function TipList() {
  const list = useList();
  const { onToggle, addToMyTip } = useActions();

  return (
    <main>
      <div className="list__title">꿀팁 목록</div>
      <div className="list">
        {list.map((content) => {
          const { id, title, image, desc, date, checked } = content;

          return (
            <div className="content" key={id}>
              <img className="content__image" src={image} alt="대표이미지" />
              <div className="content__body">
                <h3 className="content__title">{title}</h3>
                <p className="content__desc">{desc}</p>
                <p className="content__date">{date}</p>
              </div>
              <div
                className={classNames("btn__add", { checked })}
                onClick={() => {
                  addToMyTip(id);
                  onToggle(id);
                }}
              >
                {checked ? <MdBookmarkAdded /> : <MdBookmarkAdd />}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default TipList;
