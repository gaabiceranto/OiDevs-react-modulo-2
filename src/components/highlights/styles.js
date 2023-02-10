import styled from "styled-components";
import { Text } from "../../ui/text";

export const Wrapper = styled.div`
    margin-top: 30px;
    display:flex;
    gap:30px;
    text-align: center;
`;
export const HighlighItem = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

export const HighlighText = styled(Text)`
    margin-top:12px;
    width: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    white-space: nowrap;
`;