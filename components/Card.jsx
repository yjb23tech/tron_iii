import album_icon from "../public/images/album_icon.png"
import artist_icon from "../public/images/artist_icon.png"
import genre_icon from "../public/images/genre_icon.png"

const Card = (props) => {
    return (
        <div className="album-card">
            <img src={`images/${props.album_card_song_cover_art}`} />
            <div className="album-card-contents util-box-border-blue">
                <h2>{props.album_card_song_name}</h2>
                <div className="info-group util-box-border-red">
                    <img src={album_icon} />
                    <p>{props.album_card_album_name}</p>
                </div>
                <div className="info-group util-box-border-red">
                    <img src={artist_icon} />
                    <p>{props.album_card_artist_name}</p>
                </div>
                <div className="info-group util-box-border-red">
                    <img src={genre_icon} />
                    <p>{props.album_card_genre_name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card; 