import { useState } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { footerItems } from "../../utils/constant";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleReadMoreClick = () => {
    setOpen(!open);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#e5e9f8",
        padding: { md: "5rem", xs: "1rem" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1500px",
          padding: "40px 0",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "space-between", md: "space-between" },
          borderBottom: "1px solid #671d63",
          gap: { xs: "15px", md: "30px" },
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ maxWidth: "532px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
              paddingBottom: "30px",
            }}
          >
            <Box
              sx={{
                borderRadius: "100%",
                overflow: "hidden",
                border: "5px solid #fff",
              }}
            >
              <Link to="/" style={{ display: "flex" }}>
                <img
                  src="/becomeYourCreator.jpeg"
                  alt="logo"
                  style={{ maxWidth: "150px", height: "auto" }}
                />
              </Link>
            </Box>
          </Box>
          <Typography
            paragraph
            sx={{
              color: "#671d63",
              margin: 0,
              lineHeight: "1.3rem",
              textAlign: { xs: "left", sm: "justify" },
            }}
          >
            Become Your Creator LTD. offers coaching services for informational
            and educational purposes only. While our sessions are personalized,
            it is the individual's responsibility to apply the coaching to
            achieve desired outcomes. We provide guidance, support, and
            encouragement, but clients are accountable for their actions and
            decisions resulting from our coaching.
            <Button
              sx={{
                color: "#671d63",
                textDecoration: "none",
                ":hover": { color: "white", background: "#671d63" },
              }}
              onClick={handleReadMoreClick}
            >
              Read More...
            </Button>
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              color: "#671d63",
              fontSize: "1.2rem",
              fontWeight: 900,
              paddingBottom: { xs: "10px", md: "30px" },
              margin: 0,
            }}
          >
            QUICK LINKS
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "flex-start",
            }}
          >
            {footerItems?.map((item) => {
              return (
                <Typography
                  key={item.name}
                  component={Link}
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  to={item.href}
                  sx={{
                    color: "#671d63",
                    lineHeight: "1.5rem",
                    fontSize: "1.2rem",
                    textDecoration: "none",
                  }}
                >
                  {item.name}
                </Typography>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ marginTop: { xs: "1rem", md: "2rem" }, alignSelf: "start" }}>
          <Typography
            variant="h3"
            sx={{
              color: "#671d63",
              fontSize: "1.2rem",
              fontWeight: 900,
              paddingBottom: "8px",
              margin: 0,
            }}
          >
            FOLLOW US
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                color: "#671d63",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                padding: "0.15rem",
                border: "1px solid #671d63",
              }}
            >
              <FacebookRoundedIcon
                sx={{ fontSize: "2rem", cursor: "pointer" }}
              />
            </Box>
            <Box
              sx={{
                color: "#671d63",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                padding: "0.15rem",
                border: "1px solid #671d63",
              }}
            >
              <TwitterIcon sx={{ fontSize: "2rem", cursor: "pointer" }} />
            </Box>
            <Box
              sx={{
                color: "#671d63",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                padding: "0.15rem",
                border: "1px solid #671d63",
              }}
            >
              <InstagramIcon sx={{ fontSize: "2rem", cursor: "pointer" }} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          paddingTop: { xs: "1rem", md: "3rem" },
          textAlign: { xs: "left", md: "center" },
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        <Typography
          varient="span"
          sx={{
            color: "#671d63",
            lineHeight: "1.5rem",
            fontSize: "1.2rem",
          }}
        >
          Become Your Creator - 2023 All rights reserved -{" "}
          <Link
            style={{
              color: "#671d63",
              lineHeight: "1.5rem",
              fontSize: "1.2rem",
              textDecoration: "none",
              fontWeight: 900,
            }}
            to="/privacy-policy"
          >
            Privacy
          </Link>{" "}
          -{" "}
          <Link
            style={{
              color: "#671d63",
              lineHeight: "1.5rem",
              fontSize: "1.2rem",
              textDecoration: "none",
              fontWeight: 900,
            }}
            to="/terms-and-conditions"
          >
            Terms
          </Link>
        </Typography>
      </Box>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle sx={{ color: "#671d63" }}>
          Become Your Creator LTD. Disclaimer
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
            Become Your Creator LTD. offers coaching services for informational
            and educational purposes only. While our sessions are personalized,
            it is the individual's responsibility to apply the coaching to
            achieve desired outcomes. We provide guidance, support, and
            encouragement, but clients are accountable for their actions and
            decisions resulting from our coaching.
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
            We do not replace professional advice, therapy, or medical
            treatment. Clients are encouraged to consult qualified professionals
            for specific circumstances, as we do not guarantee the completeness,
            accuracy, or reliability of our services. We are not liable for any
            loss or damage arising from the use of our coaching.
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
            In our commitment to client well-being, we may refuse coaching if
            signs of mental illness are identified. Pregnant women and
            individuals under 18 are not suitable for our services, and we
            recommend specialized care for their needs. These measures ensure
            tailored support for each client, prioritizing their safety and
            effectiveness.
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
            By participating in our coaching, you agree to these terms. If you
            disagree, please refrain from using our services. Thank you for your
            understanding and cooperation.
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
            For legal purposes, the services and programs provided by Become
            Your Creator LTD. are intended for informational and educational
            purposes only. Our coaching sessions are personalized and tailored
            to individual needs, and it is does to the individual to apply the
            coaching in order to see the desired outcomes.
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
            Become Your Creator LTD. is committed to providing guidance,
            support, and encouragement to help clients achieve their goals.
            However, it is important to understand that the actions and
            decisions clients take, or fail to take, based on our coaching
            sessions are their own responsibility.
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
            We cannot be held liable for the choices made by clients outside the
            scope of our coaching sessions. While we strive to offer valuable
            insights and strategies, the ultimate responsibility for personal
            decisions and their outcomes rests solely with the client.
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
            Our role is to empower, motivate, and facilitate personal growth,
            but the client retains full accountability for their actions, both
            successful and otherwise. We encourage clients to exercise their own
            judgment and seek additional advice when necessary.
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
            By engaging in our coaching services, clients acknowledge and accept
            this limitation of our liability.
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
            While we strive to offer accurate and helpful information, our
            coaching services do not replace professional advice, therapy, or
            medical treatment. We encourage you to consult with qualified
            professionals regarding your specific circumstances. Any reliance
            you place on the information provided in our coaching sessions is at
            your own risk.
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
            We make no representations or warranties of any kind, express or
            implied, about the completeness, accuracy, reliability, suitability,
            or availability with respect to our coaching services or the
            information, products, services, or related graphics contained
            therein. Any reliance you place on such information is strictly at
            your own risk.
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
            In no event will we be liable for any loss or damage, including
            without limitation, indirect or consequential loss or damage, or any
            loss or damage whatsoever arising from loss of data or profits
            arising out of, or in connection with, the use of our coaching
            services.
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
            At our life coaching practice, the well-being of our clients is our
            utmost priority. It is essential to note that if, during the initial
            assessment or subsequent sessions, we identify signs of mental
            illness or emotional distress, we reserve the right to refuse
            coaching services. In such cases, we strongly recommend seeking
            assistance from a licensed mental health professional or a qualified
            medical practitioner.
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
            Additionally, our coaching services are not suitable for pregnant
            women and individuals under the age of 18. For pregnant women, it is
            advisable to consult healthcare providers who specialize in prenatal
            care and mental health. Clients under the age of 18 are encouraged
            to seek guidance from appropriate sources, such as school
            counsellors or family therapists, who are better equipped to address
            their specific needs.
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
            We deeply care about the safety and well-being of all individuals,
            and these guidelines are in place to ensure that each client
            receives the most appropriate and effective support tailored to
            their unique circumstances. Thank you for your understanding and
            cooperation.
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
            By engaging in our coaching sessions, you agree to these terms and
            acknowledge that you have read and understood this disclaimer. If
            you do not agree with this disclaimer, please do not use our
            coaching services.
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
            If you have any questions, please do not hesitate to contact us via
            email on support@becomeyourcreator.com
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              color: "#671d63",
              ":hover": { color: "white", backgroundColor: "#671d63" },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Footer;
