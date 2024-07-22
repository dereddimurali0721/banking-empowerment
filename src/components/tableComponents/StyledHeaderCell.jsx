import { styled, TableCell, tableCellClasses, useTheme } from "@mui/material";

export default function StyledHeaderCell({ children }) {
  const theme = useTheme();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#818181",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  return <StyledTableCell>{children}</StyledTableCell>;
}
