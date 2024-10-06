// components/VimeoEmbed.js
const VimeoEmbed = ({ videoId }) => {
    return (
      <div className="showreel-wrapper">
        <iframe className="showreel-iframe"
          src={`https://player.vimeo.com/video/${videoId}`}
          allow="autoplay;"
          allowFullScreen
        />
      </div>
    );
  };
  
  export default VimeoEmbed;