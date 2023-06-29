import { ReviewCard } from ".";

const Review = () => {
  return (
    <div className=" ml-44 mt-28 overflow-x-hidden " id="review">
      <div className="flex flex-col gap-10">
        <div>
          <h1 className="text-5xl text-black font-bold max-w-[580px] leading-normal">
            Review from customers
          </h1>
          <p className="text-base font-normal max-w-[433px] text-black ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry
          </p>
        </div>
        <div className="flex gap-4">
          <ReviewCard style="shadow" />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
      <div className="mt-14 mb-20 flex justify-center items-center">
        <img src="/dot3.png" alt="dot" className="cursor-pointer mr-64" />
      </div>
    </div>
  );
};

export default Review;
