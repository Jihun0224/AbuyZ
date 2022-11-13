import React, { useState, useEffect } from "react";

// MUI
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// StyledComponent
import styled from "styled-components";
// Calender
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ServiceCategory({
  setSearch,
  setSearchDto,
  buttonClick,
}) {
  var d = new Date();
  var dayOfMonth = d.getDate();
  d.setDate(dayOfMonth - 7);

  const [startDate, setStartDate] = useState(d);
  const [endDate, setEndDate] = useState(new Date());
  const [status, setStatus] = useState(null);
  const [customerCenterCategory, setCustomerCenterCategory] = useState("전체");
  const [title, setTitle] = useState(" ");
  const [inquiryList, setInquiryList] = useState([
    { label: "전체" },
    { label: "배송" },
    { label: "교환_환불" },
    { label: "상품" },
    { label: "주문결제" },
    { label: "이벤트" },
  ]);
  // 승인 유무
  // 0:전체, 1:답변완료, 2:답변 미완료
  const [approval, setApproval] = useState(3);
  const dateList = () => [{ label: "문의일시" }, { label: "처리일시" }];

  const searchButton = () => {
    setSearch(true);
    buttonClick();
  };

  const resetButton = () => {
    setSearch(false);
    setTitle("");
    setCustomerCenterCategory("전체");
  };

  // searchdto 변경
  const handleChange = (e) => {
    setTitle(e.target.value);
    if (e.target.name === "status" && e.target.value === 0) {
    } else {
      // console.log("handleChange@@@", e.target.value);
      setSearchDto((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  // 날짜바뀌면
  useEffect(() => {
    // console.log("start_date", startDate.setHours(0, 0, 0, 0));
    // console.log("end_date", endDate);
    setSearchDto((prevState) => ({
      ...prevState,
      start_date: startDate.setHours(0, 0, 0, 0),
      end_date: endDate.setHours(23, 59, 59, 0),
    }));
  }, [startDate, endDate]);

  // status바뀌면
  useEffect(() => {
    if (status !== "전체") {
      setSearchDto((prevState) => ({
        ...prevState,
        status: status,
      }));
    }
  }, [status]);

  useEffect(() => {
    if (customerCenterCategory !== "전체") {
      setSearchDto((prevState) => ({
        ...prevState,
        customerCenterCategory: customerCenterCategory,
      }));
    }
  }, [customerCenterCategory]);

  // 옵션 체크
  const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName("approvalCheck");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis.target) {
        checkboxes[i].checked = false;
      } else if (checkboxes[i] === checkThis.target) {
        if (i === 0) {
          setApproval(2);
        } else if (i === 1) {
          setApproval(0);
        } else if (i === 2) {
          setApproval(1);
        }
      }
    }
  };
  return (
    <Container>
      <SearchBox>
        <ColumnBox>
          <TitleDiv>
            <p style={{ margin: 0 }}>문의사유</p>
          </TitleDiv>
          <CategoryDiv>
            <Autocomplete
              disablePortal
              size="small"
              options={inquiryList}
              sx={{ width: 400, paddingLeft: "2rem" }}
              renderInput={(params) => <TextField {...params} />}
              defaultValue={customerCenterCategory}
              value={customerCenterCategory}
              onChange={(e, category) => {
                setCustomerCenterCategory(category.label);
              }}
            />
          </CategoryDiv>
        </ColumnBox>
        <ColumnBox>
          <TitleDiv>
            <p style={{ margin: 0 }}>문의명</p>
          </TitleDiv>
          <CategoryDiv>
            <TextField
              size="small"
              sx={{ width: 400, paddingLeft: "2rem" }}
              name="title"
              onChange={handleChange}
              value={title}
            />
          </CategoryDiv>
        </ColumnBox>

        <ColumnBox>
          <TitleDiv>
            <p style={{ margin: 0 }}>답변유무</p>
          </TitleDiv>
          <CategoryDiv>
            <input
              name="approvalCheck"
              type="checkbox"
              value="전체"
              onChange={(e) => checkOnlyOne(e)}
              style={{
                width: "1.2rem",
                height: "1.5rem",
                marginLeft: "2rem",
                marginRight: "0.5rem",
              }}
            />
            <Name>전체</Name>
            <input
              name="approvalCheck"
              type="checkbox"
              value="답변 완료"
              onChange={(e) => checkOnlyOne(e)}
              style={{
                width: "1.2rem",
                height: "1.5rem",
                marginRight: "0.5rem",
              }}
            />
            <Name>답변 완료</Name>
            <input
              name="approvalCheck"
              type="checkbox"
              value="답변 미완료"
              onChange={(e) => checkOnlyOne(e)}
              style={{
                width: "1.2rem",
                height: "1.5rem",
                marginRight: "0.5rem",
              }}
            />
            <Name>답변 미완료</Name>
          </CategoryDiv>
        </ColumnBox>
        <ColumnBox>
          <TitleDiv>
            <p style={{ margin: 0 }}>기간</p>
          </TitleDiv>
          <DateDiv>
            <Autocomplete
              disablePortal
              options={dateList()}
              size="small"
              sx={{ width: 400, paddingLeft: "2rem" }}
              renderInput={(params) => <TextField {...params} />}
              defaultValue="문의일시"
            />
            <CalendarDiv>
              <MyDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                dateFormat="yyyy-MM-dd"
              />
              <MyDatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsStart
                startDate={endDate}
                dateFormat="yyyy-MM-dd"
              />
            </CalendarDiv>
          </DateDiv>
        </ColumnBox>
        <ButtonDiv>
          <ResetButton onClick={resetButton}>초기화</ResetButton>
          <SearchButton onClick={searchButton}>검색</SearchButton>
        </ButtonDiv>
      </SearchBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
`;

const ColumnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #c8c8c8;
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  width: 16%;
  height: 4.2rem;
  background-color: #dadada;
  font-size: 1.3rem;
`;

const DateDiv = styled.div`
  display: flex;
  align-items: center;
  width: 84%;
  height: 100%;
  padding-top: 0.5rem;
  padding-left: 4rem;
  padding-bottom: 0.5rem;
  background-color: white;
`;

const CalendarDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: white;
`;

const MyDatePicker = styled(DatePicker)`
  width: 10rem;
  /* background-color: transparent; */
  border-color: #c4c4c4;
  height: 2rem;
  margin-left: 10rem;
  font-size: 1rem;
  font-weight: bold;
  color: black;
  border: 1px solid;
`;

const CategoryDiv = styled.div`
  display: flex;
  align-items: center;
  width: 84%;
  height: 100%;
  padding-top: 0.5rem;
  padding-left: 4rem;
  padding-bottom: 0.5rem;
  background-color: white;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const ResetButton = styled.button`
  border: 1px solid black;
  background-color: white;
  margin-right: 1rem;
  padding: 1rem;
  width: 10%;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.3rem;
`;

const SearchButton = styled.button`
  border: none;
  background-color: #57a9fb;
  font-size: 1.3rem;
  margin-left: 1rem;
  padding: 1rem;
  width: 10%;
  font-weight: bold;
  cursor: pointer;
  color: white;
`;
const Name = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;
