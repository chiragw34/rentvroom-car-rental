import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

function ConfirmModal({ visible, name, dIssue, dReturn }) {
  return (
    <div>
      <Modal dimmer="inverted" open={visible} className="confirm-modal">
        <div className="modal-body">
          <h1>Booking Confirmed!</h1>
          <p>
            You have booked <strong>{name}</strong>
          </p>
          <p>
            for duration{" "}
            <strong>
              {dateFormat(dIssue, "dd/mm/yyyy")} -{" "}
              {dateFormat(dReturn, "dd/mm/yyyy")}
            </strong>
          </p>
          <Button className="continue-modal-btn" as={Link} to="/dashboard">
            Continue
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default ConfirmModal;
