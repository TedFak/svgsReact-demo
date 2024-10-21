import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Artist from "../components/artist/Artist";
import { artistList } from "../helpers/artistList";

const Artists = () => {
  return (
    <>
      <Navbar />
      <main className="section">
        <h1 className="title">Artists</h1>
        <div className="artists-container">
          <ul className="artist-list">
            {artistList.map((artist, index) => {
              return (
                <Artist
                  index={index}
                  artistName={artist.artistName}
                  img={artist.img}
                />
              );
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Artists;
