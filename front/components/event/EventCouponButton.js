import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCoupon } from "../../pages/api/coupon";
export default function EventCouponButton({ uid, list, setIsGiven, isgiven }) {
  const ClickCoupon = async () => {
    const res = await getCoupon(uid.uid);
    console.log(res.data);
    alert("쿠폰 지급이 완료되었습니다! 쿠폰함을 확인해주세요👌");
  };
  console.log(uid.uid);
  console.log(list);
  useEffect(() => {
    for (var i = 0; i < list.length; i++) {
      if (list[i].coupon_uid === uid.uid) {
        setIsGiven(true);
      }
    }
  }, []);
  return (
    <div>
      {isgiven ? (
        <span>
          <StyledNoButton disabled>쿠폰 지급 완료</StyledNoButton>
        </span>
      ) : (
        <span>
          <StyledButton onClick={ClickCoupon}>쿠폰 발급 받기</StyledButton>
          <h5 style={{ color: "#56a9f1" }}>
            쿠폰 지급 일자: {uid.start_date.slice(0, 10)}
          </h5>
        </span>
      )}
    </div>
  );
}

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 5px;
  font-size: 1rem;
  line-height: 1.5;
  width: 8rem;
  color: white;
  border: none;
  background: #56a9f1;
`;

const StyledNoButton = styled.button`
  padding: 6px 12px;
  border-radius: 5px;
  font-size: 1rem;
  line-height: 1.5;
  width: 8rem;
  color: white;
  border: none;
  background: #aaaaaa;
`;
