import { MainModal } from "../components/MainModal";

const ForgotPassword = ({ isOpen, onClose }) => {
  return (
    <MainModal open={isOpen} handleClose={onClose}>
      Some random content here...
    </MainModal>
  );
};

export default ForgotPassword;
