import React, { useState } from "react";
import styled from "styled-components";
import { MyDatePicker } from "../coupon/CouponPeriod";

// mui
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid2 from "@mui/material/Unstable_Grid2";
import "react-datepicker/dist/react-datepicker.css";

export default function AddCoupon() {
  // 대분류
  const [bigCategory, setBigCategory] = useState("");

  // 쿠폰이름
  const [name, setName] = useState("");
  const [namePlaceholder, setNamePlaceholder] =
    useState("쿠폰 이름을 입력해주세요.");

  // 할인금액
  const [sale, setSale] = useState("");
  const [salePlaceholder, setSalePlaceholder] =
    useState("할인금액을 입력해주세요.");

  // 대분류
  const [category, setCategory] = useState("");

  // 시작 날짜
  const [startDate, setStartDate] = useState(new Date());
  // 마감 날짜
  const [endDate, setEndDate] = useState(new Date());

  // 상품명 입력하면
  const nameChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  const nameFocus = () => {
    setNamePlaceholder("");
  };
  const nameBlur = () => {
    setNamePlaceholder("쿠폰 이름을 입력해주세요.");
  };

  // 왼쪽 할인 금액
  const [leftSale, setLeftSale] = useState("");
  const [leftSalePlaceholder, setLeftSalePlaceholder] = useState("0");

  // 왼쪽 할인 금액 입력하면
  const leftSaleChange = (event) => {
    setLeftSale(event.target.value);
  };
  const leftSaleFocus = () => {
    setLeftSalePlaceholder("");
  };
  const leftSaleBlur = () => {
    setLeftSalePlaceholder("0");
  };

  // 대분류 셀렉트 했을 때
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Grid2
      container
      spacing={2}
      sx={{ padding: "0", margin: "0", background: "white" }}
    >
      <h2
        style={{
          paddingLeft: "2rem",
          margin: "0",
          paddingTop: "2rem",
          paddingBottom: "1rem",
        }}
      >
        쿠폰 등록
      </h2>
      <hr
        style={{ background: "#ff9494", width: "95%", marginBottom: "2rem" }}
      />
      <Grid2
        xs={12}
        sx={{
          margin: "0",
          padding: "0",
          width: "100%",
        }}
      >
        <hr style={{ background: "#ff9494", margin: "0", padding: "0" }} />
      </Grid2>
      {/* 카테고리 */}
      <Grid2
        xs={3}
        sx={{
          padding: "0",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          background: "#DADADA",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
          fontWeight: "600",
        }}
      >
        카테고리
      </Grid2>
      <Grid2
        xs={9}
        sx={{
          padding: "0",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          display: "flex",
          zIndex: "0",
          background: "white",
        }}
      >
        <CategoryBox>
          <FormControl sx={{ minWidth: 200, width: 300 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              대분류
            </InputLabel>
            <Select
              value={bigCategory}
              onChange={handleChange}
              label="대분류"
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}
              sx={{ border: 1, height: 50, borderRadius: 0 }}
            >
              <MenuItem value="대분류">
                <em>대분류</em>
              </MenuItem>
              <MenuItem value={"식품"}>식품</MenuItem>
              <MenuItem value={"생활, 건강"}>생활/건강</MenuItem>
              <MenuItem value={"가구, 인테리어"}>가구/인테리어</MenuItem>
              <MenuItem value={"반려, 도서, 취미"}>반려/도서/취미</MenuItem>
              <MenuItem value={"뷰티"}>뷰티</MenuItem>
            </Select>
          </FormControl>
        </CategoryBox>
      </Grid2>
      <Grid2
        xs={12}
        sx={{
          margin: "0",
          padding: "0",
          width: "100%",
        }}
      >
        <hr style={{ background: "#ff9494", margin: "0", padding: "0" }} />
      </Grid2>
      {/* 쿠폰명 */}
      <Grid2
        xs={3}
        sx={{
          padding: "0",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          background: "#DADADA",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
          fontWeight: "600",
        }}
      >
        쿠폰명
      </Grid2>
      <Grid2
        xs={9}
        sx={{
          padding: "0",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          display: "flex",
          zIndex: "0",
          background: "white",
        }}
      >
        <Input
          placeholder={namePlaceholder}
          onChange={nameChange}
          onFocus={nameFocus}
          onBlur={nameBlur}
        />
      </Grid2>
      <Grid2
        xs={12}
        sx={{
          margin: "0",
          padding: "0",
          width: "100%",
        }}
      >
        <hr style={{ background: "#ff9494", margin: "0", padding: "0" }} />
      </Grid2>
      {/* 할인 금액 */}
      <Grid2
        xs={3}
        sx={{
          padding: "0",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          background: "#DADADA",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
          fontWeight: "600",
        }}
      >
        할인 금액
      </Grid2>
      <Grid2
        xs={9}
        sx={{
          padding: "0",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          display: "flex",
          zIndex: "0",
          background: "white",
        }}
      >
        <SaleInput
          placeholder={leftSalePlaceholder}
          onChange={leftSaleChange}
          onFocus={leftSaleFocus}
          onBlur={leftSaleBlur}
        />
      </Grid2>
      <Grid2
        xs={12}
        sx={{
          margin: "0",
          padding: "0",
          width: "100%",
        }}
      >
        <hr style={{ background: "#ff9494", margin: "0", padding: "0" }} />
      </Grid2>
      {/* 기간 */}
      <Grid2
        xs={3}
        sx={{
          padding: "0",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          background: "#DADADA",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
          fontWeight: "600",
        }}
      >
        기간
      </Grid2>
      <Grid2
        xs={9}
        sx={{
          padding: "0",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "1rem",
          display: "flex",
          zIndex: "0",
          background: "white",
        }}
      >
        <MyDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          // endDate={endDate}
          style={{ width: "40%" }}
          dateFormat="yyyy/MM/dd"
        />
        <WaveTag>~</WaveTag>
        <MyDatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          style={{ width: "40%" }}
          dateFormat="yyyy/MM/dd"
        />
      </Grid2>
      <Grid2
        xs={12}
        sx={{
          margin: "0",
          padding: "0",
          width: "100%",
        }}
      >
        <hr style={{ background: "#ff9494", margin: "0", padding: "0" }} />
      </Grid2>
      <Grid2
        xs={12}
        sx={{
          margin: "0",
          padding: "0",
          width: "100%",
          background: "white",
          // height: "5rem",
        }}
      >
        <ButtonBox>
          <AddButton>등록</AddButton>
        </ButtonBox>
      </Grid2>
    </Grid2>
  );
}

const WaveTag = styled.div`
  font-size: 2rem;
`;

const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

const Input = styled.input`
  border: 0.1rem solid #000000;
  width: 19rem;
  height: 3rem;
  font-size: 1.3rem;
  margin-left: 2rem;

  &::placeholder {
    color: gray;
    font-size: 1rem;
    padding-left: 1rem;
  }
`;

const SaleInput = styled.input`
  border: 0.1rem solid #000000;
  width: 19rem;
  height: 3rem;
  font-size: 1.3rem;
  margin-left: 2rem;
  text-align: end;
  padding-right: 1rem;

  &::placeholder {
    color: gray;
    font-size: 1rem;
    padding-left: 1rem;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding-bottom: 2rem;
  background-color: white;
`;

const AddButton = styled.button`
  background-color: #1a6dff;
  color: white;
  border: 1px solid;
  height: 3rem;
  width: 6rem;
  font-size: 1.3rem;
  &:hover {
    cursor: pointer;
  }
`;
