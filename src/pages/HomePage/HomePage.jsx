import {
  Box,
  Grid,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import PieChartCard from "../../components/PieChart/PieChartCard";
import PieChartCardLoader from "../../components/PieChart/PieChartCardLoader";
import PieChartNoData from "../../components/PieChart/PieChartNoData";
import { useQuery } from "react-query";
import getExpenses from "../../API/ApiCalls/getExpenses";
import getExpenditure from "../../API/ApiCalls/getExpenditure";
import getInvestments from "../../API/ApiCalls/getInvestments";
import getInvestmentsTableData from "../../API/ApiCalls/getInvestmentsTableData";
import TableLoader from "../../components/Loaders/TableLoader";
import { useState } from "react";
import StyledHeaderCell from "../../components/tableComponents/StyledHeaderCell";
import TableNoData from "../../components/tableComponents/TableNoData";

export default function HomePage() {
  const {
    isFetching: ExpensesIsFetching,
    isError: ExpensesIsError,
    isLoading: ExpensesIsLoading,
    data: ExpensesData,
    isSuccess: ExpensesIsSuccess,
  } = useQuery("Expenses", getExpenses, { refetchOnWindowFocus: false });
  const {
    isFetching: ExpenditureIsFetching,
    isError: ExpenditureIsError,
    isLoading: ExpenditureIsLoading,
    data: ExpenditureData,
    isSuccess: ExpenditureIsSuccess,
  } = useQuery("Expenditure", getExpenditure, { refetchOnWindowFocus: false });
  const {
    isFetching: InvestmentsIsFetching,
    isError: InvestmentsIsError,
    isLoading: InvestmentsIsLoading,
    data: InvestmentsData,
    isSuccess: InvestmentsIsSuccess,
  } = useQuery("Investments", getInvestments, { refetchOnWindowFocus: false });

  const {
    isFetching: tableIsFetching,
    isError: tableIsError,
    isLoading: tableIsLoading,
    data: tableData,
    isSuccess: tableIsSuccess,
    refetch: tableRefetch,
  } = useQuery("InvestmentsTable", getInvestmentsTableData, {
    enabled: false,
    refetchOnWindowFocus: false,
  });

  const pieChartItemClickHandler = (data, heading) => {
    console.log("pieChartItemClickHandler", data);
    setTableHeading(heading);
    setSubTopic(data.label);
    tableRefetch();
  };
  const [tableHeading, setTableHeading] = useState("demo label");
  const [subTopic, setSubTopic] = useState("");

  return (
    <Box sx={{ p: 3 }}>
      <Grid container flexDirection={"column"} gap={3}>
        <Grid item>
          <Grid
            container
            flexDirection="row"
            justifyContent={"space-around"}
            spacing={2}
          >
            <Grid item>
              {(ExpensesIsFetching || ExpensesIsLoading) && (
                <PieChartCardLoader />
              )}
              {ExpensesIsError && <PieChartNoData />}
              {ExpensesIsSuccess && (
                <PieChartCard
                  heading="Expenses"
                  pieChatData={ExpensesData.data}
                  onItemClickHandler={pieChartItemClickHandler}
                />
              )}
            </Grid>
            <Grid item>
              {(InvestmentsIsFetching || InvestmentsIsLoading) && (
                <PieChartCardLoader />
              )}
              {InvestmentsIsError && <PieChartNoData />}
              {InvestmentsIsSuccess && (
                <PieChartCard
                  heading="Investments"
                  pieChatData={InvestmentsData.data}
                  onItemClickHandler={pieChartItemClickHandler}
                />
              )}
            </Grid>
            <Grid item>
              {(ExpenditureIsFetching || ExpenditureIsLoading) && (
                <PieChartCardLoader />
              )}
              {ExpenditureIsError && <PieChartNoData />}
              {ExpenditureIsSuccess && (
                <PieChartCard
                  heading="Expenditure"
                  pieChatData={ExpenditureData.data}
                  onItemClickHandler={pieChartItemClickHandler}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {(tableIsLoading || tableIsFetching) && (
            <Box sx={{ display: "flex", gap: 2 }}>
              <Skeleton
                variant="rounded"
                animation="wave"
                width={150}
                height={30}
              />{" "}
              <Typography variant="h4">-</Typography>
              <Skeleton
                variant="rounded"
                animation="wave"
                width={150}
                height={30}
              />
            </Box>
          )}
          {tableIsSuccess && (
            <Typography gutterBottom variant="h4">
              {sessionStorage.getItem("headingLabel")} -
              {sessionStorage.getItem("subTopicLabel")}
            </Typography>
          )}
          {tableIsError && <TableNoData />}
        </Grid>
        {/* table start */}
        <Grid item>
          {(tableIsFetching || tableIsLoading) && <TableLoader />}
          {tableIsSuccess && (
            <>
              <TableContainer
                component={Paper}
                elevation={6}
                sx={{ maxHeight: 400 }}
              >
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <StyledHeaderCell>LABEL</StyledHeaderCell>
                      <StyledHeaderCell>VALUE</StyledHeaderCell>
                      <StyledHeaderCell>xyz</StyledHeaderCell>
                      <StyledHeaderCell>123</StyledHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.data.map((item) => (
                      <TableRow key={item.label}>
                        <TableCell>{item.label}</TableCell>
                        <TableCell>{item.value}</TableCell>
                        <TableCell>{item.x}</TableCell>
                        <TableCell>{item.y}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
