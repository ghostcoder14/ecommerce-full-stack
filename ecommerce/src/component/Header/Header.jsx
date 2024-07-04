import { AppBar , Typography , Toolbar , Box} from "@mui/material";
import { styled } from '@mui/system';
import Search from "./Search";
import CoustomButton from "./CoustomButton";

const StyledHeader = styled(AppBar)`
  background-color: #ffffff;
  height: 55px;
  border-radius:  3px 3px 0px 0px ;
  box-shadow: none;
`

const Designbutton = styled(Box)`
  margin-left:125px;
  margin-top: 5px;
`

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`

const Subheading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`

const SubURL = styled('img')({
  width : 10,
  height : 10,
  marginLeft : 4
})




const Header = () => {
  
  const logoURL = 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

     return (
                   <StyledHeader>
             <Toolbar style={{minHeight: 55}}>
              <Component>
                   <img src= {logoURL} alt="logo" style={{
                    width: "160px",
                    marginTop:"5px"
                   }}/>  
                   <Box style={{
                    display:"flex",
                   }}> 
                </Box>
              </Component>
              <Search />
               <Designbutton>
                <CoustomButton/>
               </Designbutton>
             </Toolbar>
          </StyledHeader>
          
         
        
     )
}

export default Header ;
