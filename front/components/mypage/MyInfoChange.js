// React
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// MUI
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

// StyledComponents
import styled from "styled-components";

// 하위 Components
import PasswordChangeModal from "./PasswordChangeModal";

export default function MyinfoChange() {
  const [userId, setUserId] = useState("kjmk1007");
  const [userName, setUserName] = useState("권도건");
  const [userEmail, setUserEmail] = useState("kjmk1007@naver.com");
  const [userPhone, setUserPhone] = useState("01012345678");
  const [userSex, setUserSex] = useState("male");
  const [userBirthDay, setUserBirthDay] = useState("1996-10-07");
  const [userPw, setUserPw] = useState("qwer");
  const [checkPhoneNumber, setCheckPhoneNumber] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // const changePhoneNumber = () => {
  //   if (checkPhoneNumber === false) {
  //     setCheckPhoneNumber(true);
  //   } else {
  //     setCheckPhoneNumber(false);
  //   }
  // };

  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <div>
      <InfoContainer>
        <MajorTitle>내 정보 관리</MajorTitle>

        <hr
          style={{
            height: "0.3rem",
            background: "#7895b2",
            borderRadius: "1rem",
          }}
        />
      </InfoContainer>
      <InfoChangeContainer component="main">
        <ContentDiv>
          <Grid container spacing={1}>
            <Grid item xs={2} style={{ marginTop: "2rem" }}>
              <span style={{ fontWeight: "bold" }}>아이디</span>
            </Grid>
            <Grid item xs={8}>
              <TextField
                placeholder={userId}
                margin="normal"
                fullWidth
                id="id"
                name="id"
                autoComplete="id"
                autoFocus
                sx={{ backgroundColor: "white" }}
                disabled
              ></TextField>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={2} style={{ marginTop: "2rem" }}>
              <span style={{ fontWeight: "bold" }}>비밀번호 변경</span>
            </Grid>
            <Grid item xs={8}>
              <SubButton variant="outlined" onClick={showModal}>
                수정
              </SubButton>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={2} style={{ marginTop: "2rem" }}>
              <span style={{ fontWeight: "bold" }}>이름</span>
            </Grid>
            <Grid item xs={8}>
              <TextField
                placeholder={userName}
                margin="normal"
                fullWidth
                id="name"
                name="name"
                autoComplete="name"
                autoFocus
                sx={{ backgroundColor: "white" }}
                onChange={(event) => setUserName(event.currentTarget.value)}
              ></TextField>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={2} style={{ marginTop: "2rem" }}>
              <span style={{ fontWeight: "bold" }}>이메일</span>
            </Grid>
            <Grid item xs={8}>
              <TextField
                placeholder={userEmail}
                margin="normal"
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ backgroundColor: "white" }}
                onChange={(event) => setUserEmail(event.currentTarget.value)}
              ></TextField>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={2} style={{ marginTop: "2rem" }}>
              <span style={{ fontWeight: "bold" }}>휴대폰</span>
            </Grid>

            <Grid item xs={8}>
              <TextField
                placeholder={userPhone}
                margin="normal"
                fullWidth
                id="number"
                name="number"
                autoComplete="number"
                autoFocus
                sx={{ backgroundColor: "white" }}
                onChange={(event) => setUserPhone(event.currentTarget.value)}
              ></TextField>
              {/* {checkPhoneNumber ? (
                <TextField
                  placeholder="수정할 번호를 입력하세요."
                  margin="normal"
                  fullWidth
                  id="number"
                  name="number"
                  autoComplete="number"
                  autoFocus
                  sx={{ backgroundColor: "white" }}
                ></TextField>
              ) : (
                <TextField
                  placeholder={userPhone}
                  margin="normal"
                  fullWidth
                  id="number"
                  name="number"
                  autoComplete="number"
                  autoFocus
                  sx={{ backgroundColor: "white" }}
                  onChange={(event) => setUserPhone(event.currentTarget.value)}
                ></TextField>
              )} */}
            </Grid>
            {/* <Grid item xs={2} style={{ marginTop: "1rem" }}>
              {checkPhoneNumber ? (
                <PhoneButton variant="outlined" onClick={changePhoneNumber}>
                  수정 취소
                </PhoneButton>
              ) : (
                <PhoneButton variant="outlined" onClick={changePhoneNumber}>
                  번호 수정
                </PhoneButton>
              )}
            </Grid> */}
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={2} style={{ marginTop: "2rem" }}>
              <span style={{ fontWeight: "bold" }}>성별</span>
            </Grid>
            <Grid item xs={8} style={{ marginTop: "1rem" }}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={userSex}
                  name="radio-buttons-group"
                >
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="여성"
                      onClick={() => setUserSex("female")}
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="남성"
                      onClick={() => setUserSex("male")}
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="선택안함"
                      onClick={() => setUserSex("other")}
                    />
                  </div>
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={2} style={{ marginTop: "2.5rem" }}>
              <span style={{ fontWeight: "bold" }}>생년월일</span>
            </Grid>
            <Grid item xs={8} style={{ marginTop: "1.5rem" }}>
              <TextField
                id="date"
                type="date"
                defaultValue={userBirthDay}
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(event) => setUserBirthDay(event.currentTarget.value)}
              />
            </Grid>
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "3rem",
            }}
          >
            <QuitButton>탈퇴하기</QuitButton>
            <ModifyButton>수정하기</ModifyButton>
          </div>
          {modalOpen && (
            <PasswordChangeModal
              setModalOpen={setModalOpen}
              Pw={userPw}
            ></PasswordChangeModal>
          )}
        </ContentDiv>
      </InfoChangeContainer>
    </div>
  );
}

const InfoContainer = styled.div`
  margin-top: 4rem;
  width: 56rem;
`;

const MajorTitle = styled.span`
  font-size: 2rem;
`;

const ContentDiv = styled.div`
  border-radius: 1rem;
  width: 100%;
  padding: 1rem;
`;

const InfoChangeContainer = styled.div`
  width: 56rem;
  height: 100vh;
`;

const SubButton = styled(Button)`
  margin-right: 1rem;
  margin-top: 1rem;
  background-color: white;
  border-color: #56a9f1;
  height: 3.3rem;
  width: 100%;
  color: #56a9f1;
`;

const QuitButton = styled.button`
  background-color: white;
  border: 1px solid;
  border-color: rgba(128, 128, 128, 0.5);
  height: 3.3rem;
  width: 8rem;
  color: rgba(128, 128, 128, 0.5);
  border-radius: 5px;
`;

const ModifyButton = styled.button`
  background-color: #56a9f1;
  border: none;
  height: 3.3rem;
  width: 8rem;
  color: white;
  border-radius: 5px;
`;
