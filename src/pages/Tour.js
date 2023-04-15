import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import Paper  from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "../components/Modal";

const Tour = () => <Container sx={{width:900}}>
    <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
    </Typography>
    <Box marginTop={3} marginBottom={10} sx={{display:"flex"}}>
        <img 
        src="https://tourscanner.com/blog/wp-content/uploads/2020/07/Things-to-do-in-Las-Vegas-1.jpg" 
        alt="Las Vegas" 
        height={325} 
    />
    <ImageCollage />
    </Box>
    <Box>
    <Typography variant="h6" component="h4" marginTop={3}>
        About this ticket
    </Typography>
    <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate lacus velit, non lacinia erat congue nec. Integer tristique sollicitudin justo, sit amet commodo mi tempus a. Nam id sapien tincidunt, scelerisque dui sed, tempus quam. Pellentesque non porttitor dolor.
    </Typography>
    </Box>
    <Box>
    <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
        Frequently Asked Questions
    </Typography>
    <CustomizedAccordions />
    </Box>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
            <BasicModal />
        </BottomNavigation>
      </Paper>
  </Container>  

export default Tour;