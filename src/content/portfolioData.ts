import {
  Home,
  Shield,
  ShoppingCart,
  Car,
  Sparkles,
  HeartPulse,
  GraduationCap,
  Plane,
  Factory,
  Gamepad2,
  LucideIcon,
  AppWindow
} from 'lucide-react';

export type PortfolioCategory =
  | 'Real Estate'
  | 'Security'
  | 'E-Commerce'
  | 'Automotive'
  | 'Spa & Salon'
  | 'Health & Clinics'
  | 'E-Learning'
  | 'Tours & Travel'
  | 'Industry & B2B'
  | 'Games & Apps';

export interface PortfolioCategoryConfig {
  name: PortfolioCategory;
  icon: LucideIcon;
}

export const portfolioCategories: PortfolioCategoryConfig[] = [
  { name: 'Real Estate', icon: Home },
  { name: 'Security', icon: Shield },
  { name: 'E-Commerce', icon: ShoppingCart },
  { name: 'Automotive', icon: Car },
  { name: 'Spa & Salon', icon: Sparkles },
  { name: 'Health & Clinics', icon: HeartPulse },
  { name: 'E-Learning', icon: GraduationCap },
  { name: 'Tours & Travel', icon: Plane },
  { name: 'Industry & B2B', icon: Factory },
  { name: 'Games & Apps', icon: Gamepad2 },
];

export interface PortfolioItem {
  url: string;
  name: string;
  category: PortfolioCategory;
}

const extractHostname = (url: string) => {
  try {
    const hostname = new URL(url).hostname;
    return hostname.replace(/^www\./, '');
  } catch (e) {
    return url;
  }
};

const createItem = (url: string, category: PortfolioCategory, customName?: string): PortfolioItem => ({
  url,
  name: customName || extractHostname(url),
  category,
});

export const portfolioData: PortfolioItem[] = [
  // Real Estate
  createItem('http://www.jackson-grundy.com/', 'Real Estate', 'Jackson Grundy'),
  createItem('https://www.brlets.co.uk/', 'Real Estate', 'BR Lets'),
  createItem('https://www.bayt.com/en/india/', 'Real Estate', 'Bayt India'),
  createItem('https://www.dice.com/', 'Real Estate', 'Dice Tech'),

  // Security
  createItem('https://ioactive.com/', 'Security', 'IOActive'),
  createItem('http://www.bluesquad.in/aboutus.html', 'Security', 'Blue Squad'),
  createItem('https://www.sequretek.com/', 'Security', 'Sequretek'),
  createItem('https://www.rsa.com/', 'Security', 'RSA Security'),
  createItem('https://www.prosegur.com/en/', 'Security', 'Prosegur'),
  createItem('http://www.holisticsecurities.in/', 'Security', 'Holistic Securities'),
  createItem('http://www.whelansecurity.com/', 'Security', 'Whelan Security'),
  createItem('https://cybereyelabs.io/', 'Security', 'CyberEye Labs'),

  // E-Commerce
  createItem('https://www.unmade.com/', 'E-Commerce', 'Unmade'),
  createItem('https://www.joyalukkas.in/', 'E-Commerce', 'Joyalukkas'),
  createItem('https://zipgrow.com/', 'E-Commerce', 'ZipGrow'),
  createItem('https://www.hollisterco.com/', 'E-Commerce', 'Hollister Co.'),
  createItem('https://www.lakeshorelearning.com/', 'E-Commerce', 'Lakeshore Learning'),
  createItem('https://www.rei.com/', 'E-Commerce', 'REI Co-op'),
  createItem('https://theteashelf.com/', 'E-Commerce', 'The Tea Shelf'),


  // Automotive

  createItem('https://www.carx.com/', 'Automotive', 'CarX Auto Service'),

  createItem('https://www.execucar.com/', 'Automotive', 'ExecuCar'),
  createItem('https://bullchaser.in/', 'Automotive', 'Bull Chaser'),

  // Spa & Salon
  createItem('https://www.bodycraft.co.in/', 'Spa & Salon', 'Bodycraft Clinic'),
  createItem('http://www.uspasalonandmore.com/', 'Spa & Salon', 'U Spa Salon'),

  createItem('https://www.seaspasalonmv.com/', 'Spa & Salon', 'Sea Spa Salon'),
  createItem('http://gervaiseugene.com/', 'Spa & Salon', 'Gervais Eugene'),


  // Health & Clinics


  createItem('https://anschutzwellness.com/', 'Health & Clinics', 'Anschutz Wellness'),



  createItem('http://www.dciinc.org/', 'Health & Clinics', 'DCI Clinics'),
  createItem('https://www.parknicollet.com/', 'Health & Clinics', 'Park Nicollet'),
  createItem('https://www.childrensmn.org/', 'Health & Clinics', 'Children\'s Minnesota'),
  createItem('https://www.jiva.com/', 'Health & Clinics', 'Jiva Ayurveda'),
  createItem('https://www.confluencehealth.org/', 'Health & Clinics', 'Confluence Health'),
  createItem('http://www.shroffeyecentre.com/', 'Health & Clinics', 'Shroff Eye Centre'),
  createItem('https://www.healtheast.org/', 'Health & Clinics', 'HealthEast'),
  createItem('http://www.hanger.com/', 'Health & Clinics', 'Hanger Clinic'),

  // E-Learning
  createItem('https://quizizz.com/', 'E-Learning', 'Quizizz'),

  createItem('http://ask-elearning.com/', 'E-Learning', 'Ask E-Learning'),
  createItem('https://www.padi.com/', 'E-Learning', 'PADI'),
  createItem('http://www.onlineformapro.com/', 'E-Learning', 'Onlineformapro'),
  createItem('https://www.gpstrategies.com/', 'E-Learning', 'GP Strategies'),
  createItem('http://www.bppe.net/E-Learning.htm', 'E-Learning', 'BPPE E-Learning'),
  createItem('https://www.nogginlabs.com/', 'E-Learning', 'NogginLabs'),

  // Tours & Travel
  createItem('http://www.sanmortravel.com/', 'Tours & Travel', 'Sanmor Travel'),
  createItem('https://www.travelandleisure.com', 'Tours & Travel', 'Travel + Leisure'),
  createItem('https://www.tripenquiry.com/', 'Tours & Travel', 'Trip Enquiry'),
  createItem('http://www.akshartours.com/', 'Tours & Travel', 'Akshar Tours'),
  createItem('http://www.kasoexplorers.co.in/', 'Tours & Travel', 'Kaso Explorers'),
  createItem('https://www.tourdeals.com/', 'Tours & Travel', 'Tour Deals'),
  createItem('https://www.traveliaholidays.com/', 'Tours & Travel', 'Travelia Holidays'),

  // Industry & B2B
  createItem('https://www.destaco.com/en/', 'Industry & B2B', 'Destaco'),
  createItem('https://www.honeywell.com/', 'Industry & B2B', 'Honeywell'),
  createItem('https://www.astm.org/', 'Industry & B2B', 'ASTM International'),
  createItem('https://iqoption.com', 'Industry & B2B', 'IQ Option'),
  createItem('http://www.armstrong.com/', 'Industry & B2B', 'Armstrong World'),
  createItem('https://www.fluke.com/', 'Industry & B2B', 'Fluke Corp'),
  createItem('https://www.eazystock.com', 'Industry & B2B', 'EazyStock'),

  // Games & Apps

  createItem('https://play.google.com/store/apps/details?id=com.wordgame.wordgrid.puzzle', 'Games & Apps', 'Word Grid Puzzle'),
  createItem('https://play.google.com/store/apps/details?id=com.wordgame.crossword.word.multiplayer', 'Games & Apps', 'Multiplayer Crossword'),
  createItem('https://play.google.com/store/apps/details?id=com.wordlane.wordgame.puzzles', 'Games & Apps', 'Word Lane Puzzles'),
  createItem('https://play.google.com/store/apps/details?id=com.MobileSportsTime.MiniGolfEldoradoGolfCourse', 'Games & Apps', 'Mini Golf Eldorado'),
  createItem('https://play.google.com/store/apps/details?id=com.MobileSportsTime.MiniGolfInCartoonForest', 'Games & Apps', 'Mini Golf Cartoon Forest'),
  createItem('https://play.google.com/store/apps/details?id=com.elixir.dicefriends', 'Games & Apps', 'Dice Friends'),
  createItem('https://www.oculus.com/experiences/quest/8888584494500341/', 'Games & Apps', 'Oculus VR Game'),

  createItem('https://itunes.apple.com/us/app/world-startup-%20xpo/id1166151649', 'Games & Apps', 'Startup Xpo App'),
];
