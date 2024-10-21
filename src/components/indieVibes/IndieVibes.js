import "./style.css";

const IndieVibes = () => {
  return (
    <div className="content__youtube">
      <h1 className="title">Indie Vibes</h1>
      <div className="youtube-videos">
        <iframe
          width="1000"
          height="600"
          src="https://www.youtube.com/embed/0GcL8K3gkXE?si=Fzb0eCZ_19q5j-nG"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="youtube-videos__description">
          <p>
            The smell of rustic tins and garage sounds served with indie rock
            sauce
          </p>
        </div>
        <iframe
          width="1000"
          height="600"
          src="https://www.youtube.com/embed/gT6h0kVfCdE?si=RgGel0DweeDPy8sp"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default IndieVibes;
