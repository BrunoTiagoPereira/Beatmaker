import { FlexContainer } from "../../styles";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";

export default function Session(props){

    return(
        <GridContainer  minHeight={'300px'} backgroundColor={props.color} {...props.GridContainerProps}>
            <GridItem xs={12} {...props.GridItemProps}>
                <FlexContainer>
                    {props.children}
                </FlexContainer>
            </GridItem>
        </GridContainer>
    )

} 