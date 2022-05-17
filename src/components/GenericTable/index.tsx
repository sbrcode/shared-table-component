import {
  SetStateAction,
  useCallback,
  useEffect,
  useState,
  useContext,
} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useLazyQuery } from "@apollo/client";
import { colors } from "../../theme";
import { ThemeContext } from "../../context";

const GenericTable = ({ query, titles, list }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [getData, { data }] = useLazyQuery(list);
  const { theme } = useContext(ThemeContext);
  // const [textRequest, setTextRequest] = useState("");

  useEffect(() => {
    getData({
      variables: {
        page,
        itemsPerPage: rowsPerPage,
        // searchText: textRequest,
      },
    });
  }, [getData, rowsPerPage, page]);

  const handleChangePage = useCallback(
    (e: any, newPage: SetStateAction<number>) => setPage(newPage),
    []
  );

  const handleChangeRowsPerPage = useCallback((e) => {
    setRowsPerPage(e.target.value);
    setPage(0);
  }, []);

  // const handleTextSearch = useCallback((e) => {
  //   const text = e.target.value.toLowerCase();
  //   setTextRequest(text);
  // }, []);

  const tableStyle = {
    background: theme === "light" ? colors.bgLight : colors.bgDark,
    color: theme === "light" ? colors.fontLight : colors.fontDark,
  };

  return (
    <div>
      {/* <input onChange={handleTextSearch} placeholder="Search" /> */}
      <>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {titles.map((title: string, index: number) => (
                  <TableCell sx={tableStyle} key={index}>
                    {title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.[query]?.items?.map((item) => (
                <TableRow key={item.id} hover role="checkbox" tabIndex={-1}>
                  {Object.values(item)
                    .filter((el) => el !== item.id)
                    .map((value: string, index) =>
                      typeof value !== "object" ? (
                        <TableCell sx={tableStyle} key={index}>
                          {value}
                        </TableCell>
                      ) : (
                        <TableCell sx={tableStyle} key={index}>
                          {Object.values(value)
                            .filter((el) => el !== value["id"])
                            .map(
                              (subValue: string, subIndex) =>
                                typeof subValue !== "object" && (
                                  <span key={subIndex}>{subValue} </span>
                                )
                            )}
                        </TableCell>
                      )
                    )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[3, 5]}
          component="div"
          count={data?.[query]?.paginationInfo?.totalCount || 1}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={tableStyle}
        />
      </>
    </div>
  );
};

export default GenericTable;
