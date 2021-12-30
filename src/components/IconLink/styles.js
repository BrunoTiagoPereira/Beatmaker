import styled from 'styled-components';
export const IconLinkContainer = styled.div`


    background-color: ${props=>props.backgroundColor};
    width: ${props=>props.width};
    min-height: ${props=>props.minHeight};
    border-radius: 32px;
    border: 1px solid white;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    
    :hover{
        transform: scale(1.2);
    }
`;