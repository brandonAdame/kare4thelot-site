import ImagesReveal from "../components/animata/image/images-reveal";
import SlideArrowButton from "../components/animata/button/slide-arrow-button";

const CommunityEvents = () => {
  return (
    <div className="flex flex-col items-center gap-5 pb-10 pt-10">
      <ImagesReveal />
      <p className="w-3/4 text-center text-xl">
        <span className="font-klimaks-bold">
          “And the king will say,
          <br /> ‘I tell you the truth, <br />
        </span>
        <span className="font-monteilga-regular">
          when you did it to one of the least of these <br />
        </span>
        <span className="font-klimaks-bold">
          my brothers and <br /> sisters, <br /> you were doing it do me!'" -
        </span>
      </p>
      <p className="text-bible-verse-signature font-hopeless-romantic-society">
        Matthew 25:40
      </p>
      <SlideArrowButton text="See Upcoming Events" primaryColor="#ed6a5a" />
    </div>
  );
};

export default CommunityEvents;
