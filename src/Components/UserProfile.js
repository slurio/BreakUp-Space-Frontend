import React, {useState} from 'react';
import {connect} from 'react-redux';
import FavoritesContainer from '../Containers/FavoritesContainer';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const status = [
    {
      value: 'single',
      label: 'single',
    },
    {
      value: 'taken',
      label: 'taken',
    },
    {
      value: 'complicated',
      label: 'complicated',
    },
    {
      value: 'serious',
      label: 'serious',
    },
  ];
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }));

const UserProfile = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [relationship, setRelationship] = React.useState(props.user.relationship_status);

    const handleChange = (event) => {
        setRelationship(event.target.value);
    };

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Container>
            <DataContainer>
                <ProfileImage alt="profile_image" src={props.user.profile_image} />
                <ProfileContainer> 
                    <UsernameTitle>{props.user.username}</UsernameTitle>
                    <ProfileButton onClick={handleOpen}>Edit Profile</ProfileButton>
                </ProfileContainer>
            </DataContainer>
            <ProfileModal
                open={open}
                onClose={handleClose}
            >
                <div className={classes.root} noValidate autoComplete="off">
                <div>
                <TextField
                    id="outlined-full-width"
                    label="Name"
                    style={{ margin: 8 }}
                    placeholder={props.user.name}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                />

                <TextField
                    id="outlined-full-width"
                    label="Email"
                    style={{ margin: 8 }}
                    placeholder={props.user.email}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    label="Password"
                    id="outlined-margin-normal"
                    defaultValue='Enter New Password'
                    className={classes.textField}
                    helperText="no caps please"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Password Confirmation"
                    id="outlined-margin-normal"
                    defaultValue='Confirm Password'
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Username"
                    id="outlined-margin-normal"
                    defaultValue={props.user.username}
                    className={classes.textField}
                    helperText="Keep it short and sweet 🍭"
                    margin="normal"
                    variant="outlined"
                />

                    <TextField
                    id="outlined-margin-normal"
                    className={classes.textField}
                    select
                    label="Relationship Status"
                    value={relationship}
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                >
                    {status.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                    ))}
                </TextField>
                
                </div>
                </div>
            </ProfileModal>

            <DataContainer>
                <FavoritesContainer/>
            </DataContainer>
        </Container>
    )
}

const msp = state => {
    return {
        user: state.user
    }
}

export default connect(msp, null)(UserProfile);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EAEAEA;
`

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
`

const UsernameTitle = styled.h3`
    margin: 0px;
`

const ProfileButton = styled.button`
    color: #bfa0e2;
    background-color: white;
    text-transform: uppercase;
    width: 8vw;
    height: 32px;
    letter-spacing: 0.7px;
    border-radius: 16px;
    border: 1px solid #bfa0e2;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    margin-top: 10px;
    align-items: center;
    min-width: 120px;
    padding: 0px 12px 2px;
    &:hover {
        cursor: pointer;
        color: white;
        background-color: #bfa0e2;
    }
`
const ProfileImage = styled.img``

const DataContainer = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
    margin: 20px;
    padding: 20px 15px;
    background-color: white;
    border-radius: 4px;
`

const ProfileModal = styled(Modal)`
    background-color: #EAEAEA;
    width: 60%;
    height: 50%;
`