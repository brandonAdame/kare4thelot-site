import HeroImage from '../../assets/church-hero-img.jpg'

export default function HeroSection() {
    return (
      <>
      <div 
        className="relative w-full h-[calc(100vh-4rem)] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/40" /> */}
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Serving with a purpose
          </h1>
        </div>
      </div>
      </>
    )
}