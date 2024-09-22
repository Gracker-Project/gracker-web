import styled from "@emotion/styled";

interface TableRowProps {
  header?: boolean;
}

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr<TableRowProps>`
  background-color: ${(props) => (props.header ? "#9A2828" : "white")};
  color: ${(props) => (props.header ? "white" : "black")};
  border: ${(props) => (props.header ? "none" : "1px solid #ddd")};
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: center;
  border: 1px solid white;
  font-size: 13px;
  font-weight: 500;
`;

export const TableCell = styled.td`
  padding: 12px;
  text-align: center;
  border: 1px solid white;
  font-size: 13px;
`;