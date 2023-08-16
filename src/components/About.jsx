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
          As a full-stack MERN developer with a bachelor's degree in information
          technology, I have two years of experience in web development, with a
          focus on frontend technologies. I am seeking new opportunities and
          available to start immediately. I have worked as a software engineer
          at Tata Consultancy Services, where I developed and maintained web
          applications using React.js, Redux, Node.js, HTML5, CSS3, and Tailwind
          CSS. I also contributed to iNeuron.ai as an intern, where I enhanced
          my skills in web development and learned new frameworks and tools. I
          have multiple certifications in HTML, CSS, JavaScript, and Git, which
          demonstrate my proficiency and passion for web development. I enjoy
          creating user-friendly, responsive, and interactive web interfaces,
          using the latest technologies and best practices. I also value
          collaboration, communication, and continuous learning, as I believe
          they are essential for delivering high-quality products and services.
          My goal is to apply my skills and knowledge to solve real-world
          problems and create positive impacts.
        </p>

        {/* <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          qui fugit numquam! Cum vitae temporibus molestiae dicta illum
          laboriosam similique at mollitia nihil iusto repellat numquam eos illo
          perspiciatis a unde minima commodi id cupiditate laborum iste, beatae
          maiores. Voluptatum quisquam dignissimos tempore asperiores sit
          ratione officiis officia alias vitae.
        </p> */}
      </div>
    </div>
  );
};

export default About;
