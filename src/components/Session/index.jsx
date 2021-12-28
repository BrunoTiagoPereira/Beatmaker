import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";

export default function Session(props){

    return(
        <GridContainer {...props.GridContainerProps}>
            <GridItem xs={12} {...props.GridItemProps}>
                {props.children}
            </GridItem>
        </GridContainer>
    )

} 