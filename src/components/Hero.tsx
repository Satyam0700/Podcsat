import { Button } from ".";

const Hero = () => {
  return (
    <div className="flex px-36 mt-52">
      {/* <div className="absolute -top-96 -z-10 -left-96 w-[1677px] h-[655px] -rotate-45 flex-shrink-0 bg-gradient"/> */}
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl text-white font-bold max-w-[580px] leading-normal">Learn how to launch a successful podcast</h1>
        <p className="text-base font-normal max-w-[433px] text-white leading-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting in
          ustry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <Button title="Sign up Now"/>
      </div>
      <div className="relative">
        <img src="/img-1.png" alt="" />
        <img src="/img-2.png" className="absolute -top-20 -right-20 -z-10" alt="" />
        <img src="/group.png" alt="" className="absolute -top-3 -z-20 left-28" />
        <img src="/group-2.png" alt=""  className="absolute w-[60px] bg-white p-2 rounded-md shadow-md -right-20 bottom-10"/>
        <img src="/group-3.png" alt="" className="absolute w-[130px] top-10 -right-48 " />
      </div>
    </div>
  );
};

export default Hero;
