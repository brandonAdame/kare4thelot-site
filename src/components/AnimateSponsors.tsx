import { Fragment } from "react";
import "../styles/animateSponsors.css";

const firstNames = [
  "Jerel Northern",
  "Nazmokeem",
  "Nia",
  "Niran",
  "Jeakare",
  "Jaiven",
  "Reimage Church, Winterville NC",
];
const secondNames = [
  "Crestlawn Memorial Gardens, Farmville NC",
  "Ella Quinn",
  "Nancy Frazier",
  "Shumena Horton",
  "Roxanne Reynolds",
  "Ciara DaNapoli",
  "Tamesha Morgan",
  "Ruth Futrell",
  "Meloni Adams",
  "Jessie Staton",
  "Amy Staton",
  "Patricia Andrews",
  "Lisa Johnson",
  "Chris Hopkins",
  "Joanna Hopkins",
];
const thirdNames = [
  "Cynthia Brown",
  "Ashley Veno",
  "Laneer Poole",
  "Paola Millian",
  "Christian Morris",
  "Tony Dixon",
  "Betsy Wallace",
  "Linda Harris",
  "Cedric Stevenson",
  "Ann Perry",
  "Amber Wright",
  "Sonya Smith",
  "Daniel Smith",
  "Tamara Atkinson",
  "Adrian Atkinson",
  "Charlene Brown",
  "Agnes Buckman",
  "Mary Byrd",
  "Denise Fox",
  "Amanda Smith",
];

export default function AnimateSponsors() {
  return (
    <div className="flex flex-col gap-5 pb-10">
      {/* Scroll left names */}
      <div className="flex overflow-x-clip">
        <div className="animate-scroll-left flex gap-4 pr-4 [animation-duration:200s] hover:[animation-play-state:paused]">
          {[
            ...new Array(4).fill(0).map((_, index) => (
              <Fragment key={index}>
                {firstNames.map((name, idx) => (
                  <p
                    key={idx}
                    className="whitespace-nowrap text-lg text-white lg:text-3xl"
                  >
                    {name}
                  </p>
                ))}
              </Fragment>
            )),
          ]}
        </div>
      </div>
      {/* Scroll right names */}
      <div className="flex overflow-x-clip">
        <div className="animate-scroll-right flex gap-4 pr-4 [animation-duration:400s] hover:[animation-play-state:paused]">
          {[
            ...new Array(2).fill(0).map((_, index) => (
              <Fragment key={index}>
                {secondNames.map((name, idx) => (
                  <p
                    key={idx}
                    className="whitespace-nowrap text-lg text-white lg:text-3xl"
                  >
                    {name}
                  </p>
                ))}
              </Fragment>
            )),
          ]}
        </div>
      </div>
      {/* Scroll left names */}
      <div className="flex overflow-x-clip">
        <div className="animate-scroll-left flex gap-4 pr-4 [animation-duration:400s] hover:[animation-play-state:paused]">
          {[
            ...new Array(2).fill(0).map((_, index) => (
              <Fragment key={`${index}-third`}>
                {thirdNames.map((name, idx) => (
                  <p
                    key={`${idx}-${name}`}
                    className="whitespace-nowrap text-lg text-white lg:text-3xl"
                  >
                    {name}
                  </p>
                ))}
              </Fragment>
            )),
          ]}
        </div>
      </div>
    </div>
  );
}
