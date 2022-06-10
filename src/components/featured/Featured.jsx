import { InfoOutlined, Pause, PauseCircleFilled, PlayArrow } from '@material-ui/icons'
import React from 'react'
import "./featured.scss"

export default function featured({ type }) {
    return (
        <div className='featured'>
            {type && (
                <div className='category'>
                    <span>{type === "movies" ? "Movies" : "TV Series"}</span>
                    <select name='genre' id='genre'>
                        <option value="history">History</option>
                        <option value="documentary">Documentary</option>
                        <option value="comedy">Comedy</option>
                        <option value="romatic">Romantic</option>
                        <option value="drama">Drama</option>
                        <option value="horror">Horror</option>
                        <option value="western">Western</option>
                        <option value="hehe">Hehe</option>
                    </select>
                </div>
            )}
            <img src="https://i.ytimg.com/vi/wPOKNuV9BT0/maxresdefault.jpg" />
            <div className='info'>
                <img src="https://phantom-marca.unidadeditorial.es/2a815b0a6f676d55d7403f7285db1b4e/resize/828/f/webp/assets/multimedia/imagenes/2022/02/11/16445345407827.jpg" alt="" />
                <span className='desc'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quos. Fugit officiis rem alias vero magni? Quaerat quibusdam vel dolorum? Repellat ducimus magnam sit pariatur asperiores suscipit reiciendis ab fugiat.
                </span>
                <div className='buttons'>
                    <button className='play'>
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className='more'>
                        <InfoOutlined />
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

