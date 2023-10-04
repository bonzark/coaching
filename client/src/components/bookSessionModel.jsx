import { useEffect, useState } from 'react';
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';
import { MainModal } from './MainModal';
import {
  getCoaches,
  getSessionsByCoachID,
  getAllSessions,
  getCoachById,
} from '../services/session.service';
import SessionCard from './SessionCard';
import { handlePayment } from '../services/payment.service';
import { PopupModal } from 'react-calendly';
import { getUserDetails, setUserDetails } from '../utils/auth';
import { getuserById } from '../services/user.service';

const BookSession = ({ open, handleClose, userDetails, coachId }) => {
  const [coach, setCoach] = useState('');
  const [coachDetail, setCoachDetail] = useState();
  const [coachList, setCoachList] = useState([]);
  const [sessionList, setSessionList] = useState(null);
  const [isPurchased, setIsPurchased] = useState(false);
  const [purchasedCount, setPurchasedCount] = useState(0);
  const [popup, setPopup] = useState(false);
  const [popupLink, setPopupLink] = useState('');
  const [hasLink, setHasLink] = useState({});

  const [isCoachPage, setIsCoachPage] = useState(false);

  const handleChange = (event) => {
    setCoach(event.target.value);
    if (userDetails) {
      getSessionsByCoachID(event.target.value)
        .then((res) => {
          purchaseSession(userDetails, res?.data?.sessions);
          bookedSession(userDetails, res?.data?.sessions);
          getPurchasedCount();
        })
        .catch((err) => console.log(err));
    }
  };

  const finalDisplaySessionList = (sessions) => {
    const paidSession = sessions.filter((i) => i.sessionType !== 'freeReading');
    var result = sessions.reduce((unique, o) => {
      if (
        !unique.some((obj) => obj.sessionType === 'freeReading') &&
        o.sessionType === 'freeReading' &&
        (o.isBooked || o.isPurchased)
      ) {
        unique.push(o);
      }
      return unique;
    }, []);

    setSessionList(result.concat(paidSession));
  };

  const bookedSession = (userDetails, data) => {
    const bookedSession = data;
    const sessionsWithLink = {};
    if (userDetails && bookedSession) {
      const data = userDetails?.bookedSession;
      for (let i = 0; i < bookedSession.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (data[j].session._id === bookedSession[i]._id) {
            bookedSession[i].isBooked = true;
            bookedSession[i].sessionLink = data[j].link;
          }
        }
      }
      bookedSession.forEach((session) => {
        if (session.isBooked) sessionsWithLink[[session._id]] = false;
      });
      setHasLink(sessionsWithLink);
      finalDisplaySessionList(bookedSession);
    }
  };

  const purchaseSession = (userDetails, data) => {
    const purchaseSession = data;
    if (userDetails && purchaseSession) {
      const data = userDetails?.purchasedSession;
      for (let i = 0; i < purchaseSession.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (data[j].session._id === purchaseSession[i]._id) {
            purchaseSession[i].isPurchased = true;
          }
        }
      }
      finalDisplaySessionList(purchaseSession);
      // setSessionList(purchaseSession);
    }
  };

  const getPurchasedCount = () => {
    setIsPurchased(true);
    setPurchasedCount(
      userDetails?.purchasedSession?.filter((i) => i.status === 'purchased')?.length
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
      .catch((err) => console.log('err ::', err));
  };

  const bookHandler = (data) => {
    setPopupLink(data?.calendlyLink);
    setPopup(true);
    handleClose();
  };
  const userDetail = getUserDetails();

  const popupCloseHandler = async () => {
    setPopup(false);
    if (userDetail) {
      const { data } = await getuserById(userDetail._id);
      setUserDetails(data);
      getAllSessions()
        .then((res) => {
          purchaseSession(userDetails, res?.data?.sessions);
          bookedSession(userDetails, res?.data?.sessions);
          getPurchasedCount();
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (
      window.location.pathname === '/our-coaches' ||
      window.location.pathname === '/coaching-with-rita'
    ) {
      setIsCoachPage(true);
      getSessionsByCoachID(coachId)
        .then((res) => {
          purchaseSession(userDetails, res?.data?.sessions);
          bookedSession(userDetails, res?.data?.sessions);
          getPurchasedCount();
        })
        .catch((err) => console.log(err));
      getCoachById(coachId)
        .then((res) => {
          setCoachDetail(res.data.coach);
        })
        .catch((err) => console.log(err));
    } else {
      setCoach('');
      getCoaches()
        .then((res) => setCoachList(res?.data?.coaches))
        .catch((err) => console.log(err));

      getAllSessions()
        .then((res) => {
          purchaseSession(userDetails, res?.data?.sessions);
          bookedSession(userDetails, res?.data?.sessions);
          getPurchasedCount();
        })
        .catch((err) => console.log(err));
    }
  }, [open]);

  return (
    <>
      <MainModal open={open} handleClose={handleClose} lg>
        <Typography
          variant="h6"
          sx={{
            color: '#671d63',
            fontWeight: 900,
            borderBottom: '1px solid #aaa',
            paddingBottom: '0.5rem',
            marginBottom: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {isCoachPage
            ? `Book your session with ${coachDetail?.firstName} now`
            : 'Book your session now'}

          {/* {isPurchased && (
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
          )} */}
        </Typography>
        <form>
          {!isCoachPage && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10px',
              }}
            >
              <Typography
                sx={{
                  color: '#000',
                  fontWeight: 900,
                  paddingBottom: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                Hi, {userDetails?.name}
              </Typography>
            </Box>
          )}
          {!isCoachPage && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '25px',
                marginBottom: '20px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    flexBasis: 0,
                    flexGrow: 1,
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Choose your coach</InputLabel>
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
                          <MenuItem key={coachItem?._id} value={coachItem._id}>
                            {coachItem.firstName}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Box>
          )}

          <Box
            sx={{
              maxHeight: '50vh',
              overflowY: 'scroll',
              'scrollbar-width': '1px',
              '::-webkit-scrollbar': {
                width: '2px' /* Remove scrollbar space */,
                background: 'transparent' /* Optional: just make scrollbar invisible */,
              },
            }}
          >
            {(sessionList?.length > 0 || sessionList) && (
              <Typography
                variant="h6"
                sx={{
                  color: '#671d63',
                  fontWeight: 900,
                  borderBottom: '1px solid #aaa',
                  paddingBottom: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                Purchased session
              </Typography>
            )}
            {sessionList?.filter(
              (i) =>
                (i.sessionType === 'freeReading' && (i.isPurchased || i.isBooked)) ||
                i.isPurchased ||
                i.isBooked
            )?.length > 0 ? (
              <Grid
                spacing={3}
                container
                sx={{
                  marginTop: '0 !important',
                  paddingBottom: '25px',
                  // paddingRight: { md: "20px" },
                }}
              >
                {sessionList
                  ?.filter(
                    (i) =>
                      (i.sessionType === 'freeReading' && (i.isPurchased || i.isBooked)) ||
                      i.isPurchased ||
                      i.isBooked
                  )
                  ?.map((i) => (
                    <Grid key={i?._id} sx={{ height: '100% !important' }} item xs={12} md={6}>
                      <SessionCard
                        title={i.title}
                        detail={i.details}
                        sessionLink={hasLink[i._id] && i?.sessionLink}
                        btnText={
                          !hasLink[i._id]
                            ? i.isBooked
                              ? 'Get Link'
                              : i.isPurchased
                              ? 'Book Now'
                              : 'Purchase'
                            : ''
                        }
                        onClick={
                          i.isBooked
                            ? () => {
                                setHasLink((prev) => ({
                                  ...prev,
                                  [i._id]: true,
                                }));
                              }
                            : () =>
                                i.isPurchased
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
                  color: '#000',
                  fontWeight: 600,
                  paddingBottom: '0.5rem',
                  marginBottom: '1rem',
                  textAlign: 'center',
                }}
              >
                No session available
              </Typography>
            )}
            {(sessionList?.length > 0 || sessionList) && (
              <Typography
                variant="h6"
                sx={{
                  color: '#671d63',
                  fontWeight: 900,
                  borderBottom: '1px solid #aaa',
                  paddingBottom: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                Purchase session
              </Typography>
            )}
            {sessionList?.filter(
              (i) => i.sessionType !== 'freeReading' && !i.isPurchased && !i.isBooked
            )?.length > 0 ? (
              <Grid
                spacing={3}
                container
                sx={{
                  marginTop: '0 !important',
                  paddingBottom: '25px',
                  // paddingRight: { md: "20px" },
                }}
              >
                {sessionList
                  ?.filter((i) => i.sessionType !== 'freeReading' && !i.isPurchased && !i.isBooked)
                  ?.map((i) => (
                    <Grid key={i?._id} sx={{ height: '100% !important' }} item xs={12} md={6}>
                      <SessionCard
                        title={i.title}
                        detail={i.details}
                        sessionLink={hasLink && i?.sessionLink}
                        btnText={i.isBooked ? 'Get Link' : i.isPurchased ? 'Book Now' : 'Purchase'}
                        onClick={
                          i.isBooked
                            ? () => {
                                setHasLink(true);
                              }
                            : () =>
                                i.isPurchased
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
                  color: '#000',
                  fontWeight: 600,
                  paddingBottom: '0.5rem',
                  marginBottom: '1rem',
                  textAlign: 'center',
                }}
              >
                No session available
              </Typography>
            )}
          </Box>
        </form>
      </MainModal>
      <PopupModal
        url={popupLink}
        prefill={{ email: userDetail?.email, name: userDetail?.name }}
        onModalClose={popupCloseHandler}
        open={popup}
        rootElement={document.getElementById('root')}
      />
    </>
  );
};

export default BookSession;
