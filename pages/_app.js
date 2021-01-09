import '../styles/globals.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoupleup as fasAngleDoubleUp, faCoffee, faAngleDoubleDown, faEquals,faRupeeSign as fasRupeeSign,faGift,faShieldAlt,faCube,faHome} from '@fortawesome/free-solid-svg-icons';
import { faStar, faBell, faHeart, faUser, faCreditCard,faAddressCard} from '@fortawesome/free-regular-svg-icons';
function MyApp({ Component, pageProps }) {
   library.add(fasAngleDoubleUp, faCoffee, faAngleDoubleDown, faEquals,fasRupeeSign,faGift,faShieldAlt,faCube,faUser,faCreditCard,faHome,faHeart,faBell,faStar,faAddressCard)
  return <Component {...pageProps} />
}

export default MyApp
