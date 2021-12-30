import styled from 'styled-components';
import {Grid} from '@mui/material'

export const StyledGridContainer = styled(Grid)`


    background-color: ${props=>props.backgroundColor};
    width: ${props=>props.width};
    min-height: ${props=>props.minHeight};


`;