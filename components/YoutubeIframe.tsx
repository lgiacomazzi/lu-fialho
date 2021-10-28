import Icon from "./Icon";

const YoutubeIframe = ({ url }) => {
    return (
        <>
            <h4>Assista no Youtube:</h4>
            <iframe style={{
                width: "50%",
                height: "25vw",
                borderRadius: "5px",
                background: "#aaaaaa"
            }}
                src={url}
                frameBorder="0"></iframe>
        </>
    );
};

export default YoutubeIframe;