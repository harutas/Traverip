import React from "react";
import "../App.css";

const RoomPage = () => {
  return (
    <div className="flex justify-center">
      <ul className="flex-schedule">
        <li>
          <span className="time">9:20</span>
          <div className="area">
            <div className="sch_box">
              <p className="sch_title">タイトル</p>
              <p className="sch_tx">内容テキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
          </div>
        </li>
        <li>
          <span className="time">10:00</span>
          <div className="area">
            <div className="sch_box">
              <p className="sch_title">タイトル</p>
              <p className="sch_tx">内容テキスト</p>
            </div>
          </div>
        </li>
        <li>
          <span className="time">11:00</span>
          <div className="area">
            <div className="sch_box">
              <p className="sch_title">タイトル</p>
              <p className="sch_tx">内容テキスト</p>
            </div>
          </div>
        </li>
        <li>
          <span className="time">12:00</span>
          <div className="area">
            <div className="sch_box">
              <p className="sch_title">タイトル</p>
              <p className="sch_tx">内容テキスト</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RoomPage;
