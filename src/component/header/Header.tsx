import { Box, Link } from "@mui/material";
  type IHeader={
    label:string;
    href:any;
  }
export const Header=(props:IHeader)=>{
    return(
    <>
    <Box>
            <Link underline="none" color={"black"} href={props.href}>{props.label}</Link>
       
    </Box>
    </>
    );
}