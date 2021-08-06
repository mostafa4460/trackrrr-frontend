import { Tooltip, Avatar, Typography, Button } from '@material-ui/core';
import moment from 'moment';
import './Profile.css';

const Profile = ({name, summonerProfile, lastUpdated, updateSummoner}) => {
    const {profileIconId, summonerLevel} = summonerProfile;
    return (
        <div className="Profile">
            <div className="Profile-img-container">
                <img
                    className="Profile-img"
                    src={`http://ddragon.leagueoflegends.com/cdn/11.15.1/img/profileicon/${profileIconId}.png`}
                    alt="profile icon" 
                />
                <Tooltip title="Level" arrow>
                    <Avatar className="Profile-level" component="span">
                        {summonerLevel}
                    </Avatar>
                </Tooltip>
            </div>
            <div className="Profile-name-container">
                <Typography variant="h6" className="Profile-name">
                    <b>{name}</b>
                </Typography>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    className="Profile-update"
                    onClick={updateSummoner}
                >
                    Update
                </Button>
                {lastUpdated &&
                <Typography variant="subtitle2" className="Profile-updated-text">
                    <small>Last updated: {moment(lastUpdated).fromNow()}</small>
                </Typography>}
            </div>
        </div>
    );
}

export default Profile;