import React from 'react'
import profileImg from './PP.svg'
import './Card.scss'
import { Link } from 'react-router-dom';

const Card = ({ video }) => {
  const publishTimes = video.snippet.publishTime
  const time = publishTimes.split('T')
  console.log(video);
  return (
    <>
      <div className="card m-4" style={{ width: "" }}>
        <div className="card__img">
          <Link to={"/videos/" + video.id.videoId}>
            <img
              src={video.snippet.thumbnails.default.url}
              alt=""
              style={{ width: "360px", height: "200px", objectFit: "cover" }}
            />
          </Link>
        </div>
        <div className="card__body flex mt-2">
          <div className="imgprofile mr-3">
            <img src={profileImg} alt="" />
          </div>
          <div className="text w-80">
            <h4 className="	">{video.snippet.title}</h4>
            <p className="text-sm text-slate-800">
              <Link>
                <span>{video.snippet.channelTitle}</span> <br />{" "}
                <span> 25 тыс. просмотров ^ {time[0]}</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card