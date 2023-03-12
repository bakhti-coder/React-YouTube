import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import SingleVideo from "../components/Videos/SingleVideo";
import {BASE_URL} from '../utils/Const'

const SinglePage = () => {
  return (
    <>
     <SingleVideo />
    </>
  );
};

export default SinglePage;
