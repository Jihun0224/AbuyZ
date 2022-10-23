import React from "react";

// MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
export default function ReviewList() {
  const rows = [
    {
      id: 0,
      nickname: "권도건",
      product: "제주 햇감귤 4.5kg",
      content: "원산지 표시가 잘못됬다 이거사지마라 이거 사기다. 이개...",
      date: "2022.10.13",
      solved: "해결",
    },
    {
      id: 1,
      nickname: "권도건",
      product: "제주 햇감귤 4.5kg",
      content: "원산지 표시가 잘못됬다 이거사지마라 이거 사기다. 이개...",
      date: "2022.10.13",
      solved: "미해결",
    },
  ];
  return (
    <TableContainer component={Paper} sx={{ margin: "2rem" }}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>닉네임</TableCell>
            <TableCell align="center">상품명</TableCell>
            <TableCell align="center">리뷰 내용</TableCell>
            <TableCell align="center">날짜</TableCell>
            <TableCell align="center">해결 유무</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nickname}
              </TableCell>
              <TableCell align="center">{row.product}</TableCell>
              <TableCell align="center">{row.content}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">
                {row.solved === "해결" ? (
                  <Button variant="contained" color="success">
                    {row.solved}
                  </Button>
                ) : (
                  <Button variant="contained" color="error">
                    {row.solved}
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
