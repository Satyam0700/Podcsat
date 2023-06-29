interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  return (
    <div className="bg-gradient px-9 cursor-pointer py-3 w-fit rounded-md shadow-md text-[20px] text-white font-bold">
      {title}
    </div>
  );
};

export default Button;
