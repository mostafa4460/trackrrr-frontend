import { useState } from 'react';
import { Tabs, Tab, Typography } from '@material-ui/core';
import Match from './Match';
import './Matches.css';

const TabPanel = props => {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`Matches-${index}`}
        {...other}
      >
        {value === index && children}
      </div>
    );
}

const NoMatchesFound = () => (
    <Typography className="NoMatchesFound" variant="h4">
        No matches found :(
    </Typography>
);

const Matches = ({matches}) => {
    const {solo, flex} = matches;
    const [value, setValue] = useState(0);
    const handleChange = (evt, newVal) => setValue(newVal);
    return (
        <div className="Matches">
            <Tabs
                indicatorColor="secondary"
                textColor="secondary"
                variant="fullWidth"
                value={value}
                onChange={handleChange}
            >
                <Tab label="Solo Ranked" classes={{
                    textColorSecondary: "Matches-nav",
                    selected: "Matches-nav-selected"
                }} />
                <Tab label="Flex Ranked" classes={{
                    textColorSecondary: "Matches-nav",
                    selected: "Matches-nav-selected"
                }} />
            </Tabs>
            <TabPanel value={value} index={0}>
                {solo.length ? solo.map(m => <Match key={m.matchId} match={m} />)
                : <NoMatchesFound />}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {flex.length ? flex.map(m => <Match key={m.matchId} match={m} />)
                : <NoMatchesFound />}
            </TabPanel>
        </div>
    );
}

export default Matches;