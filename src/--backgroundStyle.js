import styled from 'styled-components';
import img from './sun-pattern.png';


const Background = styled.div`
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
margin:auto;

background-image: url(${img});
background-size:cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    display: block;
overflow: auto;
`

export {Background}