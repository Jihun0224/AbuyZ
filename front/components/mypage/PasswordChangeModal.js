// React
import React, { useRef, useState } from "react";

// MUI
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
// StyledComponents
import styled from "styled-components";

export default function PasswordChangeModal({ setModalOpen, Pw }) {
  const closeModal = () => {
    setModalOpen(false);
  };
  console.log(Pw);

  const [myPw, setMyPw] = useState("");
  const modalRef = useRef(null);
  return (
    <PasswordChangeContainer ref={modalRef}>
      <IconDiv>
        <CloseIcon onClick={closeModal} sx={{ cursor: "pointer" }} />
      </IconDiv>
      <ModalTitle>비밀번호 변경</ModalTitle>
      <TextField
        margin="normal"
        required
        fullWidth
        id="password"
        label="기존 비밀번호를 입력해주세요."
        name="password"
        autoComplete="password"
        autoFocus
        sx={{ marginBottom: "2rem" }}
        onChange={(event) => {
          setMyPw(event.currentTarget.value);
        }}
      ></TextField>
      {myPw === Pw ? null : (
        <span style={{ color: "red" }}>비밀번호를 정확하게 입력해주세요.</span>
      )}
      <TextField
        margin="normal"
        required
        fullWidth
        id="newPassword"
        label="새 비밀번호를 입력해주세요."
        name="newPassword"
        autoComplete="newPassword"
      ></TextField>
      <TextField
        margin="normal"
        required
        fullWidth
        id="newPasswordConfirm"
        label="새 비밀번호를 재입력해주세요."
        name="newPasswordConfirm"
        autoComplete="newPasswordConfirm"
        sx={{ marginBottom: "2rem" }}
      ></TextField>
      <ChangeButton
        fullWidth
        variant="contained"
        onClick={closeModal}
        color="error"
      >
        등록
      </ChangeButton>
    </PasswordChangeContainer>
  );
}

const PasswordChangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -20%);
  width: 40%;
  border: 2px solid #000;
  background-color: #fff;
  box-shadow: 24;
  padding: 2rem;
`;

const IconDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const ModalTitle = styled.h1``;

const ChangeButton = styled(Button)``;
