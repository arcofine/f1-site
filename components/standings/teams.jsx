import * as React from "react";
import {styled} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as tools from "../../utils/common.js";

export default function Teams({data}) {
       const TEAMS = tools.GET_TABLE_CONTENT(data["Class Overall"]["Team Standings"]["teams"]);
       const query_RACES = tools.GET_TABLE_CONTENT(data["Class Overall"]["Team Standings"]["races"]);

       const StyledTableCell = styled(TableCell)(({theme}) => ({
              [`&.${tableCellClasses.head}`]: {
                     backgroundColor: theme.palette.common.black,
                     color: theme.palette.common.white,
              },
              [`&.${tableCellClasses.body}`]: {
                     fontSize: 14,
              },
       }));

       const StyledTableRow = styled(TableRow)(({theme}) => ({
              "&:nth-of-type(odd)": {
                     backgroundColor: theme.palette.action.hover,
              },
              // hide last border
              "&:last-child td, &:last-child th": {
                     border: 0,
              },
       }));

       return (
              <>
                     {query_RACES != null ? (
                            <TableContainer component={Paper}>
                                   <Table sx={{minWidth: 650}} size="small" aria-label="simple table">
                                          <TableHead>
                                                 <StyledTableRow>
                                                        <StyledTableCell
                                                               style={{fontWeight: "bolder", fontSize: "22px"}}
                                                               align="center"
                                                               padding="checkbox">
                                                               Pos
                                                        </StyledTableCell>
                                                        <StyledTableCell
                                                               style={{fontWeight: "bolder", fontSize: "22px"}}>
                                                               Driver
                                                        </StyledTableCell>
                                                        {query_RACES.map((race, i) => {
                                                               return (
                                                                      <StyledTableCell
                                                                             style={{
                                                                                    fontWeight: "bolder",
                                                                                    fontSize: "22px",
                                                                             }}
                                                                             align="center"
                                                                             key={i}
                                                                             padding="small">
                                                                             {race.substring(0, 3)}
                                                                      </StyledTableCell>
                                                               );
                                                        })}
                                                        <StyledTableCell
                                                               align="center"
                                                               padding="checkbox"
                                                               style={{fontWeight: "bolder", fontSize: "22px"}}>
                                                               PTS
                                                        </StyledTableCell>
                                                 </StyledTableRow>
                                          </TableHead>
                                          <TableBody>
                                                 {TEAMS.map((team, i) => {
                                                        return (
                                                               <StyledTableRow key={team.team_name}>
                                                                      <StyledTableCell
                                                                             size="checkbox"
                                                                             component="th"
                                                                             align="center"
                                                                             scope="row">
                                                                             {i + 1}
                                                                      </StyledTableCell>
                                                                      <StyledTableCell component="th" scope="row">
                                                                             <b>{team.team_name}</b>
                                                                             <br />
                                                                             <span>{team.team_drivers}</span>
                                                                      </StyledTableCell>
                                                                      {team.points.map((point, i) => {
                                                                             return (
                                                                                    <StyledTableCell
                                                                                           key={i + "_point"}
                                                                                           style={{
                                                                                                  textAlign: "center",
                                                                                                  position: "relative",
                                                                                                  fontSize: "16px",
                                                                                                  fontWeight: "bold",
                                                                                           }}
                                                                                           component="th"
                                                                                           scope="row">
                                                                                           {point}
                                                                                    </StyledTableCell>
                                                                             );
                                                                      })}
                                                                      <StyledTableCell
                                                                             align="center"
                                                                             component="th"
                                                                             scope="row"
                                                                             style={{
                                                                                    fontSize: "22px",
                                                                                    fontWeight: "bold",
                                                                             }}>
                                                                             {team.points_sum}
                                                                      </StyledTableCell>
                                                               </StyledTableRow>
                                                        );
                                                 })}
                                          </TableBody>
                                   </Table>
                            </TableContainer>
                     ) : (
                            <></>
                     )}
              </>
       );
}
