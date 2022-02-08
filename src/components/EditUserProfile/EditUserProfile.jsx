import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

//MUI Stuff
import { InputAdornment, Grid, Box, Button, TextField, ListItemAvatar, Avatar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LaunchIcon from '@mui/icons-material/Launch';

import './EditUserProfile.css'


function EditUserProfile (){

  const params = useParams();
  console.log('params:');
  console.log(params);
  const dispatch = useDispatch();
  const history = useHistory();
  const editProfile = useSelector((store) => store.editProfileReducer)

  useEffect(() => {
    dispatch({
      type: 'SAGA_FETCH_PROFILE_TO_EDIT',
      payload: params.id
    })
  }, [params.id])

  console.log('!!!!!!! editProfile reducer', editProfile);

  const handleUpdateSubmit = (e)=>{
    e.preventDefault();
    dispatch({
      type: 'SAGA_EDIT_PROFILE_INFO',
      payload: {
        id: params.id, 
        email: editProfile.email, 
        first_name: editProfile.first_name,
        last_name: editProfile.last_name,
        photo: editProfile.photo,
        facebook: editProfile.facebook,
        linkedin: editProfile.linkedin,
        twitter: editProfile.twitter,
        youtube: editProfile.youtube,
        instagram: editProfile.instagram,
        portfolio: editProfile.portfolio,
        location_city: editProfile.location_city,
        location_zip: editProfile.location_zip,
        location_state: editProfile.location_state,
        location_state: editProfile.location_state,
        about_me: editProfile.about_me,
        industry_name: editProfile.industry_name
      }
    })
    history.push('/user')
  }
  const handlePhoto = (e) => {
    dispatch({
      type: 'SET_PHOTO',
      payload: e.target.value
    })
  }
  const handleEmail = (e) => {
    dispatch({
      type: 'SET_EMAIL',
      payload: e.target.value
    })
  }
  const handleFirstName = (e) => {
    dispatch({
      type: 'SET_FIRST_NAME',
      payload: e.target.value
    })
  }
  const handleLastName = (e) => {
    dispatch({
      type: 'SET_LAST_NAME',
      payload: e.target.value
    })
  }
  const handleLocationCity = (e) => {
    dispatch({
      type: 'SET_LOCATION_CITY',
      payload: e.target.value
    })
  }
  const handleLocationState = (e) => {
    dispatch({
      type: 'SET_LOCATION_STATE',
      payload: e.target.value
    })
  }
  const handleLocationZip = (e) => {
    dispatch({
      type: 'SET_LOCATION_ZIP',
      payload: e.target.value
    })
  }
  const handleIndustry = (e) => {
    dispatch({
      type: 'SET_INDUSTRY',
      payload: e.target.value
    })
  }
  
  const handleLinkedin = (e) => {
    dispatch({
      type: 'SET_LINKEDIN',
      payload: e.target.value
    })
  }
  const handleFacebook = (e) => {
    dispatch({
      type: 'SET_FACEBOOK',
      payload: e.target.value
    })
  }
  const handleTwitter = (e) => {
    dispatch({
      type: 'SET_TWITTER',
      payload: e.target.value
    })
  }
  const handleYouTube = (e) => {
    dispatch({
      type: 'SET_YOUTUBE',
      payload: e.target.value
    })
  }
  const handleInstagram = (e) => {
    dispatch({
      type: 'SET_INSTAGRAM',
      payload: e.target.value
    })
  }
  const handlePortfolio = (e) => {
    dispatch({
      type: 'SET_PORTFOLIO',
      payload: e.target.value
    })
  }
  const handleAboutMe = (e) => {
    dispatch({
      type: 'SET_ABOUT_ME',
      payload: e.target.value
    })
  }

  return (
    <Grid container maxHeight="88%" sx={{padding: '15px 0px'}}>

      {/* Row 1 */}
      <Grid item xs={3}/>
        
      <Grid item xs={6} mt="10px" align="center" sx={{paddingBottom: '10px'}}>
        <ListItemAvatar>
          <Avatar 
          sx={{ width: 175, height: 175 }}
          src={editProfile.photo} />
        </ListItemAvatar>
      </Grid>

      <Grid item xs={3}/>
      {/*  */}

      {/* Row 2 */}
      <Grid item xs={.5}/>

      <Grid item xs={3} mt="10px">
        <TextField
          label="First Name"
          placeholder="First Name"
          value={editProfile.first_name || ''}
          onChange={handleFirstName}
          sx={{
            backgroundColor: 'white'
          }}
        />
      </Grid>

      <Grid item xs={.5}/>
        
      <Grid item xs={4} mt="10px">
        <TextField
          label="Last Name"
          placeholder="Last Name"
          value={editProfile.last_name || ''}
          onChange={handleLastName}
          sx={{
            backgroundColor: 'white'
          }}
        />
      </Grid>
      <Grid item xs={.5}/>
      <Grid item xs={3} sx={{padding: '15px 0px'}}>
        <Button
          variant="contained"
          onClick={handleUpdateSubmit}
          sx={{
            color: 'white'
          }}
        >
          Update
        </Button>
      </Grid>
      <Grid item xs={.5}/>

      {/* Row 3 */}
      <Grid item xs={.5}/>
      <Grid item xs={4} mt="10px" size="small">
        <TextField
          label="Industry"
          placeholder="Industry"
          value={editProfile.industry_name || ''}
          onChange={handleIndustry}
          sx={{
            backgroundColor: 'white'
          }}
        />
      </Grid>

      <Grid item xs={.5}/>

      <Grid item xs={6.5} mt="10px" size="small">
        <TextField
          fullWidth
          label="Email"
          placeholder="Email"
          value={editProfile.email || ''}
          onChange={handleEmail}
          sx={{
            backgroundColor: 'white'
          }}
        />
      </Grid>
      <Grid item xs={.5}/>

      {/* Row 4 */}
      <Grid item xs={.5}/>
      
      <Grid item xs={4.5} mt="10px" size="small">
        <TextField
          label="City"
          placeholder="City"
          value={editProfile.location_city || ''}
          onChange={handleLocationCity}
          sx={{
            backgroundColor: 'white'
          }}
        />
      </Grid>

      <Grid item xs={.5}/>

      <Grid item xs={3} mt="10px">
        <TextField
          label="State"
          placeholder="State"
          value={editProfile.location_state || ''}
          onChange={handleLocationState}
          sx={{
            backgroundColor: 'white'
          }}
        />
      </Grid>

      <Grid item xs={.5}/>
      <Grid item xs={2.5} mt="10px" size="small">
        <TextField
          py="5px"
          label="Zip"
          placeholder="Zip"
          value={editProfile.location_zip || ''}
          onChange={handleLocationZip}
          sx={{
            backgroundColor: 'white'
          }}
        />
      </Grid>
      
      <Grid item xs={.5}/>
      {/*  */}

      {/* Row 5 */}
      <Grid item xs={.5} mt="10px" size="small"/>

        <Grid item xs={5.25} mt="10px" size="small">
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LaunchIcon />
                </InputAdornment>
              ),
            }}
            label="Portfolio"
            placeholder="Portfolio"
            value={editProfile.portfolio || ''}
            onChange={handlePortfolio}
            sx={{
              backgroundColor: 'white'
            }}
          />
        </Grid>

      <Grid item xs={.5} mt="10px" size="small"/>

      <Grid item xs={5.25} mt="10px" size="small">
        <TextField
          label="LinkedIn"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkedInIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Linkedin"
          value={editProfile.linkedin || ''}
          onChange={handleLinkedin}
          sx={{
            backgroundColor: 'white'
          }}
        />
      </Grid>

      <Grid item xs={.5} mt="10px" size="small"/>
      {/*  */}

      {/* Row 6 */}
      <Grid item xs={.5} mt="10px" size="small"/>
      
      <Grid item xs={5.25} mt="10px" size="small">
        <TextField
          label="Twitter"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TwitterIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Twitter"
          value={editProfile.twitter || ''}
          onChange={handleTwitter}
          sx={{
            backgroundColor: 'white'
          }}
        />
      </Grid>

      <Grid item xs={.5} mt="10px" size="small"/>

      <Grid item xs={5.25} mt="10px" size="small">
        <TextField
          label="YouTube"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <YouTubeIcon />
              </InputAdornment>
            ),
          }}
          placeholder="YouTube"
          value={editProfile.youtube || ''}
          onChange={handleYouTube}
          sx={{
            backgroundColor: 'white'
          }}
        />
      </Grid>

      <Grid item xs={.5} mt="10px" size="small"/>
      {/*  */}

      {/* Row 7 */}
      <Grid item xs={.5} mt="10px" size="small"/>
      
      <Grid item xs={5.25} mt="10px" size="small">
        <TextField
          label="Facebook"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FacebookIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Facebook"
          value={editProfile.facebook || ''}
          onChange={handleFacebook}
          sx={{
            backgroundColor: 'white'
          }}
        />
      </Grid>

      <Grid item xs={.5} mt="10px" size="small"/>

      <Grid item xs={5.25} mt="10px" size="small">
        <TextField
          label="Instagram"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <InstagramIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Instagram"
          value={editProfile.instagram || ''}
          onChange={handleInstagram}
          sx={{
            backgroundColor: 'white'
          }}
        />
      </Grid>

      <Grid item xs={.5} mt="10px" size="small"/>
      {/*  */}

      {/* Row 7 */}
      <Grid item xs={.5} mt="10px" size="small"/>

      <Grid item xs={11} mt="10px" size="small">
        <TextField
          fullWidth
          multiline
          label="About Me"
          value={editProfile.about_me || ''} 
          placeholder="About me"
          onChange={handleAboutMe}
          sx={{
            backgroundColor: 'white'
          }}
        />
      </Grid>

      <Grid item xs={.5} mt="10px" size="small"/>
      {/*  */}
          
      {/* Row 8 */}
      <Grid item xs={.5} mt="10px" size="small"/>
      <Grid item xs={7} mt="10px" size="small">
        <TextField
          label="img url"
          placeholder="Photo-url"
          value={editProfile.photo || ''}
          onChange={handlePhoto}
          sx={{
            backgroundColor: 'white'
          }}
        />
      </Grid>
      <Grid item xs={.5} mt="10px" size="small"/>
      <Grid item xs={3} sx={{padding: '15px 0px'}}>
        <Button
          variant="contained"
          onClick={() => history.push("/user")}
          sx={{
            color: 'white'
          }}
        >
          Cancel
        </Button>
      </Grid>

  </Grid>
  );
}

export default EditUserProfile;