import React from 'react'
import { Button, Modal } from "semantic-ui-react";
import {Link } from 'react-router-dom'
import dateFormat from 'dateformat'

function ConfirmModal({ visible }) {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userData === null) {
    return (
      <div></div>
    );
}

  return (
    <div>
      <Modal dimmer="inverted" open={visible} className="confirm-modal">
        <div className="modal-body">
          <h1>Booking Confirmed!</h1>
          <p>
            You have booked <strong>{userData.selectedCar.name}</strong>
          </p>
          <p>
            for duration{" "}
            <strong>
              {dateFormat(userData.dIssue, "dd/mm/yyyy")} -{" "}
              {dateFormat(userData.dReturn, "dd/mm/yyyy")}
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