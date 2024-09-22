import React from "react";
import { Table, TableRow, TableHeader, TableCell } from "./GraduationStatusTable.style";

interface GraduationStatusRow {
  semester: string;
  liberalCredits: number;
  majorCredits: number;
}

interface GraduationStatusTableProps {
  data: GraduationStatusRow[];
}

const GraduationStatusTable: React.FC<GraduationStatusTableProps> = ({ data }) => {
  return (
    <Table>
      <thead>
        <TableRow header>
          <TableHeader>구분</TableHeader>
          <TableHeader>4.3 기준</TableHeader>
          <TableHeader>4.5 기준</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.semester}</TableCell>
            <TableCell>{row.liberalCredits}</TableCell>
            <TableCell>{row.majorCredits}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default GraduationStatusTable;