import React from "react";

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
        <p className="text-xl mt-20">Hello there! I'm Mario, a software enthusiast with a passion for all
          things tech. With one year of experience building and designing
          software, I've dabbled in a variety of programming languages, from the
          classics like C, C++, Java, and Python, to the more cutting-edge
          fields of Machine Learning and Data Science. But when it comes to
          building web applications, I'm all about React, Tailwind, and Next.js.</p>
        <br />
        <p className="text-xl"> I love creating beautiful, functional websites that make people's
          lives easier and more enjoyable. And if you need some 3D modeling or
          AR/VR thrown in there, I'm no stranger to Blender and Three.js. When
          I'm not coding up a storm, you can find me tinkering with MySQL and
          DBMS, or playing around with OpenCV to bring my projects to life. So
          whether you need a web app built from scratch or some data analyzed
          and visualized, I'm your guy. Let's make something amazing together</p>
      </div>
    </div>
  );
};

export default About;
