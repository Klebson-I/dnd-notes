import { Grid } from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";
import NoteTable from "../../components/NoteTable/NoteTable";

const Main = () => {
    return <Grid container spacing={12}>
        <PageHeader />
        <NoteTable />
    </Grid>
}

export default Main;