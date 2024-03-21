import React from "react";
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import HomePage from "./pages/Home.js";
import QuestItems from "./pages/QuestItems.js";

function Main() {
  return (
    <>
      <HashRouter>
        <>
          <div>
          {/* 
          Class for background image
          <div class="bg"></div> */}
              <div className="nav-header">
                <h1>Tarkov</h1>
                <ul className="nav">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/questitems">Quest Items</NavLink>
                  </li>

                  <div className="second-nav-header">
                    {/* <li><NavLink to="/my-auctions">My-Auctions</NavLink></li> */}
                  </div>
                </ul>
              </div>
              <div className="content">
                <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route path="/questitems" element={<QuestItems />} />
                </Routes>
              </div>
            </div>
        </>
      </HashRouter>
    </>
  );
}

export default Main;
