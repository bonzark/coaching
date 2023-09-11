import { Button } from "@mui/material";
import React from "react";

export const PrimaryBtn = (props) => {
  return (
    <Button
      sx={{
        backgroundColor: "#671d63",
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", sm: "max-content" },
        gap: "5px",
        span: { display: "block", fontSize: "16px" },
        color: "#fff",
        borderRadius: "5px",
        padding: { xs: "10px", md: "25px" },
        fontSize: "12px",
        border: "1px solid transparent",
        lineHeight: "16px",
        ":hover": {
          color: "#671d63 !important",
          border: "1px solid #671d63",
        },
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};
