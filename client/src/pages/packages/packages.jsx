import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import PageBanner from "../../sections/PageBanner";
import CheckIcon from "@mui/icons-material/Check";
import { packagesData, productDescriptionData } from "../../utils/constant";
import { useState } from "react";
import { PrimaryBtn } from "../../components/PrimaryBtn";

const Packages = () => {
  const [value, setValue] = useState("rita");
  const [currentCoach, setCurrentCoach] = useState("rita");
  const [pack, setPack] = useState(packagesData[0]);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
  const handleSelectChange = (event) => {
    setCurrentCoach(event.target.value);
  };

  return (
    <>
      <PageBanner heading="Our Packages" imgSrc="./plan.jpg" />
      <Box
        sx={{ padding: { xs: "20px" }, maxWidth: "1100px", margin: "0 auto" }}
      >
        <Box sx={{ padding: "20px 0" }}>
          <Typography
            paragraph
            sx={{
              position: "relative",
              fontSize: { xs: "0.9rem", sm: "1.25rem", md: "1.75rem" },
              color: "#671D63",
              padding: "12px 0",
              fontWeight: "900",
              borderBottom: "4px solid goldenrod",
              width: "max-width",
              textAlign: { xs: "left", sm: "justify" },
              zIndex: "-1",
            }}
          >
            {productDescriptionData?.title}
          </Typography>
          {productDescriptionData?.data?.map((passage, index) => (
            <Box key={index}>
              {passage?.type === "para" && (
                <Typography
                  paragraph
                  sx={{
                    fontSize: "1rem",
                    textAlign: { xs: "left", sm: "justify" },
                    fontWeight: "100",
                    marginBottom: "16px",
                  }}
                >
                  {passage?.content}
                </Typography>
              )}
              {passage?.type === "bullet" && (
                <ul>
                  {passage?.content?.map((bullet, index) => (
                    <li key={index}>
                      <Typography
                        sx={{
                          fontSize: "1rem",
                          fontWeight: "100",
                        }}
                      >
                        {bullet}
                      </Typography>
                    </li>
                  ))}
                </ul>
              )}
            </Box>
          ))}
        </Box>
      </Box>
      <Typography
        variant="h4"
        sx={{
          maxWidth: "1100px",
          margin: "1rem auto 2rem",
          padding: "20px",
          paddingBottom: "10px",
          color: "#671d63",
          borderBottom: "4px solid goldenrod",
        }}
      >
        Pick a plan
      </Typography>
      <Box
        sx={{
          maxWidth: "1100px",
          margin: "50px auto",
          display: "flex",
        }}
      >
        <FormControl
          sx={{
            minWidth: { xs: "100%", sm: "240px" },
            borderColor: "#671d61",
            color: "#671d63",
            marginTop: { xs: "16px", sm: 0 },
            marginLeft: "auto",
          }}
          size="medium"
        >
          <InputLabel id="demo-select-large-label">
            Choose Your Coach
          </InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={currentCoach}
            onChange={handleSelectChange}
            input={<OutlinedInput label="Choose Your Coach" />}
            sx={{ mb: { xs: "25px", sm: 0 } }}
          >
            {packagesData?.map((plan, index) => {
              return (
                <MenuItem
                  key={index}
                  value={plan?.coach}
                  sx={{
                    backgroundColor: "#fff",
                    color: "#671d61",
                    ":hover": {
                      backgroundColor: "#671d61",
                      color: "#fff",
                    },
                  }}
                  onClick={() => {
                    setCurrentCoach(plan?.coach);
                    setPack(plan);
                  }}
                >
                  {plan?.coach}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      {pack && (
        <Box
          sx={{
            maxWidth: "1100px",
            margin: "50px auto",
            textAlign: "center",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 10px 1px #ddd",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: "#671d63", padding: "1rem" }}
          >
            {`COACH ${pack?.coach?.toLocaleUpperCase()}`}
          </Typography>
          <Box sx={{ backgroundColor: "#671d63", padding: "1rem" }}>
            <Typography
              paragraph
              sx={{
                margin: 0,
                color: "#f2effb",
                fontSize: { xs: "14px", md: "18px" },
                marginBottom: "24px",
                span: {
                  display: "block",
                  fontSize: { xs: "28px", md: "35px" },
                  fontWeight: 900,
                  color: "#fff",
                },
              }}
            >
              {"12 Week One-One Coaching 2x Per Week"}
              <span>£{pack?.twice?.toLocaleString("en-UK")}</span>
            </Typography>
            <Typography
              paragraph
              sx={{
                margin: 0,
                color: "#f2effb",
                fontSize: { xs: "14px", md: "18px" },
                span: {
                  display: "block",
                  fontSize: { xs: "28px", md: "35px" },
                  fontWeight: 900,
                  color: "#fff",
                },
              }}
            >
              {"12 Week One-One Coaching 1x Per Week"}
              <span>£{pack?.once?.toLocaleString("en-UK")}</span>
            </Typography>
          </Box>
        </Box>
      )}
      <Box
        sx={{
          maxWidth: "1100px",
          display: "flex",
          margin: {
            xs: "20px auto",
          },
          borderRadius: "8px",
          boxShadow: "0 4px 10px 1px #ddd",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            flexBasis: 0,
          }}
        >
          <Box
            sx={{
              maxHeight: "500px",
              overflow: "hidden",
              textAlign: "center",
              img: {
                margin: "0 auto",
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "top",
              },
            }}
          >
            <img src={pack?.image} alt={pack?.coach} />
          </Box>
          <Box sx={{ paddingBottom: "2rem" }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontWeight: 900,
                color: "#671d63",
                padding: "1rem",
              }}
            >
              One-One Coaching Options
            </Typography>
            <Box sx={{ margin: "1rem 0 2rem" }}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                Twice a week for 3 months £
                {pack?.twice?.toLocaleString("en-UK")}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "12px",
                  paddingLeft: "12px",
                  paddingBottom: "5px",
                }}
              >
                <CheckIcon sx={{ color: "#671d63" }} />
                <Typography>Pay in Full</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "12px",
                  paddingLeft: "12px",
                }}
              >
                <CheckIcon sx={{ color: "#671d63" }} />
                <Typography>
                  Or pay £{(Number(pack?.twice) / 3).toLocaleString("en-UK")}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ margin: "1rem 0" }}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                Once a week for 3 months £{pack?.once?.toLocaleString("en-UK")}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "12px",
                  paddingLeft: "12px",
                  paddingBottom: "5px",
                }}
              >
                <CheckIcon sx={{ color: "#671d63" }} />
                <Typography>Pay in Full</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "12px",
                  paddingLeft: "12px",
                }}
              >
                <CheckIcon sx={{ color: "#671d63" }} />
                <Typography>
                  Or pay £{(Number(pack?.once) / 3).toLocaleString("en-UK")}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, flexBasis: 0 }}>
          <Box
            sx={{
              margin: "1rem",
              padding: "1rem",
              border: "1px solid #671d63",
              borderRadius: "8px",
              height: "91%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "10px",
                  borderBottom: "4px solid goldenrod",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "#671d63", fontWeight: 500 }}
                >
                  Item
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "#671d63", fontWeight: 500 }}
                >
                  Price
                </Typography>
              </Box>
              <RadioGroup
                aria-labelledby="coach group"
                name="coaches"
                value={value}
                onChange={handleRadioChange}
              >
                <Box
                  sx={{
                    backgroundColor: "#f2effb",
                    margin: "1rem 0",
                    marginTop: "2rem",
                    padding: "1rem",
                    borderRadius: "8px",
                    overflow: "hidden",
                    transition: "all 100ms linear",
                    "&:hover": {
                      transform: "scale(0.98)",
                    },
                  }}
                >
                  <FormControlLabel
                    value={"twice-full"}
                    control={<Radio />}
                    label={
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <span style={{ flexGrow: 3, flexBasis: 0 }}>
                          3 Months One-One Coaching Twice a Week - Pay in full
                        </span>
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: 900,
                            color: "#671d63",
                            flexGrow: 1,
                            flexBasis: 0,
                          }}
                        >{` £${pack?.twice?.toLocaleString("en-UK")}`}</span>
                      </Box>
                    }
                    sx={{
                      "&.Mui-checked": {
                        color: "#671d63",
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#f2effb",
                    margin: "1rem 0",
                    padding: "1rem",
                    borderRadius: "8px",
                    overflow: "hidden",
                    transition: "all 100ms linear",
                    "&:hover": {
                      transform: "scale(0.98)",
                    },
                  }}
                >
                  <FormControlLabel
                    value={"twice-monthly"}
                    control={<Radio />}
                    label={
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <span style={{ flexGrow: 3, flexBasis: 0 }}>
                          3 Months One-One Coaching Twice a Week - Pay
                        </span>
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: 900,
                            color: "#671d63",
                            flexGrow: 1,
                            flexBasis: 0,
                            overflowWrap: "break-word",
                          }}
                        >{` £${(Number(pack?.twice) / 3).toLocaleString(
                          "en-UK"
                        )} /Month`}</span>
                      </Box>
                    }
                    sx={{
                      "&.Mui-checked": {
                        color: "#671d63",
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#f2effb",
                    margin: "1rem 0",
                    padding: "1rem",
                    borderRadius: "8px",
                    overflow: "hidden",
                    transition: "all 100ms linear",
                    "&:hover": {
                      transform: "scale(0.98)",
                    },
                  }}
                >
                  <FormControlLabel
                    value={"once-full"}
                    control={<Radio />}
                    label={
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <span style={{ flexGrow: 3, flexBasis: 0 }}>
                          3 Months One-One Coaching Once a Week - Pay in full
                        </span>
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: 900,
                            color: "#671d63",
                            flexGrow: 1,
                            flexBasis: 0,
                            overflowWrap: "break-word",
                          }}
                        >{` £${pack?.once?.toLocaleString("en-UK")}`}</span>
                      </Box>
                    }
                    sx={{
                      "&.Mui-checked": {
                        color: "#671d63",
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#f2effb",
                    margin: "1rem 0",
                    padding: "1rem",
                    borderRadius: "8px",
                    overflow: "hidden",
                    transition: "all 100ms linear",
                    "&:hover": {
                      transform: "scale(0.98)",
                    },
                  }}
                >
                  <FormControlLabel
                    value={"once-monthly"}
                    control={<Radio />}
                    label={
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          flexGrow: 1,
                          flexBasis: 0,
                          overflowWrap: "break-word",
                        }}
                      >
                        <span style={{ flexGrow: 3, flexBasis: 0 }}>
                          3 Months One-One Coaching Once a Week - Pay
                        </span>
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: 900,
                            color: "#671d63",
                          }}
                        >{` £${(Number(pack?.once) / 3).toLocaleString(
                          "en-UK"
                        )} /Month`}</span>
                      </Box>
                    }
                    sx={{
                      "&.Mui-checked": {
                        color: "#671d63",
                      },
                    }}
                  />
                </Box>
              </RadioGroup>
            </Box>
            <Box sx={{ display: "flex" }}>
              <PrimaryBtn fullWidth>Proceed to purchase</PrimaryBtn>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Packages;
