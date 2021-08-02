import SummonerSearch from './SummonerSearch';
import './HomePage.css';
import logo from '../assets/img/logo.png';

const HomePage = () => (
    <div className="HomePage">
        <img className="HomePage-logo" src={logo} alt="trackrrr-logo" />
        <SummonerSearch />
    </div>
);

export default HomePage;