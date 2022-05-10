import React from 'react';
import {Person, Search} from "@mui/icons-material";

const TopBar = () => {
    return (
        <div className="topBarContainer">
            <div className="topBarLeft">
                <span className="logo">Asocial</span>
            </div>
            <div className="topBarCenter">
                <div className="searchBar">
                    <Search />

                    <input className="searchInput"  type="text" placeholder="Search for friends, post or video" />
                </div>
            </div>
            <div className="topBarRight">
                <div className="topBarLinks">
                    <span className="topBarLink">
                        <a href="#">Home</a>
                    </span>
                    <span className="topBarLink">
                        <a href="#">Timeline</a>
                    </span>
                    <span className="topBarLink">
                        <a href="#">Messages</a>
                    </span>
                    <span className="topBarLink">
                        <a href="#">Notifications</a>
                    </span>
                    <span className="topBarLink">
                        <a href="#">More</a>
                    </span>
                </div>
                <div className="topBarIcons">
                    <div className="topBarIconItem">
                        <Person />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
