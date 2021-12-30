import { Link } from "@mui/material";
import { IconLinkContainer } from "./styles";

export default function IconLink(props){

    return (
        <Link href={props.link} target='_blank' underline="none">
            <IconLinkContainer backgroundColor='black' width='60px' minHeight='60px'>
                {props.icon}
            </IconLinkContainer>
        </Link>
     
    )

}