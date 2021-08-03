import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { SportsEsports } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import SummonerSearch from './SummonerSearch';
import './Navbar.css';

const Navbar = ({loading}) => {
    const history = useHistory();
    const goHome = () => history.push("/");

    return (
        <AppBar className="Navbar" position="static" color="secondary">
            <Toolbar>
                <div className="Navbar-logo-container">
                    <div className="Navbar-logo" onClick={goHome}>
                        <SportsEsports />
                        <Typography variant="h5">
                            Trackrrr
                        </Typography>
                    </div>
                </div>
                <SummonerSearch loading={loading} smaller={true} />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;