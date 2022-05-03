import React from "react";
import "../styles/MyTip.scss";
import { MdBookmarkRemove } from "react-icons/md";
import useList from "../hooks/useList";
import useActions from "../hooks/useActions";
import useMytip from "./../hooks/useMytip";

function MyTip() {
  const mytip = useMytip();
  const list = useList();
  const { remove } = useActions();

  if (mytip.length === 0) {
    return (
      <aside>
        <div className="mytip">
          <div className="mytip__title">나만의 꿀팁</div>
          <div className="mytip__body">
            <div className="empty">
              <h1 className="empty__title">아직 아무것도 없어요</h1>
              <p className="empty__desc">
                언제든 바로 찾아볼 수 있는
                <br />
                나만의 꿀팁을 저장해보세요!
              </p>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside>
      <div className="mytip">
        <div className="mytip__title">나만의 꿀팁</div>
        <div className="mytip__body">
          {mytip.map((mine) => {
            const { id } = mine;
            const content = list.find((c) => c.id === id);
            const click = () => {
              remove(id);
            };

            return (
              <div className="article" key={id}>
                <img
                  className="article__img"
                  src={content.image}
                  alt="대표이미지"
                />
                <div className="article__title">{content.title}</div>
                <div className="btn__remove" onClick={click}>
                  <MdBookmarkRemove />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default MyTip;
