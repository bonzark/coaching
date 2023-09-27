import React, { useState } from "react";
import { getUserDetails } from "../utils/auth";
import { PrimaryBtn } from "./PrimaryBtn";
import { Box } from "@mui/material";
import FormModal from "../sections/FormModal";
import BookSession from "./bookSessionModel";
const BookSessionBtn = (props) => {
  const { defaultText, freeSessionText, bookText } = props;
  const userDetails = getUserDetails();
  const [loginOpen, setLoginOpen] = useState(false);
  const handleLoginPopupOpen = () => setLoginOpen(true);
  const handleClose = () => {
    setLoginOpen(false);
  };
  let btnText = defaultText;
  let onClickEvent = handleLoginPopupOpen;
  if (userDetails) {
    if (userDetails.isFreeReadingBooked) {
      btnText = bookText;
    } else {
      btnText = freeSessionText;
    }
  }

  return (
    <>
      {/* <FormModal open={loginOpen} handleClose={handleClose} /> */}
      <BookSession
        open={loginOpen}
        handleClose={handleClose}
        userDetails={userDetails}
      />
      <Box sx={{ margin: "1rem 0" }}>
        <PrimaryBtn onClick={onClickEvent} props>
          {btnText}
        </PrimaryBtn>
      </Box>
    </>
  );
};

export default BookSessionBtn;
