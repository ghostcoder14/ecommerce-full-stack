import {Dialog , Box , TextField , Typography , styled , Button} from '@mui/material';
import React from 'react'
import { useState , useContext} from 'react';
import { auhtenticteSignUp } from '../../Service/api';
import { DataContext } from '../../Context/DataProvider';


const Component =  styled(Box)`
    height: 70vh;
    width: 80vh;

`
const Image = styled(Box)`
background: #2874f0 url( https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
  height: 87%;
 width: 30%;
 padding: 45px 35px 35px 35px;
`
const Text = styled(Typography)`
 font-size: 30px;
 font-weight: 550;
 color: #fff;
 margin-top: 10px;
`

const Textin = styled(Typography)`
   display: block;
   margin-block-start: 1em;
   margin-block-end: 1em;
   margin-inline-start: 0px;
   margin-inline-end: 0px;
   unicode-bidi: isolate;
   color: #BED1DC;
`

const Wrapper = styled(Box)`
 display: flex;
 flex-direction: column;
 flex: 1;
 padding: 25px 35px;
 & > div {
   margin-top: 20px;
 }
`

const Loginbutton = styled(Button)`
  text-transform: none;
  background-color: #fb641b;
  color: #FFFFFF;
  border-radius: 2px;
  &:hover {
   color: #2874f0;
  }
`
const Otpbutton = styled(Button)`
  text-transform: none;
  background-color: #fff;
  color: #2874f0;
  border-radius: 2px;
  box-shadow: 0px 2px 4px 0 rgb(0 0 0/20%) ;
  &:hover {
   color: #2874f0;
  }
`
const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const accountInitialviews = {
  Login: {
    view : 'Login',
    heading : 'Login', 
    subheading : 'Get access to your Orders, Wishlist and Recommendations',
  },
  signup: {
    view : 'Signup' ,
    heading: 'Looks like you are here', 
    subheading : 'SignUp to your mobile no to get registered'  
  }
}
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;



const Login = ({open , setOpen}) => {

  const signupinitial = {
  firstname : '',
  lastname : '',
  username : '',
  email : '',
  password : '',
  phone : ''
}

const [account , toggleaccount] = useState(accountInitialviews.Login)
 const [signup , setsignup] = useState(signupinitial)

 const { setAccount} = useContext(DataContext);


const handleClose = () => {
  setOpen(false);
  toggleaccount(accountInitialviews.Login)
} 


const  togglesignup = () => {
toggleaccount(accountInitialviews.signup)
}

const onInputChange = (e) => {
setsignup({...signup , [e.target.name] : e.target.value})
console.log(signup);
}

const signupUser = async() => {
   let response = await auhtenticteSignUp(signup)
   if(!response){return;}
   handleClose();
   setAccount(signup.firstname);
  
}

return (
   
     <Dialog open = {open} onClose={handleClose}>
       <Component>
        <Box style={{display : 'flex' , height:'100%' , width:'80%'}}>
          <Image>
            <Text>{account.heading}</Text>
            <Textin>{account.subheading}</Textin>
          </Image>    

          {
           account.view === 'Login' ?
              <Wrapper >
                  <TextField id="standard-basic" label="Enter email/Mobile number" variant="standard" />
                  <br />
                  <TextField id="standard-basic" label="Password" variant="standard" />
                  <br /><br />
                  < Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</ Typography>
                  <br />
                  <Loginbutton>Login</Loginbutton>
                  <br />
                  < Typography style={{marginLeft:'80px' }}>OR</ Typography>
                  <br />
                  <RequestOTP>Request OTP</RequestOTP>
                  <CreateAccount onClick={() => togglesignup()}>New to Flipkart? Create an account</CreateAccount>
              </Wrapper >
              :
              <Wrapper >
                  <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                  <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                  <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                  <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                  <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                  <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone'  />
                  <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
          </Wrapper >
              }
        </Box>
       </Component>
    </Dialog>
  )
}

export default Login