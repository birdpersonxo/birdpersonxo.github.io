// components/VimeoEmbed.js
const VimeoEmbed = ({ videoId }) => {
    return (
      <div style={{ position: 'relative', height: "100vh", overflow: 'hidden' }}>
        <iframe
          src={`https://player.vimeo.com/video/${videoId}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0,
          }}
          allow="autoplay; fullscreen;"
          allowFullScreen
        />
      </div>
    );
  };
  
  export default VimeoEmbed;