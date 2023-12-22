import { Grid, Paper } from "@mui/material";
import EditNoteIcon from '@mui/icons-material/EditNote';
import './style.css';


const PageHeader = () => {
    return <Grid item xs={12}>
        <Paper className="headerContainerPaper">
            <h1 className="headerText">
                DND Note App
            </h1>
            <EditNoteIcon sx={{fontSize: '3rem'}}/>
        </Paper>
    </Grid>
}

export default PageHeader;