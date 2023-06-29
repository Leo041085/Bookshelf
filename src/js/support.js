import savechildren from '../Fondu/savechildren@2x.png';
import hope from '../Fondu/hope@2x.png';
import united24 from '../Fondu/united@2x.png';
import intmedcorps from '../Fondu/intmedgr@2x.png';
import medicins from '../Fondu/medecins@2x.png';
import razom from '../Fondu/razom@2x.png';
import hunger from '../Fondu/hunger@2x.png';
import emergencies from '../Fondu/emergencies@2x.png';
import prytula from '../Fondu/prytula@2x.png';

import { createMarkupSupport } from './render.js';


const Fonds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: savechildren,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: hope,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: intmedcorps,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razom,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: hunger,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: prytula,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united24,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: medicins,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: emergencies,
  },
];

const refs = {
  list: document.querySelector('.js-list'),
  btn: document.querySelector('.show-more'),
};


createMarkupSupport(Fonds);
refs.list.insertAdjacentHTML('afterbegin', createMarkupSupport(Fonds));








