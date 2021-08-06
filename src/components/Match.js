import { useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Avatar, Divider } from '@material-ui/core';
import moment from 'moment';
import './Match.css';

const MatchItems = ({ids}) => {
    return ids.map((id, i) => (
        id ? 
        <img
            key={uuid()} 
            alt={`item${i + 1}`} 
            src={`http://ddragon.leagueoflegends.com/cdn/11.15.1/img/item/${id}.png`}
            className="Match-item" /> 
        : <div key={uuid()} className="Match-noitem"></div>
    ));
};

const MatchParticipants = ({players}) => {
    const {region} = useParams();
    return players.map(({championName, summonerName}) => (
        <a 
            href={`/summoners/${region}/${summonerName}`} 
            className="Match-participants-player" 
            key={uuid()}
        >
            <img
                alt="champ" 
                src={`http://ddragon.leagueoflegends.com/cdn/11.15.1/img/champion/${championName}.png`}
            />
            <p>{summonerName}</p>
        </a>
    ));
}

const Match = ({match}) => {
    const {name} = useParams();
    const summonerStats = match.participants.find(s => s.summonerName.toLowerCase() === name.toLowerCase());
    const daysAgo = moment(match.gameCreation).fromNow();
    const duration = moment.duration(match.gameDuration);
    const first3Items = summonerStats.items.slice(0, 3);
    const last3Items = summonerStats.items.slice(3, 6);
    const blueTeam = match.participants.filter(p => p.team === 100);
    const redTeam = match.participants.filter(p => p.team === 200);

    return (
        <div className={`Match ${summonerStats.win ? 'Victory' : 'Defeat'}`}>
            <div className="Match-overview">
                <small style={{marginBottom: "5px"}}>{daysAgo}</small>
                <Divider variant="middle" />
                <small 
                    style={{marginTop: "5px"}} 
                    className={`Match-overview-win ${summonerStats.win ? 'Victory' : 'Defeat'}`}
                >
                    <b>{summonerStats.win ? 'Victory' : 'Defeat'}</b>
                </small>
                <small>{duration.minutes()}m {duration.seconds()}s</small>
            </div>
            <div className="Match-champ">
                <Avatar 
                    alt="champ" 
                    src={`http://ddragon.leagueoflegends.com/cdn/11.15.1/img/champion/${summonerStats.championName}.png`}
                    className="Match-champ-img" 
                />
                <div className="Match-champ-spells">
                    <img 
                        alt="sum1" 
                        src={`http://ddragon.leagueoflegends.com/cdn/11.15.1/img/spell/${summonerStats.spell1}`}
                        className="Match-champ-spell" 
                    />
                    <img 
                        alt="sum2" 
                        src={`http://ddragon.leagueoflegends.com/cdn/11.15.1/img/spell/${summonerStats.spell2}`}
                        className="Match-champ-spell" 
                    />
                    <div>
                        <img 
                            alt="primary rune" 
                            src={`/img/${summonerStats.primaryRune}`}
                            className="Match-champ-rune" 
                        />
                        <img 
                            alt="secondary rune" 
                            src={`/img/${summonerStats.secondaryRune}`}
                            className="Match-champ-rune" 
                        />
                    </div>
                    <p>{summonerStats.championName}</p>
                </div>
            </div>
            <div className="Match-score">
                <small><b>{summonerStats.kda}</b></small>
                <small>Level {summonerStats.champLevel}</small>
                <small>{summonerStats.cs} CS</small>
            </div>
            <div className="Match-items">
                <MatchItems ids={first3Items} />
                <img 
                    alt="item7"
                    src={`http://ddragon.leagueoflegends.com/cdn/11.15.1/img/item/${summonerStats.items[6]}.png`}
                    className="Match-item" />
                <div>
                    <MatchItems ids={last3Items} />    
                </div>
            </div>
            <div className="Match-participants">
                <div>
                    <MatchParticipants players={blueTeam} />
                </div>
                <div>
                    <MatchParticipants players={redTeam} />
                </div>
            </div>
        </div>
    );
}

export default Match;