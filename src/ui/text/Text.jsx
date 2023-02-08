import styled from "styled-components";

// import './text.module.css'
// export const Text = (props) => {
//     const classes = props.bold ? "bold" : ""
//     return <div className={classes}>
//         {props.children}
//         </div>
// }

export const TextWrapper = styled.div `
    color:${(props => props.color || '#fff')} ;
    font-weight: ${(props) => props.bold ? 900 : ""};
`;

export const Text = (props) => {
    return <TextWrapper {...props}>{props.children} </TextWrapper>
}