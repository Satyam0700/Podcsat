interface ReviewCardProps {
    style?: string
}

const ReviewCard = ({ style}: ReviewCardProps) => {
  return (
    <div className={`bg-white ${style} flex flex-col gap-10  rounded-lg py-[36px] px-[48px] border border-[#E1A6FF66] w-fit`}>
        <div className="flex items-center gap-6">
          <div>
            <img src="/people.png" alt="people" width="70px" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold text-base">Lolla Smith</span>
            <span className="text-[14px] font-normal">Microsoft</span>
            <div className="flex items-center gap-2">
              <img src="/star.png" alt="start" width={20} />
              <img src="/star.png" alt="start" width={20} />
              <img src="/star.png" alt="start" width={20} />
              <img src="/star.png" alt="start" width={20} />
              <img src="/star.png" alt="start" width={20} />
            </div>
          </div>
        </div>
        <div>
          <p className="font-normal text-[14px] max-w-[389px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make{" "}
          </p>
        </div>
      </div>
  )
}

export default ReviewCard