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
  const [myOwnSessions, setMyOwnSessions] = useState([]);
  const userDetail = getUserDetails();

  useEffect(() => {
    if (userDetail) {
      if (window.location.pathname === "/our-coaches") {
        setIsCoachPage(true);
        getSessionsByCoachID(coachId)
          .then((res) => {
            purchaseSession(userDetail, res?.data?.sessions);
            // bookedSession(userDetail, res?.data?.sessions);
          })
          .catch((err) => console.log(err));
      } else {
        getAllSessions()
          .then((res) => {
            purchaseSession(userDetail, res?.data?.sessions);
            // bookedSession(userDetail, res?.data?.sessions);
          })
          .catch((err) => console.log(err));
      }
    }
  }, []);

  // const bookedSession = (userDetails, data) => {
  //   const bookedSession = data;
  //   const sessionsWithLink = {};
  //   if (userDetails && bookedSession) {
  //     const data = userDetails?.bookedSession;
  //     for (let i = 0; i < bookedSession.length; i++) {
  //       for (let j = 0; j < data.length; j++) {
  //         if (data[j]?.session?._id === bookedSession[i]?._id) {
  //           bookedSession[i].isBooked = true;
  //           bookedSession[i].sessionLink = data[j].link;
  //         }
  //       }
  //     }
  //     if (bookedSession && bookedSession.length > 0) {
  //       bookedSession.forEach((session) => {
  //         if (session.isBooked) sessionsWithLink[[session._id]] = false;
  //       });
  //     }
  //     setMyOwnSessions(bookedSession);
  //   }
  // };

  const purchaseSession = (userDetails, data) => {
    const apiSessionList = data;
    if (userDetails && apiSessionList) {
      const data = userDetails?.purchasedSession;
      let count = 1;
      for (let i = 0; i < apiSessionList.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (data[j].session._id === apiSessionList[i]._id) {
            apiSessionList[i].isPurchased = true;
            if (data[j].session.sessionType !== "freeReading") {
              apiSessionList[i].count = count++;
            }
            apiSessionList[i].bookedSessionId = data[j]._id;
          }
        }
      }
      setMyOwnSessions(
        apiSessionList.filter((i) => i.sessionType !== "freeReading")
      );
    }
  };

  const bookHandler = (data) => {
    setPopupLink(data?.calendlyLink);
    setPopup(true);
  };

  const popupCloseHandler = async () => {
    setPopup(false);
    if (userDetail) {
      const { data } = await getuserById(userDetail._id);
      setUserDetails(data);
      getAllSessions()
        .then((res) => {
          purchaseSession(userDetail, res?.data?.sessions);
          // bookedSession(userDetail, res?.data?.sessions);
          window.location.reload();
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
        {myOwnSessions &&
          myOwnSessions.length > 0 &&
          myOwnSessions.map(
            (session, index) =>
              (session.isBooked === true || session.isPurchased === true) && (
                <Box key={session?._id} sx={{ maxWidth: "400px" }}>
                  <SessionCard
                    key={session?._id + index}
                    title={session?.title}
                    detail={session?.details}
                    quntity={session?.count}
                    sessionLink={
                      sessionLinks[session?._id] && session?.sessionLink
                    }
                    btnText={
                      !sessionLinks[session._id]
                        ? session.isBooked
                          ? "Get Link"
                          : session.isPurchased
                          ? "Book Now"
                          : "Purchase"
                        : ""
                    }
                    onClick={
                      session?.isBooked
                        ? () => {
                            setSessionLinks((prev) => ({
                              ...prev,
                              [session._id]: true,
                            }));
                          }
                        : () => session?.isPurchased && bookHandler(session)
                    }
                  />
                </Box>
              )
          )}
      </Box>
      {popupLink && (
        <PopupModal
          url={popupLink}
          prefill={{ email: userDetail?.email, name: userDetail?.name }}
          onModalClose={popupCloseHandler}
          open={popup}
          rootElement={document.getElementById("root")}
        />
      )}
    </Box>
  );
};

export default PreviousPurchases;
