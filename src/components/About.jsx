const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-2">
          Welcome to my profile! I'm a passionate software developer with two
          years of hands-on experience in the dynamic world of Fullstack web
          development. My journey in the world of coding has been marked by a
          relentless curiosity and an unwavering commitment to delivering
          top-notch solutions. My expertise lies in crafting robust and
          responsive web applications that not only meet but exceed client
          expectations. With a solid foundation in both frontend and backend
          technologies, I bring a holistic approach to every project I
          undertake.
        </p>
      </div>
    </div>
  );
};

export default About;
