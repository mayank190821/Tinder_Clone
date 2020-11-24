import React from 'react';
import "./header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
function header() {
    return (
        <div className="header">
            <IconButton>

            <PersonIcon fontsize="large" className="Header_icon" />
            </IconButton>
            <img className="Header_logo" src="https://img1.apk.tools/img/TcHgSH30vCBCtQfyFLWvvPJdpOAJrSp1OtqopwMue3yRiXa7wT5Fs8gUbA3oJylGW991=s300"alt="logo">
            </img>
            <IconButton>

            <ForumIcon className="Header_icon"/>
            </IconButton>
        </div>
    )
}

export default header
