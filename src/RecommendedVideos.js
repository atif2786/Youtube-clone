import React from "react";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className=" recommendedVideos_videos">
        <VideoCard
          title="🔴 How to Build a House from Scratch"
          channel="Architecture Digest"
          views="1.5M"
          timestamp="2 weeks ago"
          image="https://italianrealestatelawyers.com/wp-content/uploads/2020/10/architecture-1477101_1280-1140x641.jpg"
          channelImage="https://img.freepik.com/premium-vector/build-new-house-logo-design-vector-remodeling-repair_506432-84.jpg?w=2000"
        />

        <VideoCard
          title="Songs Never Give up"
          channel="Never-Give_Up"
          views="1.2M"
          timestamp="3 days ago"
          image="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
          channelImage="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        />

        <VideoCard
          title="The Science of Climate Change"
          channel="National Geographic"
          views="2.8M"
          timestamp="1 month ago"
          image="https://m.media-amazon.com/images/I/51gecrE8k-L.jpg"
          channelImage="https://www.shutterstock.com/image-vector/global-warming-climate-change-concept-260nw-2082860260.jpg"
        />
        <VideoCard
          title="Top 10 Movies of All Time"
          channel="CinemaBlend"
          views="3.7M"
          timestamp="1 week ago"
          image="https://i.ytimg.com/vi/2LqzF5WauAw/maxresdefault.jpg"
          channelImage="https://i.ytimg.com/vi/2LqzF5WauAw/hqdefault.jpg"
        />

        <VideoCard
          title="🔴 How to Build a House from Scratch"
          channel="Architecture Digest"
          views="1.5M"
          timestamp="2 weeks ago"
          image="https://italianrealestatelawyers.com/wp-content/uploads/2020/10/architecture-1477101_1280-1140x641.jpg"
          channelImage="https://img.freepik.com/premium-vector/build-new-house-logo-design-vector-remodeling-repair_506432-84.jpg?w=2000"
        />
        <VideoCard
          title="The Best Coffee Shops in New York City"
          channel="New York Times"
          views="562K"
          timestamp="1 day ago"
          image="https://secretnyc.co/wp-content/uploads/2020/11/coffeenyc-1024x742.jpg"
          channelImage="https://images-platform.99static.com//pbx6C8cTKqC643WHvoZLY7diLjQ=/296x301:1228x1233/fit-in/500x500/99designs-contests-attachments/49/49522/attachment_49522579"
        />

        <VideoCard
          title="Top 10 Movies of All Time"
          channel="CinemaBlend"
          views="3.7M"
          timestamp="1 week ago"
          image="https://i.ytimg.com/vi/2LqzF5WauAw/maxresdefault.jpg"
          channelImage="https://i.ytimg.com/vi/2LqzF5WauAw/hqdefault.jpg"
        />

        <VideoCard
          title="Songs Never Give up"
          channel="Never-Give_Up"
          views="1.2M"
          timestamp="3 days ago"
          image="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
          channelImage="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        />
        <VideoCard
          title="The Best Coffee Shops in New York City"
          channel="New York Times"
          views="562K"
          timestamp="1 day ago"
          image="https://secretnyc.co/wp-content/uploads/2020/11/coffeenyc-1024x742.jpg"
          channelImage="https://images-platform.99static.com//pbx6C8cTKqC643WHvoZLY7diLjQ=/296x301:1228x1233/fit-in/500x500/99designs-contests-attachments/49/49522/attachment_49522579"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
