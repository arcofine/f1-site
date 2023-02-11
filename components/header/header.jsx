import React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";

export default function Header({data}) {
       const [visible, setVisible] = useState(false);
       const toggleDrawer = () => {
              setVisible(!visible);
       };
       return (
              <>
                     <Box sx={{flexGrow: 1}}>
                            <AppBar position="fixed" component="nav">
                                   <Toolbar>
                                          <Box
                                                 sx={{
                                                        width: 50,
                                                        height: 60,
                                                        position: "relative",
                                                        marginRight: 3,
                                                 }}>
                                                 <Link href="/">
                                                        <Image
                                                               priority
                                                               src="/images/logoBlanc.png"
                                                               className
                                                               fill
                                                               alt=""
                                                        />
                                                 </Link>
                                          </Box>
                                          <Typography
                                                 variant="h6"
                                                 component="div"
                                                 sx={{flexGrow: 1, display: {xs: "block", sm: "block"}}}>
                                                 F1 Simulation
                                          </Typography>
                                          <Box sx={{flexGrow: 1, display: {sm: "none"}}} />

                                          <Box sx={{display: {xs: "none", sm: "block"}}}>
                                                 {Object.keys(data["Class Overall"]).map((x, i) => {
                                                        return (
                                                               <Button color="error" key={i}>
                                                                      <Link
                                                                             href={`/${x.substring(
                                                                                    x.indexOf(" ") + 1
                                                                             )}/${x.substring(0, x.indexOf(" "))}`}>
                                                                             {x}
                                                                      </Link>
                                                               </Button>
                                                        );
                                                 })}

                                                 {Object.keys(data)
                                                        .filter((x) => {
                                                               return !x.includes("Class");
                                                        })
                                                        .map((x, i) => {
                                                               return (
                                                                      <Button color="error" key={i}>
                                                                             {x}
                                                                      </Button>
                                                               );
                                                        })}
                                          </Box>
                                          <IconButton
                                                 size="large"
                                                 edge="End"
                                                 color="inherit"
                                                 aria-label="menu"
                                                 sx={{mr: 2, display: {sm: "none"}}}>
                                                 <MenuIcon />
                                          </IconButton>
                                   </Toolbar>
                            </AppBar>
                     </Box>
              </>
       );
}
