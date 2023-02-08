import { NavItem } from "../NavItem";
import { Title } from "../Title";
import * as S from "./styles";
 

const items = [
  "Página Inicial",
  "Pesquisa",
  "Explorar",
  "Reels",
  "mensagens",
  "Notificações",
  "Criar",
  "Perfil",
];


export const Navbar = (props) => {
    return (
    <>
    <S.NavbarWrapper>
      <S.Box>
        <S.Box>
          <Title />
        </S.Box>
        <S.Box>
          {items.map(item=>(
            <NavItem key={item} text={item}/>
          ))}
        </S.Box>
      </S.Box>
      <NavItem text="Mais"/>
      </S.NavbarWrapper>
      </>
    );
  };