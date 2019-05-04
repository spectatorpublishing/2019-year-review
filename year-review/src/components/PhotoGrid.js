import React from 'react'
import styled from 'styled-components'
import ImageBox from './ImageBox/ImageBox'

const Grid = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 50% 50%; 
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;

function PhotoGrid(props){
    const grid = props.data.map((data, i) => <ImageBox key={i} data={data}/>);
    return (
        <Grid>{grid}</Grid>
    ); 
 
}
export default PhotoGrid;

