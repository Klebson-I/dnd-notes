import { Grid } from "@mui/material";
import EditNoteIcon from '@mui/icons-material/EditNote';
import './style.css';


const PageHeader = () => {
    return <Grid item xs={12}>
        <div className="headerContainerPaper">
            <h1 className="headerText">
                DND Note App
            </h1>
            <EditNoteIcon sx={{fontSize: '3rem'}}/>
        </div>
    </Grid>
}

export default PageHeader;