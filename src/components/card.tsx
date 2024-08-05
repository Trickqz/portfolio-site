import React from 'react';
import { CardInfo } from './cardData';

interface CardProps {
  card: CardInfo;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <a href={card.urllink}>
      <div className="bg-[#292C34] shadow-md rounded-lg p-3 m-4 w-80 duration-300 border border-[#292C34] hover:border-[#878EA1]">
        <img src={card.imageUrl} className="w-full h-48 bg-cover rounded-md mb-4" />
        <h1 className="text-base font-bold font-['Asap'] text-[#E2E4E9]">{card.title}</h1>
        <p className="text-sm font-extralight font-['Maven_Pro'] mb-2 text-[#c0c4cec7]">{card.description}</p>
      </div>
    </a>
  );
};

export default Card;
