import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./CustomModal.css";

// eslint-disable-next-line react/prop-types
function CustomModal({ open, setOpen, children }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "10px",
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}

export default CustomModal;
