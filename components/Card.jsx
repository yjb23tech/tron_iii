import album_icon from "../public/images/album_icon.png"
import artist_icon from "../public/images/artist_icon.png"
import genre_icon from "../public/images/genre_icon.png"

const Card = (props) => {
    return (
        <div>
            <img src={`images/${props.album_card_song_cover_art}`} />
            {/* <div>
                <h2>{props.album_card_song_name}</h2>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div> */}
        </div>
    )
}

export default Card; 