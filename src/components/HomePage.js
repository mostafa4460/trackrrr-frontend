import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    TextField, 
    FormControl, 
    Select, 
    MenuItem,
    IconButton,
    InputAdornment
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import './HomePage.css';
import logo from '../assets/img/logo.png';

const HomePage = () => {
    const [search, setSearch] = useState({name: "", server: "na1"});
    const history = useHistory();
    const handleChange = evt => {
        const {name, value} = evt.target
        setSearch(s => ({
            ...s,
            [name]: value
        }));
    };
    const goToSummonerPage = () => {
        return history.push(`/summoners/${search.server}/${search.name}`);
    };

    return (
        <div className="HomePage">
            <img className="HomePage-logo" src={logo} alt="trackrrr-logo" />
            <form className="HomePage-search" onSubmit={goToSummonerPage}>
                <TextField
                    className="HomePage-search-name" 
                    label="Summoner Name" 
                    variant="outlined"
                    name="name"
                    value={search.name}
                    onChange={handleChange}
                    InputLabelProps={{
                        classes: {
                            root: "HomePage-search-label"
                        }
                    }}
                    InputProps={{
                        className: "HomePage-search-input-text",
                        classes: {
                            notchedOutline: "HomePage-search-input"
                        },
                        endAdornment: (
                            <InputAdornment position="end">
                                <FormControl variant="standard">
                                    <Select
                                        name="server"
                                        value={search.server}
                                        onChange={handleChange}
                                        className="HomePage-search-select"
                                    >
                                        <MenuItem value="na1">NA</MenuItem>
                                        <MenuItem value="br1">BR</MenuItem>
                                        <MenuItem value="la1">LAN</MenuItem>
                                        <MenuItem value="la2">LAS</MenuItem>
                                        <MenuItem value="oc1">OCE</MenuItem>
                                        <MenuItem value="kr">KR</MenuItem>
                                        <MenuItem value="jp1">JP</MenuItem>
                                        <MenuItem value="eun1">EUNE</MenuItem>
                                        <MenuItem value="euw1">EUW</MenuItem>
                                        <MenuItem value="tr1">TR</MenuItem>
                                        <MenuItem value="ru">RU</MenuItem>
                                    </Select>
                                </FormControl>
                                <IconButton color="primary" type="submit">
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        )
                    }} 
                />
            </form>
        </div>
    );
};

export default HomePage;