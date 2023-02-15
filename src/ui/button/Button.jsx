import {Text} from "../text";
import * as S from "./style";

export const Button = (props) => {
  return (
    <S.Wrapper {...props}>
      <Text>{props.children}</Text>
    </S.Wrapper>
  );
};