import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons_close">
                <CloseIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons_StarRate">
                <StarRateIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons_favorite">
                <FavoriteIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons_FlashOn">
                <FlashOnIcon fontSize="large" />
            </IconButton>

        </div>
    )
}

export default SwipeButtons
