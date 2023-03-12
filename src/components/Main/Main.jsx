import React, { useEffect, useState } from 'react'
import './Main.scss'

import Sidebar from '../Sidebar/Sidebar';
import Card from './Card/Card';
import Navbar from '../Navbar/Navbar';




const Main = () => {

  const [videos, setVideos] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      "X-RapidAPI-Key": "9a1415f26cmshdb16db78cfd4330p155a7cjsn29e5eedb9562",
    },
  };

  useEffect(() => {
    fetch(
      `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setVideos(response.items);
      })
      .catch((err) => console.error(err));
  }, []); 


  return (
    <>
      <Navbar />
      <div className="main flex ">
        <Sidebar />
        <div className="main mt-5 flex flex-wrap">
          {videos.length ? (
            <>
              {videos?.map((video, index) => (
                <Card key={index} video={video} />
              ))}
            </>
          ) : (
            <div className="wrap">
              <div className="loading">
                <div className="bounceball"></div>
                <div className="text">NOW LOADING</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Main