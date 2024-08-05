import Card1 from "../assets/card1.png"
import Card2 from "../assets/card2.png"
import Card3 from "../assets/card3.png"

export interface CardInfo {
    title: string;
    description: string;
    imageUrl: string;
    urllink: string;
  }
  
  export const cardData: CardInfo[] = [
    {
      title: "HairDaily Rocketseat",
      description: "Este projeto faz parte da Rocketseat, focado em capacitar desenvolvedores através de desafios práticos e projetos reais.",
      imageUrl: Card1,
      urllink: "https://instagram.com/"
    },
    {
      title: "Timer Rocketseat",
      description: "Este projeto faz parte da Rocketseat, focado em capacitar desenvolvedores através de desafios práticos e projetos reais.",
      imageUrl: Card3,
      urllink: "https://instagram.com/"
    },
    {
      title: "To-Do-List Rocketseat",
      description: "Este projeto faz parte da Rocketseat, focado em capacitar desenvolvedores através de desafios práticos e projetos reais.",
      imageUrl: Card2,
      urllink: "https://instagram.com/"
    }
  ];
  