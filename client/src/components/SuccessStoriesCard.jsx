import React, { Fragment } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const SuccessStories = ({
  id,
  title,
  content,
  imgSrc,
  reverse,
  descriptionArr,
  wholeContent,
  isDetailPage,
}) => {
  return (
    <Box sx={{ paddingTop: 6, position: "relative" }}>
      <Box
        component={"div"}
        sx={{ mx: { xs: "50px", lg: "225px" } }}
        key={title}
        className="story"
      >
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: {
              xs: "column",
              md: isDetailPage ? "column" : !reverse ? "row" : "row-reverse",
            },
            justifyContent: "space-between",
            backgroundColor: "white",
          }}
        >
          {!descriptionArr ? (
            <Typography
              variant="h1"
              sx={{
                position: "absolute",
                top: { xs: "-30px", lg: "-48px" },
                right: !reverse ? "0.9rem" : null,
                left: reverse ? "0.9rem" : null,
                fontSize: { xs: "35px", md: "120px" },
                fontWeight: "bold",
                color: "#671d63",
                lineHeight: { xs: "35px", md: "120px" },
                backgroundColor: "#f8e3c4",
                borderRadius: "50%",
                width: { xs: "20px", md: "70px" },
                height: { xs: "20px", md: "70px" },
                padding: "10px",
                textAlign: "center",
              }}
            >
              ”
            </Typography>
          ) : null}
          <Box
            sx={{
              width: { md: "35%", xs: "100%" },
              height: { md: "auto", sm: "550px", xs: "350px" },
              margin: {
                xs: isDetailPage ? "0 auto" : "2px auto",
                md: isDetailPage ? "10px auto" : 0,
              },
              objectFit: { xs: "contain", md: "cover" },
            }}
            className="coachesImg"
          >
            <img
              src={imgSrc}
              alt="story image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                md: !isDetailPage ? "60%" : "100%",
                lg: !isDetailPage ? "63%" : "100%",
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", sm: "28px" },
                color: !isDetailPage ? "#414141" : "#671D63",
                lineHeight: { xs: "22px", sm: "30px" },
                textTransform: "capitalize",
                fontFamily: "'Abril FatFace', sans-serif",
                px: { xs: "1rem", md: "2rem", lg: "3rem" },
                my: { xs: "8px", md: "10px", lg: "15px" },
              }}
            >
              {title}
            </Typography>
            {wholeContent
              ? descriptionArr?.map((para, index) => (
                  <Typography
                    key={index}
                    variant="h6"
                    sx={{
                      color: "#575757",
                      fontSize: { xs: "15px", sm: "20px" },
                      lineHeight: { xs: "20px", sm: "25px" },
                      px: { xs: "1.2rem", md: "2.2rem", lg: "3.2rem" },
                      mb: { xs: "8px", md: "10px", lg: "15px" },
                    }}
                  >
                    {para}
                  </Typography>
                ))
              : descriptionArr?.slice(0, 3).map((para) => (
                  <Fragment key={para}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#575757",
                        fontSize: { xs: "15px", sm: "20px" },
                        lineHeight: { xs: "20px", sm: "25px" },
                        px: { xs: "1.2rem", md: "2.2rem", lg: "3.2rem" },
                        mb: { xs: "8px", md: "10px", lg: "15px" },
                      }}
                    >
                      {para}
                    </Typography>
                  </Fragment>
                ))}

            {descriptionArr ? (
              !wholeContent ? (
                <Box
                  sx={{
                    margin: "0 auto",
                    paddingY: "10px",
                  }}
                >
                  <Link
                    to={`/ourCoachesDetail/${id}`}
                    state={{ name: id }}
                    style={{
                      color: "#671D63",
                      textDecoration: "none",
                      border: "1px solid #671D63",
                      padding: "3px 12px",
                    }}
                  >
                    Read More...
                  </Link>
                </Box>
              ) : null
            ) : null}
            {content && (
              <Typography
                variant="h6"
                sx={{
                  color: "#575757",
                  fontSize: { xs: "15px", sm: "23px" },
                  lineHeight: { xs: "20px", sm: "28px" },
                  px: { xs: "1.2rem", md: "2.2rem", lg: "3.2rem" },
                  mb: { xs: "8px", md: "10px", lg: "15px" },
                }}
              >
                {content}
              </Typography>
            )}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default SuccessStories;
