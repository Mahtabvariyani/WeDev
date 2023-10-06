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
        {/* Content Section 1 */}
        <div className="flex flex-col lg:flex-row">
          {/* First div (Text) */}
          <div className="lg:w-1/2">
            <div className="flex flex-col items-center justify-center h-screen text-white">
              <h3>Connect Together</h3>
              <p className="text-center text-gray-500">
                " is not about just connecting people. <br />  It's about connecting people with people, people with ideas, <br />
                  and people with opportunities."
                <br />
                 - Michele Jennae
              </p>
            </div>
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

        {/* Content Section 2 */}
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
          <div className="lg:w-1/2">
            <div className="flex flex-col items-center justify-center h-screen text-white">
              <h3>Code Together</h3>
              <p className="text-center text-gray-500">
              "Coding together is not just about writing code; <br />  it's about writing a story, solving a puzzle, and building a legacy." <br />  - Unknown
              </p>
            </div>
          </div>
        </div>

        {/* Content Section 3 */}
        <div className="flex flex-col lg:flex-row">
          {/* First div (Text) */}
          <div className="lg:w-1/2">
            <div className="flex flex-col items-center justify-center h-screen text-white">
              <h3>Conquer Together</h3>
              <p className="text-center text-gray-500">
              "Coding together is not just about writing code; <br />  it's about conquering challenges, pushing boundaries, <br />  and building something extraordinary." <br /> - Unknown
              </p>
            </div>
          </div>
          {/* Second div (Video Player) */}
          <div className="h-100vh lg:w-1/2 player">
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

        {/* Content Section 4 */}
        <div className="flex flex-col lg:flex-row clerk">
          <div className="lg:w-1/2">
            <div className="flex flex-col items-center justify-center lg:h-screen text-white">
              <h3>In 
                
              <span className="special-text"> WeCode</span> 
                
                 <br />
              We Unlock the Code, <br />
              We Connect the World!
                </h3>
           
            </div>
          </div>
          <div className="h-90vh lg:w-1/2 flex items-center justify-center">
            <div className="clerk">
              <SignIn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
