"use client"
import { SignUp } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";


export default function Page() {

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
    <div className="signunPage">
    <div className="flex flex-col lg:flex-row">
          {/* First div (Text) */}
          <div className=" lg:w-1/2">
            <h3 className="flex items-center justify-center h-screen text-white">
             <SignUp />
             
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
                  url="/assets/signUp.mp4"
                  height={"90vh"}
                  width={"100%"}
                />
              )}
            </div>
          </div>
        </div>


    </div>

    </>
  );
}
