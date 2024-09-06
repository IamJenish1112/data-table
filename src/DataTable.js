import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  CircularProgress,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ArrowDropDown, ArrowDropUp, ArrowUpward } from "@mui/icons-material";

function DataTable({
  headCols = [],
  rows = [],
  page = 0,
  rowsPerPage = 5,
  totalRecords = 0,
  handleChangePage = () => {},
  handleChangeRowsPerPage = () => {},
  searchBarPosition = "center",
  searchRecord = () => {},
  rowsPerPageOptions = [5, 10, 25],
  datatable = true,
  searchValue = "",
  changeSortBy = () => {},
  changeOrder = () => {},
  isLoading,
  searchPlaceholder,
}) {
  const inputRef = useRef(null);
  const totalPage = Math.ceil(totalRecords / rowsPerPage);
  const [sortedName, setSortedName] = useState("");
  // Focus input only on initial mount
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <Box
      sx={{
        border: datatable ? "2px solid #e8e5e5" : "none",
        borderRadius: "5px",
        height: "auto",
        width: "100%",
      }}
    >
      {datatable && (
        <Box
          sx={{
            display: "flex",
            justifyContent: searchBarPosition,
            padding: "20px",
          }}
        >
          <input
            type="text"
            placeholder={searchPlaceholder}
            onChange={(e) => searchRecord(e)}
            ref={inputRef}
            value={searchValue}
            style={{
              width: "200px",
              height: "35px",
              fontSize: "20px",
              borderRadius: "5px",
              border: "2px solid gray",
              paddingLeft: "10px",
            }}
          />
        </Box>
      )}
      <TableContainer
        sx={{
          maxHeight: datatable ? "290px" : "max-content",
          height: datatable ? "290px" : "max-content",
        }}
      >
        {isLoading ? (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"300px"}
          >
            <CircularProgress color="inherit" />
            <Typography align="center" variant="h5" marginLeft={"10px"}>
              Loading...
            </Typography>
          </Box>
        ) : (
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                {headCols.map((col) => (
                  <TableCell
                    key={col.id}
                    sx={{
                      border: "1px solid #ededed",
                      backgroundColor: "#dcdcdc",
                      width: col.width,
                    }}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <Typography>{col.name}</Typography>
                      {col.sorting ? (
                        <>
                          <button
                            style={{
                              backgroundColor: "transparent",
                              padding: "0px",
                              border: "none",
                              color:
                                col.order === "asc" &&
                                col.sortingName === sortedName
                                  ? "white"
                                  : "black",
                            }}
                            onClick={() => {
                              changeSortBy(col.sortingName);
                              changeOrder("asc");
                              setSortedName(col.sortingName);
                            }}
                          >
                            <ArrowDropUp />
                          </button>
                          <button
                            onClick={() => {
                              changeSortBy(col.sortingName);
                              changeOrder("desc");
                              setSortedName(col.sortingName);
                            }}
                            style={{
                              backgroundColor: "transparent",
                              padding: "0px",
                              border: "none",
                              color:
                                col.order === "desc" &&
                                col.sortingName === sortedName
                                  ? "white"
                                  : "black",
                            }}
                          >
                            <ArrowDropDown />
                          </button>
                        </>
                      ) : (
                        ""
                      )}
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={headCols.length}
                    align="center"
                    sx={{ backgroundColor: "white" }}
                  >
                    <Typography variant="h6">Record not found</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                rows.map((row, index) => (
                  <TableRow key={`r${index}`}>
                    {row.map((col, index1) => (
                      <TableCell
                        key={`r${index}c${index1}`}
                        sx={{
                          border: "1px solid #c2c2c2",
                          backgroundColor: "white",
                          fontFamily: "Times New Roman",
                          fontSize: "18px",
                          width: headCols[index1].width,
                        }}
                      >
                        {col}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      {datatable && (
        <Box
          padding={2}
          display={"flex"}
          justifyContent={"space-between"}
          sx={{ boxShadow: "0px -1px 10px #dcdcdc" }}
        >
          <span>
            Records Per Page &nbsp;
            <select
              onChange={handleChangeRowsPerPage}
              style={{
                backgroundColor: "transparent",
                height: "30px",
                borderRadius: "5px",
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </span>
          <Box display={"flex"} alignItems={"center"}>
            {rowsPerPage * page + 1}-{rowsPerPage * page + rows.length}
            &nbsp; of &nbsp;
            {totalRecords}
            <Pagination
              shape="rounded"
              color="primary"
              count={totalPage}
              page={page + 1 < totalPage ? page + 1 : totalPage}
              onChange={handleChangePage}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default DataTable;
