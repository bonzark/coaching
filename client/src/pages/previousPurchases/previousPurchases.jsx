import { Box } from "@mui/material";
import SessionCard from "../../components/SessionCard";
import PageBanner from "../../sections/PageBanner";

const PreviousPurchases = () => {
  const sessions = [
    {
      title: "This is title 1",
      detail:
        "Lorem ipsum is a dummy text for a dummy content that can be used has a paragraph placeholder.",
      sessionLink: "https://google.com",
    },
    {
      title: "This is title 2",
      detail:
        "Lorem ipsum is a dummy text for a dummy content that can be used has a paragraph placeholder.",
      sessionLink: "https://google.com",
    },
    {
      title: "This is title 3",
      detail:
        "Lorem ipsum is a dummy text for a dummy content that can be used has a paragraph placeholder.",
      sessionLink: "https://google.com",
    },
    {
      title: "This is title 4",
      detail:
        "Lorem ipsum is a dummy text for a dummy content that can be used has a paragraph placeholder.",
      sessionLink: "https://google.com",
    },
    {
      title: "This is title 5",
      detail:
        "Lorem ipsum is a dummy text for a dummy content that can be used has a paragraph placeholder.",
      sessionLink: "https://google.com",
    },
    {
      title: "This is title 6",
      detail:
        "Lorem ipsum is a dummy text for a dummy content that can be used has a paragraph placeholder.",
      sessionLink: "https://google.com",
    },
    {
      title: "This is title 7",
      detail:
        "Lorem ipsum is a dummy text for a dummy content that can be used has a paragraph placeholder.",
      sessionLink: "https://google.com",
    },
    {
      title: "This is title 8",
      detail:
        "Lorem ipsum is a dummy text for a dummy content that can be used has a paragraph placeholder.",
      sessionLink: "https://google.com",
    },
    {
      title: "This is title 9",
      detail:
        "Lorem ipsum is a dummy text for a dummy content that can be used has a paragraph placeholder.",
      sessionLink: "https://google.com",
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#f2effb",
      }}
    >
      <PageBanner imgSrc="./prevPurchase.jpg" heading="Previous Purchases" />
      <Box
        sx={{
          padding: "5rem 15px",
          margin: "0 auto",
          maxWidth: "1366px",
          display: "flex",
          flexWrap: "wrap",
          gap: "35px 15px",
          justifyContent: "center",
        }}
      >
        {sessions.map((session, index) => (
          <Box sx={{ maxWidth: "400px" }}>
            <SessionCard
              key={index}
              title={session.title}
              detail={session.detail}
              sessionLink={session.sessionLink}
              btnText="Click me"
              onClick={() => {
                console.log("Clicked!!");
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PreviousPurchases;
