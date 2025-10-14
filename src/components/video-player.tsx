interface VideoPlayerProps {
    link: string;
    className?: string
}

const VideoPlayer = ({ link, className }: VideoPlayerProps) => {
    return (
        <video width="100%" controls autoPlay loop muted className={className}>
            <source src={link} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;
