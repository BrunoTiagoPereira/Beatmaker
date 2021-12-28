import { StyledGridItemContainer } from './styles'
export default function GridItem(props) {

    return (
        <StyledGridItemContainer item {...props}>
            {props.children}
        </StyledGridItemContainer>
    )
}