"use client";
import { SignIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Page() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      <div className="signinPage">
        <div className="flex flex-col lg:flex-row">
          {/* First div (Text) */}
          <div className=" lg:w-1/2">
            <h3 className="flex items-center justify-center h-screen text-white">
              Connect Together
            </h3>
          </div>

          {/* Second div (Video Player) */}
          <div className="h-90vh lg:w-1/2 player">
            <div className="frame">
              {domLoaded && (
                <ReactPlayer
                  playing={true}
                  loop={true}
                  volume={0}
                  muted
                  url="/assets/svg5.mp4"
                  height={"90vh"}
                  width={"100%"}
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Second div (Video Player) */}
          <div className="h-90vh lg:w-1/2 player">
            <div className="frame">
              {domLoaded && (
                <ReactPlayer
                  playing={true}
                  loop={true}
                  volume={0}
                  muted
                  url="/assets/svg4.mp4"
                  height={"90vh"}
                  width={"100%"}
                  className="react-player"
                />
              )}
            </div>
          </div>
          {/* First div (Text) */}
          <div className=" lg:w-1/2">
            <h3 className="flex items-center justify-center h-screen text-white">
              Code Together
            </h3>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* First div (Text) */}
          <div className=" lg:w-1/2">
            <h3 className="flex items-center justify-center h-screen text-white">
              Conquer Together
            </h3>
          </div>
          {/* Second div (Video Player) */}
          <div className="h-90vh lg:w-1/2 player">
            <div className="frame">
              {domLoaded && (
                <ReactPlayer
                  playing={true}
                  loop={true}
                  volume={0}
                  muted
                  url="/assets/svg2.mp4"
                  height={"90vh"}
                  width={"100%"}
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="h-90vh lg:w-1/2">
            <div>
              <SignIn />
            </div>
          </div>
          <div className=" lg:w-1/2">
            <h3 className="flex items-center justify-center h-screen text-white">
              In
           
              Wecode
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
