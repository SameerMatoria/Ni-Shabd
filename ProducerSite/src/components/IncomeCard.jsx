import React from "react";
import PropTypes from "prop-types";

const IncomeCard = ({ title, value, icon, bgColor }) => {
  return (
    <div
      className={`rounded-lg p-6 shadow-md text-white flex flex-col items-center justify-center ${bgColor}`}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

IncomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element.isRequired, // Pass an icon as a JSX element
  bgColor: PropTypes.string, // Tailwind class for background color
};

IncomeCard.defaultProps = {
  bgColor: "bg-blue-500", // Default color
};

export default IncomeCard;
