import { Tooltip } from '@material-ui/core';
import './Ranks.css';

const Ranks = ({ranks}) => {
    const soloRank = ranks.find(r => r.queueType === 'Ranked Solo');
    const flexRank = ranks.find(r => r.queueType === 'Flex 5:5 Rank');
    return (
        <div className="Ranks">
            <div className="Ranks-solo">
                <Tooltip title="Ranked Solo" arrow className="Ranks-img">
                    <img src={soloRank ? `/img/ranks/${soloRank.tier}.png` : '/img/ranks/UNRANKED.png'} alt="rank" />
                </Tooltip>
                <div>
                    <p><b>Ranked Solo</b></p>
                    {soloRank ? (
                    <>
                        <p style={{color: "#0e95eb"}}>
                            <b>{soloRank.tier[0] + soloRank.tier.slice(1).toLowerCase()} {soloRank.tier === 'MASTER' || soloRank.tier === 'GRANDMASTER' || soloRank.tier === 'CHALLENGER' ? null : soloRank.rank}</b>
                        </p>
                        <p>{soloRank.leaguePoints} LP</p>
                        <p>{soloRank.wins}W / {soloRank.losses}L</p>
                        <p>{Math.round(soloRank.wins / (soloRank.wins + soloRank.losses) * 100)}% Win Rate</p>
                    </> 
                    ) : <p>Unranked</p>}
                </div>
            </div>
            <div className="Ranks-flex">
                <Tooltip title="Ranked Flex" arrow className="Ranks-img">
                    <img src={flexRank ? `/img/ranks/${flexRank.tier}.png` : '/img/ranks/UNRANKED.png'} alt="rank" />
                </Tooltip>
                <div>
                    <p><b>Flex 5:5 Rank</b></p>
                    {flexRank ? (
                    <>
                        <p style={{color: "#0e95eb"}}>
                            <b>{flexRank.tier[0] + flexRank.tier.slice(1).toLowerCase()} {flexRank.tier === 'MASTER' || flexRank.tier === 'GRANDMASTER' || flexRank.tier === 'CHALLENGER' ? null : flexRank.rank}</b>
                        </p>
                        <p>{flexRank.leaguePoints} LP</p>
                        <p>{flexRank.wins}W / {flexRank.losses}L</p>
                        <p>{Math.round(flexRank.wins / (flexRank.wins + flexRank.losses) * 100)}% Win Rate</p>
                    </> 
                    ) : <p>Unranked</p>}
                </div>
            </div>
        </div>
    );
}

export default Ranks;