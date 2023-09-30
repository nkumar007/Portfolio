import gamebazaar from "../assets/demo_gamebazaar.mp4";
import webcam from "../assets/demo_webcam.mp4";
import StreamGPT from "../assets/demo_streamgpt.mp4";
import sketchBoard from "../assets/demo_sketchboard.mp4";
import {AiFillGithub, AiFillCode} from "react-icons/ai";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "Gamebazaar",
      src: gamebazaar,
      demo: "https://games-ocean.netlify.app/",
      code: "https://github.com/nkumar007/games-arena",
    },
    {
      id: 2,
      name: "StreamGPT",
      src: StreamGPT,
      demo: "https://stream-gpt.vercel.app/",
      code: "https://github.com/nkumar007/stream_GPT",
    },
    {
      id: 3,
      name: "Sketch Board",
      src: sketchBoard,
      demo: "https://online-sketchbook.vercel.app/",
      code: "https://github.com/nkumar007/Online-sketchbook",
    },

    {
      id: 4,
      name: "Webcam with Vanilla JS",
      src: webcam,
      demo: " https://web-cam-gallery.netlify.app/",
      code: "https://github.com/nkumar007/Web_cam_gallery",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({id, src, demo, code, name}) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <video src={src} className="rounded-md" controls autoPlay />
              <div className="text-center">
                <p className="text-xl pt-3">{name}</p>
                <div className="flex items-center justify-center">
                  <button className=" px-4 py-3 m-4 duration-200 hover:scale-105">
                    <a href={demo}>
                      <AiFillCode className="text-3xl" />
                    </a>
                  </button>
                  <button className="px-4 py-3  m-4 duration-200 hover:scale-105">
                    <a href={code}>
                      <AiFillGithub className="text-3xl" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
