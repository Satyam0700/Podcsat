import { Button } from ".";

const Looking = () => {
  return (
    <div className="px-40 mt-10 flex text-center flex-col gap-9 items-center justify-center">
      <h1 className="text-4xl text-black font-bold max-w-[580px] leading-normal">
        We have what you’re looking for
      </h1>
      <p className="text-[12px] font-normal max-w-[596px] text-[#8E54E9] ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type a
      </p>

      <Button title="Get Started Now"/>
    </div>
  );
};

export default Looking;
