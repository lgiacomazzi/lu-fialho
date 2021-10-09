const YoutubeIframe = ({ url }) => {
    return (
        <iframe src={url} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    );
};

export default YoutubeIframe;