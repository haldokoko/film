import { Box } from "@mui/material";
import { useParams } from 'react-router-dom';

const Subsribed = () => {
    let params = useParams();
    return (
    <Box sx={{ mt:10 }}>Thank You for Subscribing!<br />
    Your Plan Now : {params?.plan}
    </Box>
    );
}

export default Subsribed;