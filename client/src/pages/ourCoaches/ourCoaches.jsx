import React from "react";
import OurCoachesCard from "../../components/OurCoachesCard";
import HeroBanner from "../../sections/heroBanner";

const AllCoaches = () => {
  const desc = [
    {
      name: "Welcome my name is Helen. I am a qualified mindset counsellor and coach with many years of experience helping people to overcome life's obstacles and difficulties. I specialise in anxiety and depression including low self-esteem, feelings of stress, panic attacks, career and relationship difficulties. I am passionate about helping individuals improve their mental health and well-being.",
      key: 1,
    },
    {
      name: "Ethereal beings of exquisite grace. I am known as Brandi, a devoted bearer of various roles, including that of a spiritual mentor, a catalyst for mindset transformation, an intuitive interpreter, and a channeler of a celestial species resonating with the harmonious frequency 'A' from a parallel realm.",
      key: 2,
    },
    {
      name: "My name is Sarah, and I proudly embrace the role of an energy healer, spiritual guide, and mindset coach. My expertise lies in the transformation of your conscious awareness, allowing you to align your vibrations with the very essence of your deepest desires.",
      key: 3,
    },
    {
      name: "My name is Jacqueline and I am a multi-faceted individual, embodying the roles of a model, influencer,  minset coach and intuitive healer. Hailing from Houston, I embrace both the vibrant city life and the tranquility of the countryside.",
      key: 4,
    },
  ];
  return (
    <>
      <HeroBanner
        header="Know more about our coaches"
        listItems={desc}
        imageUrl="./heroBg.jpg"
      />
      <OurCoachesCard />
    </>
  );
};

export default AllCoaches;
