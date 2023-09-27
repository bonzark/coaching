import { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { MainModal } from "./MainModal";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { getCoaches } from "../services/session.service";
import SessionCard from "./SessionCard";
import { handlePayment } from "../services/payment.service";
import { redirect } from "react-router-dom";

const BookSession = ({ open, handleClose, userDetails }) => {
  const [coach, setCoach] = useState("");
  const [coachList, setCoachList] = useState([]);
  const [sessionList, setSessionList] = useState(null);
  const [isPurchased, setIsPurchased] = useState(false);
  const [purchasedCount, setPurchasedCount] = useState(0);
  const [isFree, setIsFree] = useState(false);

  const handleChange = (event) => {
    setCoach(event.target.value);
    const data = coachList?.filter((i) => i._id === event.target.value)[0]
      ?.sessions;
    purchaseSession(userDetails, data);
    getPurchasedCount();
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
      setSessionList(purchaseSession);
    }
  };

  const getPurchasedCount = () => {
    setIsPurchased(true);
    setPurchasedCount(
      userDetails?.purchasedSession?.filter((i) => i.status === "purchased")
        ?.length
    );
  };

  const purchaseHandler = (sessionId, price_id) => {
    const data = {
      price_id,
      userId: userDetails._id,
      sessionId,
    };
    handlePayment(data)
      .then((res) => {
        window.location.replace(res?.data?.url);
      })
      .catch((err) => console.log("err ::", err));
  };

  const bookHandler = (data) => {
    Calendly.showPopupWidget(data?.calendlyLink);
  };

  useEffect(() => {
    getCoaches()
      .then((res) => setCoachList(res?.data?.coaches))
      .catch((err) => console.log(err));
  }, []);

  return (
    <MainModal open={open} handleClose={handleClose} lg>
      <Typography
        variant="h6"
        sx={{
          color: "#671d63",
          fontWeight: 900,
          borderBottom: "1px solid #aaa",
          paddingBottom: "0.5rem",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        Book your session now
        {!userDetails?.isFreeReadingBooked && (
          <Chip sx={{ fontSize: "10px" }} label="Free Session Available" />
        )}
      </Typography>
      <form>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              color: "#000",
              fontWeight: 900,
              paddingBottom: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            Hi, {userDetails.name}
          </Typography>
          {!userDetails?.isFreeReadingBooked && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox onChange={() => setIsFree(!isFree)} />
              <Typography>Use Free Session</Typography>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                flexBasis: 0,
                flexGrow: 1,
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Choose your coach
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={coach}
                  label="Coach"
                  onChange={handleChange}
                  input={<OutlinedInput label="Choose Your Coach" />}
                >
                  {coachList.length > 0 &&
                    coachList?.map((coachItem) => (
                      <MenuItem value={coachItem._id}>
                        {coachItem.firstName}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>

        {isPurchased && (
          <Typography
            sx={{
              color: "#000",
              fontWeight: 900,
              paddingBottom: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            All Purchased session : {purchasedCount}
          </Typography>
        )}
        {sessionList?.length > 0 ? (
          <Grid
            spacing={3}
            container
            sx={{
              marginTop: "0 !important",
              paddingBottom: "25px",
              maxHeight: "50vh",
              overflowY: "scroll",
              paddingRight: "20px",
            }}
          >
            {sessionList?.map((i) => (
              <Grid
                key={i?._id}
                sx={{ height: "100% !important" }}
                item
                xs={12}
                sm={6}
                lg={6}
              >
                <SessionCard
                  title={i.title}
                  detail={i.details}
                  btnText={i.isPurchased || isFree ? "Book Now" : "Purchase"}
                  onClick={() =>
                    i.isPurchased || isFree
                      ? bookHandler(i)
                      : purchaseHandler(i._id, i.stripePriceId)
                  }
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography
            sx={{
              color: "#000",
              fontWeight: 600,
              paddingBottom: "0.5rem",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            No session available
          </Typography>
        )}
      </form>
    </MainModal>
  );
};

export default BookSession;
