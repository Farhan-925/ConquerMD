// src/components/home/hero/HeroVideo.jsx
export function HeroVideo() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      >
        <source src="https://conquermd.com/images/home/home.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
    </>
  );
}