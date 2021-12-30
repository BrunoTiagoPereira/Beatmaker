import { Typography } from "@mui/material";
import { FlexContainer } from "../../styles";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import IconLink from "../../components/IconLink";
import {Email} from '@mui/icons-material';

const links = {
    mailto: "mailto:hkobeats@gmail.com?subject=Buy%20beats&body=Hi!%0D%0A%0D%0AI%20Wanna%20buy%20some%20beats!"
}

export default function Contact(){
    return (
        <GridContainer spacing={2}>
            <GridItem  xs={12}>
                <FlexContainer justifyContent="center" >
                    <Typography fontSize='1.5rem' variant="h4" color="white">Contact</Typography>
                </FlexContainer>
            </GridItem>
            <GridItem xs={12}>
                <GridContainer>
                    <GridItem xs={4}>
                        <FlexContainer>
                            <IconLink link={links.mailto} icon={<Email sx={{ color: "white", fontSize: '1.5rem' }} />} />
                        </FlexContainer>
                    </GridItem>
                    <GridItem xs={4}>
                        <FlexContainer>
                            <IconLink link={links.mailto} icon={<Email sx={{ color: "white", fontSize: '1.5rem' }} />} />
                        </FlexContainer>
                    </GridItem>
                    <GridItem xs={4}>
                        <FlexContainer>
                            <IconLink link={links.mailto} icon={<Email sx={{ color: "white", fontSize: '1.5rem' }} />} />
                        </FlexContainer>
                    </GridItem>
                </GridContainer>

            </GridItem>
         
        </GridContainer>
    )
}