import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getUserDetails, setUserDetails } from "../../utils/auth";
import { PopupModal } from "react-calendly";
import { getuserById } from "../../services/user.service";
import { getAllSessions } from "../../services/session.service";
import SessionCard from "../../components/SessionCard";
import PageBanner from "../../sections/PageBanner";

const PreviousPurchases = () => {
  const [sessionLinks, setSessionLinks] = useState({});
  const [popup, setPopup] = useState(false);
  const [popupLink, setPopupLink] = useState("");
  const ids = {};
  const userDetail = getUserDetails();
  const ownedSessions = [
    ...userDetail.bookedSession,
    ...userDetail.purchasedSession,
  ];
  ownedSessions
    .filter((session) => session.status === "booked" && session)
    .forEach((session) => {
      ids[[session._id]] = false;
    });

  useEffect(() => {
    setSessionLinks(ids);
  }, []);
  useEffect(() => {
    if (window.location.pathname === "/our-coaches") {
      setIsCoachPage(true);
      getSessionsByCoachID(coachId)
        .then((res) => {
          purchaseSession(userDetails, res?.data?.sessions);
          bookedSession(userDetails, res?.data?.sessions);
        })
        .catch((err) => console.log(err));
    } else {
      getAllSessions()
        .then((res) => {
          purchaseSession(userDetails, res?.data?.sessions);
          bookedSession(userDetails, res?.data?.sessions);
        })
        .catch((err) => console.log(err));
    }
  }, [open]);

  const bookedSession = (userDetails, data) => {
    const bookedSession = data;
    const sessionsWithLink = {};
    if (userDetails && bookedSession) {
      const data = userDetails?.bookedSession;
      for (let i = 0; i < bookedSession.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (data[j].session === bookedSession[i]._id) {
            bookedSession[i].isBooked = true;
            bookedSession[i].sessionLink = data[j].link;
          }
        }
      }
      bookedSession.forEach((session) => {
        if (session.isBooked) sessionsWithLink[[session._id]] = false;
      });
    }
  };

  const purchaseSession = (userDetails, data) => {
    const purchaseSession = data;
    if (userDetails && purchaseSession) {
      const data = userDetails?.purchasedSession;
      for (let i = 0; i < purchaseSession.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (data[j].session === purchaseSession[i]._id) {
            purchaseSession[i].isPurchased = true;
          }
        }
      }
    }
  };

  const bookHandler = (data) => {
    console.log("data :", data);
    setPopupLink(data?.session?.calendlyLink);
    setPopup(true);
  };

  const popupCloseHandler = async () => {
    setPopup(false);
    if (userDetail) {
      const { data } = await getuserById(userDetail._id);
      setUserDetails(data);
      getAllSessions()
        .then((res) => {
          purchaseSession(userDetails, res?.data?.sessions);
          bookedSession(userDetails, res?.data?.sessions);
        })
        .catch((err) => console.log(err));
    }
  };

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
        {ownedSessions.map(
          (session, index) =>
            (session.status === "booked" || session.status === "purchased") && (
              <Box key={session?._id} sx={{ maxWidth: "400px" }}>
                <SessionCard
                  key={session._id + index}
                  title={session.session.title}
                  detail={session.session.details}
                  sessionLink={
                    sessionLinks[session._id] &&
                    session.status === "booked" &&
                    session.session.calendlyLink
                  }
                  btnText={
                    !sessionLinks[session._id]
                      ? session?.status === "booked"
                        ? "Get Link"
                        : "Book Now"
                      : ""
                  }
                  onClick={() => {
                    if (session.status === "booked")
                      setSessionLinks((prev) => ({
                        ...prev,
                        [session._id]: true,
                      }));
                    else bookHandler(session);
                  }}
                />
              </Box>
            )
        )}
      </Box>
      <PopupModal
        url={popupLink}
        prefill={{ email: userDetail?.email, name: userDetail?.name }}
        onModalClose={popupCloseHandler}
        open={popup}
        rootElement={document.getElementById("root")}
      />
    </Box>
  );
};

export default PreviousPurchases;
