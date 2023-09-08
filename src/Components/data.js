import EcomerceAppPhoto from '../assets/EcomerceApp.jpg';
import TravlBuddy from '../assets/Travalbuddy.jpg';
import NesApp from '../assets/newsApp.jpg';
import CardGame from '../assets/CardGame.jpg';
import currency from '../assets/currency.jpg';
const data = {
  apps: [
    {
      name: 'EcomerceApp',
      link: 'https://zazaiecomerce.onrender.com/',
      avtar: EcomerceAppPhoto,
      description: 'ecommerce app allows users to shop online',
    },
    {
      name: 'Traval Buddy',
      link: 'https://q4qqoh.csb.app/#',
      avtar: TravlBuddy,
      description:
        ' exclusive travel app designed to let you find a travel buddy locally',
    },
    {
      name: 'Currency Converter',
      link: 'https://zalmai-zazai.github.io/Currancy-Converter/',
      avtar: currency,
      description:
        ' Its a Currency converter app which convert specific amount to diffirent currencies',
    },
    {
      name: 'NewsApp',
      link: 'https://ftp727.csb.app/',
      avtar: NesApp,
      description: 'Application which will display updated news articles ',
    },
    {
      name: 'Check Card Game',
      link: 'https://zalmai-zazai.github.io/checkCardsGame',
      avtar: CardGame,
      description: 'is an online multiplayer card game ',
    },
  ],
};

export default data;
