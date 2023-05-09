import React from "react";
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.googleusercontent.com/ytc/AGIKgqN8GgrkGaaRTY5ekdsoAALXvJQaMzGP71b4RTjmJQ=s176-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        subs="1.25M"
        noOfvideos={786}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
      />
    </div>
  );
}

export default SearchPage;
