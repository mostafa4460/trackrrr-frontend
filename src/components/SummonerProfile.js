import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import getSummonerFromAPI from '../api';
import Spinner from './Spinner';
import Navbar from './Navbar';
import ErrorPage from './ErrorPage';
import Profile from './Profile';
import Ranks from './Ranks';
import Matches from './Matches';

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
            history.replace('/');
        } else {
            setLoading(true);
            async function getSummoner() {
                try {
                    const s = await getSummonerFromAPI(name, region);
                    setSummoner(s);
                    setError(false);
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
            <Navbar loading={loading} setLoading={setLoading} />
            <Container>
                {loading 
                ? <Spinner />
                : (
                    <>
                        {error
                        ? <ErrorPage msg={error} />
                        : (
                            <Grid container spacing={2}>
                                <Grid container item xs={12}>
                                    <Profile 
                                        name={summoner.name} 
                                        summonerProfile={summoner.profile}
                                        lastUpdated={summoner.lastUpdated} 
                                    />
                                </Grid>
                                <Grid container item xs>
                                    <Ranks ranks={summoner.rank} />
                                </Grid>
                                <Grid item xs={9}>
                                    <Matches matches={summoner.matches} />
                                </Grid>
                            </Grid>
                        )}
                    </>
                )}
            </Container>
        </>
    );
}

export default SummonerProfile;