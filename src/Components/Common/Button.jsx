/* eslint-disable react/prop-types */


const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-[#FF0563] hover:bg-[#f8317e] active:bg-[#ff68a2] font-bold py-2 px-2 md:px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  ); 
};

export default Button;
