// React
import React from "react";

// MUI
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

// StyledComponent
import styled from "styled-components";

export default function Myinfo() {
  return (
    <InfoContainer>
      <MainBox>
        <MyImgDiv>
          <AccountBoxIcon sx={{ fontSize: "10rem" }} />
        </MyImgDiv>
        <MyName>
          권도건님
          <ArrowForwardIosIcon sx={{ fontSize: "2.5rem" }} />
        </MyName>
        <HistoryDiv>
          <HistoryTitle>
            주문 내역
            <ArrowForwardIosIcon sx={{ fontSize: "1.5rem" }} />
          </HistoryTitle>
          <HistoryCount>4건</HistoryCount>
        </HistoryDiv>
        <HistoryDiv>
          <HistoryTitle>
            문의 내역
            <ArrowForwardIosIcon sx={{ fontSize: "1.5rem" }} />
          </HistoryTitle>
          <HistoryCount>1건</HistoryCount>
        </HistoryDiv>
        <HistoryDiv>
          <HistoryTitle>
            나의 쿠폰
            <ArrowForwardIosIcon sx={{ fontSize: "1.5rem" }} />
          </HistoryTitle>
          <HistoryCount>1개</HistoryCount>
        </HistoryDiv>
      </MainBox>
      <SupportBox></SupportBox>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  width: 110rem;
  height: 16rem;
  margin-top: 3rem;
`;

const MainBox = styled.div`
  display: flex;
  background-color: #f8f8f8;
  align-items: center;
  height: 10rem;
  padding: 3rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`;

const SupportBox = styled.div`
  background-color: #ec6c62;
  height: 6rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`;

const MyImgDiv = styled.div``;

const MyName = styled.div`
  font-size: 3.5rem;
  font-weight: bolder;
  margin-left: 5rem;
  margin-right: 15rem;
`;

const HistoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem;
`;

const HistoryTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  padding-bottom: 1rem;
`;

const HistoryCount = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
`;
