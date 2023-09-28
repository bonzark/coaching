import React, { useEffect, useState } from "react";
import { getUserDetails, getAuthToken } from "../utils/auth";
import EventEmitter from "reactjs-eventemitter";
import { PrimaryBtn } from "./PrimaryBtn";
import { Box } from "@mui/material";
import FormModal from "../sections/FormModal";
import BookSession from "./bookSessionModel";

const BookSessionBtn = (props) => {
  const { defaultText, freeSessionText, bookText } = props;
  const userDetails = getUserDetails();
  const [loginOpen, setLoginOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const handleOpen = () => setLoginOpen(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handlePopupClose = () => {
    setLoginOpen(false);
  };

  useEffect(() => {
    EventEmitter.subscribe("loginSuccess", (event) => {
      setIsLoggedIn(true);
    });

    EventEmitter.subscribe("logoutSuccess", (event) => {
      setIsLoggedIn(false);
    });
  }, []);

  useEffect(() => {
    if (getAuthToken() === null || getAuthToken().length === 0) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [getAuthToken()]);

  const handleClose = () => {
    setBookingOpen(false);
  };

  let btnText = defaultText;
  let onClickEvent = () => setBookingOpen(true);
  if (userDetails) {
    if (userDetails.isFreeReadingBooked) {
      btnText = bookText;
    } else {
      btnText = freeSessionText;
    }
  }

  return (
    <>
      {!isLoggedIn ? (
        <>
          <FormModal open={loginOpen} handleClose={handlePopupClose} />
          <Box sx={{ margin: "1rem 0" }}>
            <PrimaryBtn onClick={handleOpen}>
              <>
                <span>DOWNLOAD NOW FOR FREE</span>
              </>
            </PrimaryBtn>
          </Box>
        </>
      ) : (
        <>
          <BookSession
            open={bookingOpen}
            handleClose={handleClose}
            userDetails={userDetails}
          />
          {btnText && (
            <Box sx={{ margin: "1rem 0" }}>
              <PrimaryBtn onClick={onClickEvent} props>
                {btnText}
              </PrimaryBtn>
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default BookSessionBtn;
