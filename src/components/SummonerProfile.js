import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import { getSummoner, updateSummoner } from '../api';
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
    const updateSummonerFromAPI = async () => {
        setLoading(true);
        const updatedSummoner = await updateSummoner(name, region);
        setSummoner(updatedSummoner);
        setLoading(false);
    };
    useEffect(() => {
        if (!SUPPORTED_REGIONS.includes(region)) {
            history.replace('/');
        } else {
            setLoading(true);
            async function getSummonerFromAPI() {
                try {
                    const s = await getSummoner(name, region);
                    setSummoner(s);
                    setError(false);
                } catch(err) {
                    setError(err);
                }
                setLoading(false);
            }
            getSummonerFromAPI();
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
                                        updateSummoner={updateSummonerFromAPI}
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