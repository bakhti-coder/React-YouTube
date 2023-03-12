import React from 'react'
import homeIcon from "./image/HomeSvg.svg";
import trendingicon from "./image/Olov.svg";
import subcration from "./image/patpis.svg";
import libary from "./image/libary.svg";
import history from "./image/history.svg";
import yourvideo from "./image/myVideo.svg";
import watchleater from "./image/watchleater.svg";
import liked from "./image/liked.svg";


const Sidebar = () => {
  return (
    <div>
      <div className="aside">
        <div className="aside__menu mt-6 w-72">
          <ul className="aside__menu__item">
            <li className="flex mx-2 items-center my-3 cursor-pointer hover:bg-slate-100 p-2 rounded-full">
              <img src={homeIcon} alt="" width={30} className="mr-2" />
              <p className="text-lg font-medium">Home</p>
            </li>
            <li className="flex mx-2 items-center my-3 cursor-pointer hover:bg-slate-100 p-2 rounded-full">
              <img src={trendingicon} alt="" width={30} className="mr-2" />
              <p className="text-lg font-medium">Trending</p>
            </li>
            <li className="flex mx-2 items-center my-3 cursor-pointer hover:bg-slate-100 p-2 rounded-full">
              <img src={subcration} alt="" width={30} className="mr-2" />
              <p className="text-lg font-medium">Subscriptions</p>
            </li>
            <hr className="ml-3 w-52 " />
            <li className="flex mx-2 items-center my-3 cursor-pointer hover:bg-slate-100 p-2 rounded-full">
              <img src={libary} alt="" width={30} className="mr-2" />
              <p className="text-lg font-medium">Library</p>
            </li>
            <li className="flex mx-2 items-center my-3 cursor-pointer hover:bg-slate-100 p-2 rounded-full">
              <img src={history} alt="" width={30} className="mr-2" />
              <p className="text-lg font-medium">History</p>
            </li>
            <li className="flex mx-2 items-center my-3 cursor-pointer hover:bg-slate-100 p-2 rounded-full">
              <img src={yourvideo} alt="" width={30} className="mr-2" />
              <p className="text-lg font-medium">Your videos</p>
            </li>
            <li className="flex mx-2 items-center my-3 cursor-pointer hover:bg-slate-100 p-2 rounded-full">
              <img src={watchleater} alt="" width={30} className="mr-2" />
              <p className="text-lg font-medium">Watch later</p>
            </li>
            <li className="flex mx-2 items-center my-3 cursor-pointer hover:bg-slate-100 p-2 rounded-full">
              <img src={liked} alt="" width={30} className="mr-5" />
              <p className="text-lg font-medium">Liked videos</p>
            </li>
            <hr className="ml-3 " />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar