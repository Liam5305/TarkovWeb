import React from "react";
import {
    Routes,
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import HomePage from "./pages/Home.js";

function Main() {
    return (
        <>
            <HashRouter>
                <>
                    <div>
                        <div className="nav-header">
                            <h1>Tarkov</h1>
                            <ul className="nav">
                                <li><NavLink to="/">Home</NavLink></li>
                                {/* <li><NavLink to="/browse">Browse</NavLink></li> */}

                                <div className="second-nav">
                                    {/* <li><NavLink to="/my-auctions">My-Auctions</NavLink></li> */}
                                </div>
                            </ul>
                        </div>
                        <div className="content">
                            <Routes>
                                <Route exact path="/" element={<HomePage />} />
                                {/* <Route path="/browse" element={<BrowsePage />} /> */}
                            </Routes>
                        </div>
                    </div>
                </>
            </HashRouter>
        </>
    );
}

export default Main;