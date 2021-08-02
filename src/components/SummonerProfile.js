import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container } from '@material-ui/core';
import getSummonerFromAPI from '../api';
import Spinner from './Spinner';
import Navbar from './Navbar';
import ErrorPage from './ErrorPage';
import './SummonerProfile.css';

// regions supported by the League of Legends API
const SUPPORTED_REGIONS = ["na1", "br1", "la1", "la2", "oc1", "kr", "jp1", "eun1", "euw1", "tr1", "ru"];

const SummonerProfile = () => {
    const [summoner, setSummoner] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const {region, name} = useParams();
    const history = useHistory();
    useEffect(() => {
        if (!SUPPORTED_REGIONS.includes(region)) {
            return history.replace('/');
        } else {
            async function getSummoner() {
                try {
                    const s = await getSummonerFromAPI(name, region);
                    setSummoner(s);
                } catch(err) {
                    setError(err);
                }
                setLoading(false);
            }
            getSummoner();
        }
    }, [history, name, region]);

    return (
        <>
            <Navbar />
            <Container>
                {loading 
                ? <Spinner />
                : (
                    <>
                        {error
                        ? <ErrorPage msg={error} />
                        : (
                            <h2>Ok</h2>
                        )}
                    </>
                )}
            </Container>
        </>
    );
}

export default SummonerProfile;