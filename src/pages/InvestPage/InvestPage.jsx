import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  useTheme,
} from "@mui/material";
import InvestForm from "../../components/forms/SignInForm/InvestForm";
import TableLoader from "../../components/Loaders/TableLoader";
import getInvestmentsTableData from "../../API/ApiCalls/getInvestmentsTableData";
import { useQuery } from "react-query";
import SavingsIcon from "@mui/icons-material/Savings";
import StyledHeaderCell from "../../components/tableComponents/StyledHeaderCell";
import TableNoData from "../../components/tableComponents/TableNoData";

export default function InvestPage() {
  const theme = useTheme();
  const { isFetching, isError, isLoading, data, isSuccess, refetch } = useQuery(
    "InvestmentsTable2",
    getInvestmentsTableData,
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );
  return (
    <Grid container sx={{ p: 3 }} flexDirection={"row"} spacing={4}>
      <Grid item xs={4}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2, mt: 3 }}>
          <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
            <SavingsIcon />
          </Avatar>
        </Box>
        <InvestForm
          isLoading={isLoading}
          onSubmitHandler={() => {
            refetch();
          }}
        />
      </Grid>
      <Grid item flex={1}>
        {(isFetching || isLoading) && <TableLoader />}
        {isError && <TableNoData />}
        {isSuccess && (
          <TableContainer
            component={Paper}
            elevation={3}
            sx={{ maxHeight: 500 }}
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <StyledHeaderCell>S.No</StyledHeaderCell>
                  <StyledHeaderCell>Risk Category</StyledHeaderCell>
                  <StyledHeaderCell>Investment Suggestions</StyledHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.data.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.riskCategory}</TableCell>
                    <TableCell>{item.investmentSuggestions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Grid>
    </Grid>
  );
}
