import { Button, Features } from ".";

const About = () => {
  return (
    <div className="flex items-center justify-between gap-8" id="about">
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <Features />
          <Features />
        </div>
        <div className="mt-5 flex flex-col gap-4">
          <Features />
          <Features />
        </div>
      </div>
      <div className="flex flex-col gap-7">
      <h1 className="text-5xl text-black font-bold max-w-[580px] leading-normal">About the Course</h1>
        <p className="text-base font-normal max-w-[433px] text-black ">
          Lorem Ipsum is simply dummy text of the printing and typesetting in
          ustry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <Button title="Explore Now"/>
      </div>
    </div>
  );
};

export default About;
