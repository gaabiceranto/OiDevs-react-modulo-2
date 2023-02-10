
import { Button } from "../../ui/button/index";
import { Text } from "../../ui/text";
import { TextLink } from "../../ui/text";
import { Avatar } from "../avatar";
import * as S from "./styles";



export const Header = (props) => {
    return (
    <S.HeaderBox>
        <S.AvatarBox>
            <Avatar imagePath="https://via.placeholder.com/150" />
        </S.AvatarBox>
        
        <S.Content>
            <S.Data>
                <Text bold color ="red">@adatechbr</Text>
                <Button>
                    <Text>Seguindo</Text>
                </Button>
                <Button>
                    <Text>Enviar Mensagem</Text>
                </Button>
            </S.Data>
            <S.Infos>
          <Text>Ada Tech</Text>
          <Text color="#a8a8a8" bold>
            Educação
          </Text>
          <TextLink href="https://google.com.br" target="_blank">
            Ada. A Nova Educação
          </TextLink>
          <S.Followers>
            <Text size="small">Seguido(a) por ..., ...</Text>
          </S.Followers>
        </S.Infos>
        </S.Content>

    </S.HeaderBox>

    )
};