

const Button = ({ innerText, onClick }) => {
  return <button className="w-full h-[48px] rounded-[8px] bg-button text-white font-Rubik font-medium" onClick={onClick}>{innerText}</button>;
};

export default Button;
