function SocketIOImageGlitch() {
  return (
    <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ">
      {/* Glitch layer 1 - Red tint */}
      <img
        src="/redtint.png"
        alt=""
        className="absolute w-full h-full object-contain animate-glitch-red"
      />

      {/* Glitch layer 2 - Cyan tint */}
      <img
        src="/cyantint.png"
        alt=""
        className="absolute inset-0 w-full h-full object-contain  animate-glitch-cyan"
      />
      {/* Base image */}
      <img
        src="/socketio-removebg.png"
        alt="Socket.IO"
        className="absolute inset-0 w-full h-full opacity-50 object-contain"
      />
    </div>
  );
}

export default SocketIOImageGlitch;
