import Table from "react-bootstrap/Table";

export default function Drivers({data}) {
       const DRIVERS = Object.values(data["Class Overall"]["Driver Standings"]["drivers"]);
       const query_RACES = Object.values(data["Class Overall"]["Driver Standings"]["races"]);
       const test = [
              {name: "armando", team: "mclaren"},
              {name: "david", team: "mclaren"},
              {name: "jeff", team: "mercedes"},
       ];

       return (
              <Table striped bordered hover responsive size="sm" variant="dark">
                     <thead>
                            <tr>
                                   <th style={{textAlign: "center"}}>Pos</th>
                                   <th>Driver</th>
                                   {query_RACES.map((race, i) => {
                                          return (
                                                 <th style={{textAlign: "center", position: "relative"}} key={i}>
                                                        {race.substring(0, 3)}
                                                 </th>
                                          );
                                   })}
                                   <th style={{textAlign: "center"}}>PTS</th>
                            </tr>
                     </thead>
                     <tbody>
                            {DRIVERS.map((driver, i) => {
                                   return (
                                          <tr key={i}>
                                                 <td>{i + 1}</td>
                                                 <td>{driver.name}</td>
                                                 {driver.points.map((point, i) => {
                                                        return (
                                                               <td
                                                                      key={i + "_point"}
                                                                      style={{
                                                                             textAlign: "center",
                                                                             position: "relative",
                                                                      }}>
                                                                      <span
                                                                             style={{
                                                                                    position: "absolute",
                                                                                    top: 0,
                                                                                    left: "5px",
                                                                                    fontSize: "11px",
                                                                                    lineHeight: "16px",
                                                                                    color: "#999",
                                                                             }}>
                                                                             {driver.positions[i]}
                                                                      </span>
                                                                      {point}
                                                               </td>
                                                        );
                                                 })}
                                                 <td style={{textAlign: "center"}}>{driver.points_sum}</td>
                                          </tr>
                                   );
                            })}
                     </tbody>
              </Table>
       );
}
