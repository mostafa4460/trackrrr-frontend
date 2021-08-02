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
import './SummonerSearch.css';

const SummonerSearch = ({smaller}) => {
    const [search, setSearch] = useState({name: "", server: "na1"});
    const history = useHistory();
    const handleChange = evt => {
        const {name, value} = evt.target
        setSearch(s => ({
            ...s,
            [name]: value
        }));
    };
    const goToSummonerPage = evt => {
        evt.preventDefault();
        return history.push(`/summoners/${search.server}/${search.name}`);
    };

    return (
        <form className="SummonerSearch" onSubmit={goToSummonerPage}>
            <TextField
                className="SummonerSearch-name" 
                label="Summoner Name" 
                variant="outlined"
                name="name"
                required
                size={smaller ? "small" : "medium"}
                value={search.name}
                onChange={handleChange}
                InputLabelProps={{
                    classes: {
                        root: "SummonerSearch-label"
                    }
                }}
                InputProps={{
                    className: "SummonerSearch-input-text",
                    classes: {
                        notchedOutline: "SummonerSearch-input"
                    },
                    endAdornment: (
                        <InputAdornment position="end">
                            <FormControl variant="standard">
                                <Select
                                    name="server"
                                    value={search.server}
                                    onChange={handleChange}
                                    className="SummonerSearch-select"
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
    );
}

export default SummonerSearch;