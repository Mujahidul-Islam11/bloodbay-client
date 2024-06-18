/* eslint-disable react/prop-types */


const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`font-bold py-2 px-2 md:px-4 border shadow-lg rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  ); 
};

export default Button;
