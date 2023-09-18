import React from "react";
import SuccessCarousel from "../../sections/SuccessCarousel";
import FAQAccordion from "../../components/FAQAccordion";
import HeroBanner from "../../sections/heroBanner";
import { heroListItems } from "../../utils/constant";
import PageBanner from "../../sections/PageBanner";
import { Box, Container, List, ListItem, Typography } from "@mui/material";

const CoachDetail = () => {
  const accordionData = [
    {
      summary: "Collapsible Group Item #1",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      summary: "Collapsible Group Item #2",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      summary: "Collapsible Group Item #3",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      summary: "Collapsible Group Item #4",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      summary: "Collapsible Group Item #5",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  const btnText = (
    <>
      <span>Book Session</span>
    </>
  );

  return (
    <>
      <PageBanner
        heading={"Coaching with Rita"}
        imgSrc="successStories.jpg"
        listItems={heroListItems}
        buttonText={btnText}
      />
      <Box sx={{ margin: "5rem 0" }}>
        <Box
          sx={{
            display: "flex",
            paddingX: { xs: "1rem", md: "0" },
            mx: "auto",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "10px 0 55px 10px",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <Typography
            varient="h1"
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
                lg: "3.5rem",
              },
              color: "#671d63",
              fontFamily: "'montserrat',sans-serif",
              maxWidth: "592px",
              position: "relative",
              paddingRight: { lg: "70px" },
              marginBottom: { xs: "40px", lg: 0 },
              marginRight: { xs: "10px", lg: "45px" },
              lineHeight: { xs: "35px", sm: "45px", md: "50px", lg: "60px" },
              "&:after": {
                content: { lg: "''" },
                position: "absolute",
                right: 0,
                top: 0,
                width: "4px",
                height: "100%",
                backgroundColor: "#671d63",
              },
            }}
          >
            WHY CHOOSE RITA?
          </Typography>
          <Typography
            varient="p"
            sx={{
              fontSize: { xs: "0.9rem", md: "1.5rem" },
              maxWidth: "605px",
              color: "#444",
            }}
          >
            What sets her apart from other mindset and spiritual coaches? Rita
            possesses an unparalleled talent for tapping into the power of your
            energies and guiding you towards the outcomes you desire. Her
            coaching style is truly distinctive and unmatched.
          </Typography>
        </Box>

        <Container>
          <Typography
            sx={{
              color: "#575757",
              fontSize: { xs: "15px", sm: "23px" },
              lineHeight: { xs: "20px", sm: "28px" },
              px: { xs: "1.2rem", md: "2.2rem", lg: "3.2rem" },
              mb: { xs: "8px", md: "10px", lg: "15px" },
            }}
          >
            <List>
              <ListItem>
                Why choose Rita as your coach? What sets her apart from other
                mindset and spiritual coaches? Rita possesses an unparalleled
                talent for tapping into the power of your energies and guiding
                you towards the outcomes you desire. Her coaching style is truly
                distinctive and unmatched.
              </ListItem>
              <ListItem>
                With a gentle yet assertive approach, Rita skillfully guides you
                through a transformative journey of self-discovery and personal
                growth. She intuitively understands your needs and desires,
                bringing out the absolute best in you.
              </ListItem>
              <ListItem>
                Rita's coaching style goes beyond mere external success; it
                emphasizes creating a harmonious balance between your mind,
                body, and spirit. Through her guidance, you will not only
                achieve your desired outcomes but also experience profound
                fulfillment and inner peace.
              </ListItem>
              <ListItem>
                Rita's gift extends beyond mere fortune-telling; she comprehends
                the deep-rooted desires and intentions that shape each
                individual's journey. By sensing the energy shifts and patterns
                within a person's aura, she can unlock glimpses of their destiny
                and the potential roadblocks they may encounter along the way.
              </ListItem>
              <ListItem>
                But Rita's abilities do not stop there. She has honed her
                expertise in mastering energy alterations, giving her the power
                to influence and guide the energetic forces surrounding an
                individual. Through her understanding and manipulation of these
                energies, Rita empowers individuals to reshape their own
                destinies, manifesting a more positive and fulfilling future.
              </ListItem>
              <ListItem>
                Whether it's breaking free from limiting beliefs, attracting
                abundance, or finding love and happiness, Rita's mastery of
                energy alterations allows her to assist individuals in aligning
                their energies with their desired manifestations. By making
                subtle adjustments to the energetic frequencies surrounding a
                person, she helps them overcome obstacles and create an
                environment conducive to their goals and dreams.
              </ListItem>
              <ListItem>
                Rita's clients find solace and guidance in her exceptional
                abilities. She has helped countless individuals tap into their
                true potential and manifest their deepest desires. With her
                extraordinary gift of reading energies and her mastery of energy
                alterations, Rita offers a unique and transformative experience
                that can guide individuals towards a future filled with purpose,
                abundance, and fulfillment.
              </ListItem>
              <ListItem>
                Rita's remarkable ability to harness the power of your energies
                is truly exceptional. She taps into the core of who you are,
                uncovering hidden talents, strengths, and passions that you
                never knew existed. With her guidance, you will learn to channel
                your energy in alignment with your true purpose, resulting in
                extraordinary results in all areas of your life.
              </ListItem>
              <ListItem>
                Whether you seek personal growth, career advancement, or a
                deeper connection with your inner self, Rita is the coach who
                will lead you towards your desired outcomes. Her distinctive
                coaching style, combined with her extraordinary talent, empowers
                you to overcome limitations, embrace your true potential, and
                create a life that surpasses your wildest dreams.
              </ListItem>
              <ListItem>
                If you are ready to embark on a life-changing journey and unlock
                the power within you, Rita is the guiding light you've been
                searching for. With her unparalleled coaching style and
                remarkable abilities, she helps you tap into your inner
                greatness and manifest the life you truly deserve.
              </ListItem>
              <ListItem>
                With a track record of over 400 satisfied clients in just the
                past three years, it is undeniable that Rita's coaching has had
                a profound impact on their lives. Out of these numerous success
                stories, only a small fraction of five individuals did not
                manifest their specific outcomes. However, even these clients
                experienced a significant transformation, leaving the coaching
                experience happier, more aligned, and with newfound success in
                other areas of their lives.
              </ListItem>
              <ListItem>
                Rita's ability to guide individuals towards their desired
                outcomes is truly remarkable. Her unique coaching approach
                combines deep introspection with practical strategies, ensuring
                that her clients not only achieve their goals but also
                experience a holistic sense of fulfillment and happiness.
              </ListItem>
            </List>
          </Typography>
        </Container>
      </Box>
      <SuccessCarousel />
      <FAQAccordion data={accordionData} />
    </>
  );
};

export default CoachDetail;
