// React
import React from "react";

// MUI
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";

// StyledComponent
import styled from "styled-components";

export default function Signup() {
  return (
    <SignupContainer component="main">
      <SignupBox>
        <Typography component="h1" variant="h3" sx={{ color: "#EF2A23" }}>
          회원가입
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="이메일을 입력해주세요."
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="contained"
              sx={{ height: "3rem", marginTop: "1rem", fontSize: "1rem" }}
            >
              인증
            </Button>
          </Grid>
        </Grid>
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="비밀번호를 입력해주세요"
          name="password"
          autoComplete="password"
          autoFocus
          sx={{ backgroundColor: "white" }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="passwordConfirm"
          label="비밀번호를 재입력해주세요"
          name="passwordConfirm"
          autoComplete="passwordConfirm"
          autoFocus
          sx={{ backgroundColor: "white" }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="이름을 입력해주세요"
          name="name"
          autoComplete="name"
          autoFocus
          sx={{ backgroundColor: "white" }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="nickname"
          label="닉네임을 입력해주세요"
          name="nickname"
          autoComplete="nickname"
          autoFocus
          sx={{ backgroundColor: "white" }}
        />
        <FormControl sx={{ mt: 1, mb: 1, pl: 1 }}>
          <FormLabel>성별</FormLabel>
          <RadioGroup aria-required row name="gender">
            <FormControlLabel value="MALE" control={<Radio />} label="남성" />
            <FormControlLabel value="FEMALE" control={<Radio />} label="여성" />
          </RadioGroup>
        </FormControl>
        <TextField
          margin="normal"
          type="date"
          required
          fullWidth
          name="birthday"
          label="생일을 입력해주세요."
          id="birthday"
          autoComplete="userBirthday"
          defaultValue={"2000-01-01"}
          sx={{ backgroundColor: "white" }}
        />
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <TextField
              fullWidth
              margin="normal"
              type="address"
              required
              name="adress"
              label="주소를 입력해주세요."
              disabled
              id="address"
              autoComplete="address"
              sx={{ backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="contained"
              sx={{ height: "3rem", marginTop: "1rem", fontSize: "1rem" }}
            >
              검색
            </Button>
          </Grid>
        </Grid>
        <TextField
          fullWidth
          margin="normal"
          required
          name="detailAddress"
          label="상세주소주소를 입력해주세요."
          id=" detailAddress"
          autoComplete="detailAddress"
          sx={{ backgroundColor: "white" }}
        />
        <Button
          fullWidth
          href="/login"
          color="error"
          variant="contained"
          sx={{ height: "3rem", marginTop: "1rem", fontSize: "1rem" }}
        >
          회원가입
        </Button>
      </SignupBox>
    </SignupContainer>
  );
}

const SignupContainer = styled(Container)`
  display: flex;
  align-items: center;
  width: 40rem;
  height: 100vh;
`;

const SignupBox = styled(Box)`
  background-color: #f5f5f5;
  border-radius: 1rem;
  width: 100%;
  padding: 3rem;
`;
