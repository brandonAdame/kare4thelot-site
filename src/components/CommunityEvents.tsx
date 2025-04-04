import ImagesReveal from "../components/animata/image/images-reveal";
import SlideArrowButton from "../components/animata/button/slide-arrow-button";

const CommunityEvents = () => {
  return (
    <div className="flex flex-col items-center gap-5 pb-10 pt-10">
      <ImagesReveal />
      <SlideArrowButton text="See Upcoming Events" primaryColor="#ed6a5a" />
    </div>
  );
};

export default CommunityEvents;
