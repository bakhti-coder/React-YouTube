import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './SingleVideo.scss'
import {BASE_URL} from '../../utils/Const'

const SingleVideo = () => {
  const { id } = useParams();

  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(BASE_URL + "/videos/" + id);
      const data = await res.json();
      console.log(data);
    };
    getData();
  }, []);


  return (
    <div>
      <Navbar />
      <div className="sidebar container mx-auto p-5">
        <iframe src={`https://www.youtube.com/embed/${id}`}></iframe>
      </div>
    </div>
  );
}

export default SingleVideo