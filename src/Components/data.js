import EcomerceAppPhoto from '../assets/EcomerceApp.jpg';
import foodapp from '../assets/food.jpg';
import SudsyCarwash from '../assets/sudsyCarwash.jpg';
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
      name: 'Sudsy CarWash',
      link: 'https://sudsaycarwash.netlify.app/',
      avtar: SudsyCarwash,
      description:
        'A carwash project desgined for sudsy carwash located in Kent, WA',
    },
    {
      name: 'Food App',
      link: 'https://myfoodresturant.netlify.app/',
      avtar: foodapp,
      description:
        'Discover delicious dishes, The app combines convenience with taste, delivering a seamless experience for users to find and order their favorite meals',
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
