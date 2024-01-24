import { createRoot } from "react-dom/client"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div>
            <h1>Santity Check</h1>
            <Card 
                album_card_song_cover_art = "track_12_song_art.png"
                album_card_song_name = "Ego Death"
                album_card_album_name = "My Beautiful Dark Twisted Fantasy"
                album_card_artist_name = "Kanye West"
                album_card_genre_name = "Baroque Sophisticated Ignorance"

            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)