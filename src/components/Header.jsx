import { Avatar } from "./Avatar";
import { Button } from "../ui/Button";
import { Text } from "../ui/text";



export const Header = (props) => {
    return (
    <>
        
        <Avatar/>
        <Text bold color ="red">@adatechbr</Text>
        <Button>
            <Text>Seguindo</Text>
        </Button>
        <Button>
            <Text>Enviar Mensagem</Text>
        </Button>
        <Text bold>211 publicações</Text>
        <Text>44,2 mil seguidores</Text>
        <Text>2 seguindo</Text>
        
    </>
    )
};