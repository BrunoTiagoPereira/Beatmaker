import { StyledGridContainer } from './styles'
export default function GridContainer(props){

    return (
        <StyledGridContainer container {...props}>
            {props.children}
        </StyledGridContainer>
    )
}