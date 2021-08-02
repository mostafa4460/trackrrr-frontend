import { Typography } from '@material-ui/core';

const ErrorPage = ({msg}) => (
    <div style={{textAlign: "center"}}>
        <Typography variant="h1" style={{marginBottom: "20px"}}>
            :-(
        </Typography>
        <Typography variant="h3">
            {msg}
        </Typography>
    </div>
);

export default ErrorPage;