import {HiArrowNarrowRight} from "react-icons/hi";
import HeroImage from "../assets/dev_pic.png";
import {Link} from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 -mb-6 md:-mb-0"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-7xl font-semibold text-white ">
            Hello, I'm Naveen.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            A Fullstack Engineer who's skillset includes Javascript, ReactJS,
            MERN stack, GIT, DOCKER and many more.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-full md:w-full md:pl-3 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
