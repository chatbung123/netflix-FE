import { Add, PlayArrow, ThumbDownAltOutlined, ThumbsUpDown, ThumbsUpDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React from 'react'
import './listItem.scss'

export default function ListItem() {
    return (
        <div className='listItem'>
            <img src="https://i.picsum.photos/id/3/200/200.jpg?hmac=N5yYUNYl5gOUcaMmTtnNNtx839TN2qaNM4SaXhQl65U" alt="" />

            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow />
                    <Add />
                    <ThumbUpAltOutlined />
                    <ThumbDownAltOutlined />
                </div>

                <div className='itemInfoToTop'>
                    <span>1 Hour 14 Minutes</span>
                    <span className='limit'>16+</span>
                </div>
                <div className='desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quaerat nobis eius vel similique ipsa cum ipsam beatae, quas quasi autem
                </div>
                <div className="genre">
                    Action
                </div>
            </div>
        </div>
    )
}
