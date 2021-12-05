import "./style.scss";

import PropTypes from "prop-types";

interface LinkSectionProps {
  title: string;
  buttonName: string;
}

const LinkSection = ({ title, buttonName }: LinkSectionProps) => (
  <div className="linkSection">
    <h2 className="linkSection__title">{title}</h2>
    <a href="#" className="linkSection__buttonName">
      {buttonName}
    </a>
  </div>
);

export default LinkSection;
