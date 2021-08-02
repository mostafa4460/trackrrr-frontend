import { CircularProgress } from '@material-ui/core';

const Spinner = () => (
    <div style={{width: "50%", margin: "10% auto"}}>
        <CircularProgress
            color="secondary"
            size="30rem"
            thickness={1.5} />
    </div>
);

export default Spinner;