import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@material-ui/core";
// import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlinedIcon";


function ChannelRow({
  image,
  channel,
  subs,
  noOfvideos,
  description,
  verified,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow_logo" alt={channel} src={image} />
      <div className="channelRow_text">
        {/* <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4> */}
        <p>
          {subs} subscribers . {noOfvideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
