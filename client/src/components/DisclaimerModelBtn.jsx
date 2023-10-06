import { Box, Button, DialogContent, Typography } from "@mui/material";
import React, { useState } from "react";
import { MainModal } from "./MainModal";

const DisclaimerModelBtn = ({ text }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleReadMoreClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Button
        sx={{
          color: "#671d63",
          textDecoration: "none",
          ":hover": { color: "#671d63" },
          padding: "0 5px",
          borderBottom: "1px solid #671d63",
          borderRadius: 0,
          marginLeft: "10px",
        }}
        onClick={handleReadMoreClick}
      >
        {text}
      </Button>
      <MainModal open={open} handleClose={handleClose} lg={true}>
        <Box sx={{ maxHeight: "75vh", overflowY: "auto" }}>
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
            Become Your Creator LTD. Disclaimer
          </Typography>
          <DialogContent>
            <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
              Become Your Creator LTD. offers coaching services for
              informational and educational purposes only. While our sessions
              are personalized, it is the individual's responsibility to apply
              the coaching to achieve desired outcomes. We provide guidance,
              support, and encouragement, but clients are accountable for their
              actions and decisions resulting from our coaching.
            </Typography>
            <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
              We do not replace professional advice, therapy, or medical
              treatment. Clients are encouraged to consult qualified
              professionals for specific circumstances, as we do not guarantee
              the completeness, accuracy, or reliability of our services. We are
              not liable for any loss or damage arising from the use of our
              coaching.
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
              disagree, please refrain from using our services. Thank you for
              your understanding and cooperation.
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
              We cannot be held liable for the choices made by clients outside
              the scope of our coaching sessions. While we strive to offer
              valuable insights and strategies, the ultimate responsibility for
              personal decisions and their outcomes rests solely with the
              client.
            </Typography>
            <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
              Our role is to empower, motivate, and facilitate personal growth,
              but the client retains full accountability for their actions, both
              successful and otherwise. We encourage clients to exercise their
              own judgment and seek additional advice when necessary.
            </Typography>
            <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
              By engaging in our coaching services, clients acknowledge and
              accept this limitation of our liability.
            </Typography>
            <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
              While we strive to offer accurate and helpful information, our
              coaching services do not replace professional advice, therapy, or
              medical treatment. We encourage you to consult with qualified
              professionals regarding your specific circumstances. Any reliance
              you place on the information provided in our coaching sessions is
              at your own risk.
            </Typography>
            <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
              We make no representations or warranties of any kind, express or
              implied, about the completeness, accuracy, reliability,
              suitability, or availability with respect to our coaching services
              or the information, products, services, or related graphics
              contained therein. Any reliance you place on such information is
              strictly at your own risk.
            </Typography>
            <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
              In no event will we be liable for any loss or damage, including
              without limitation, indirect or consequential loss or damage, or
              any loss or damage whatsoever arising from loss of data or profits
              arising out of, or in connection with, the use of our coaching
              services.
            </Typography>
            <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
              At our life coaching practice, the well-being of our clients is
              our utmost priority. It is essential to note that if, during the
              initial assessment or subsequent sessions, we identify signs of
              mental illness or emotional distress, we reserve the right to
              refuse coaching services. In such cases, we strongly recommend
              seeking assistance from a licensed mental health professional or a
              qualified medical practitioner.
            </Typography>
            <Typography sx={{ fontSize: { md: "18px", xs: "15px" } }}>
              Additionally, our coaching services are not suitable for pregnant
              women and individuals under the age of 18. For pregnant women, it
              is advisable to consult healthcare providers who specialize in
              prenatal care and mental health. Clients under the age of 18 are
              encouraged to seek guidance from appropriate sources, such as
              school counsellors or family therapists, who are better equipped
              to address their specific needs.
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
              If you have any questions, please do not hesitate to contact us
              via email on support@becomeyourcreator.com
            </Typography>
          </DialogContent>
        </Box>
      </MainModal>
    </>
  );
};

export default DisclaimerModelBtn;
