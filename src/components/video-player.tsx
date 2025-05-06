interface VideoPlayerProps {
    link: string;
}

const VideoPlayer = ({ link }: VideoPlayerProps) => {
    return (
        <video width="100%" controls autoPlay loop muted>
            <source src={link} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;
