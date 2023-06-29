import { plansData } from "../constants";

const PlanCard = () => {
  return (
    <div className="px-40 mt-52" id="pricing">
      <div className="flex flex-col gap-5 items-center text-center mb-10">
        <h1 className="font-bold text-[32px] text-black">Choose your plan</h1>
        <p className="max-w-[455px] text-black text-[14px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's{" "}
        </p>
        <div className="bg-white cursor-pointer shadow-md flex items-center justify-center gap-2 rounded-md p-2">
          <span className="px-3 py-1 bg-[#E1A6FF66] text-black text-[14px] font-normal rounded-md">monthly</span>
          <span className="text-black text-[14px] font-normal">yearly</span>
        </div>
      </div>

      <div className="flex gap-24 plans">
        {plansData.map((plan, index) => (
          <div
            className="flex flex-col gap-5 bg-white border border-[#7A3199] rounded-md py-[35px] px-[27px]"
            key={index}
          >
            <span className="text-base font-bold">{plan.name}</span>
            <span className="text-[12px]">{plan.desc}</span>
            <p className="font-bold text-[32px]">
              $ {plan.price}{" "}
              <span className="text-[14px] font-normal">/ months</span>
            </p>
            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="flex gap-4 items-center feature">
                  <svg
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M4.75 2.5C4.75 3.12989 4.49978 3.73398 4.05438 4.17938C3.60898 4.62478 3.00489 4.875 2.375 4.875C1.74511 4.875 1.14102 4.62478 0.695621 4.17938C0.250223 3.73398 0 3.12989 0 2.5C0 1.87011 0.250223 1.26602 0.695621 0.820621C1.14102 0.375223 1.74511 0.125 2.375 0.125C3.00489 0.125 3.60898 0.375223 4.05438 0.820621C4.49978 1.26602 4.75 1.87011 4.75 2.5Z"
                      fill="black"
                    />
                  </svg>
                  <span className="font-bold text-[12px]" key={index}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <button className="text-left mt-3 px-6 py-3 border border-[#7A3199] bg-white text-[#7A3199] w-fit cursor-pointer rounded-md ">
              Start Free Trial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanCard;
