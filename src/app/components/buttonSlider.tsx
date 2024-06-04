import React from "react";

interface ButtonProps {
  id: number;
  link: string;
  type: string;
}

 const SliderButtons: React.FC<{ buttons: ButtonProps[] }> = ({ buttons }) => {
  return buttons.map(({ id, link }) => (
    <a target="_blank" key={id} href={link}>
    </a>
    
  ));
};

export default SliderButtons;