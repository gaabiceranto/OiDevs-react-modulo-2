import { Avatar } from '../avatar'
import * as S from './styles'


const highlightList=[
    {
        image:"https://via.placeholder.com/90",
        text:"Parceiros",
    },
    {
        image:"https://via.placeholder.com/90",
        text:"Desafios",
    },
    {
        image:"https://via.placeholder.com/90",
        text:"Comunidade",
    },
    {
        image:"https://via.placeholder.com/90",
        text:"Faculdades",
    },
    {
        image:"https://via.placeholder.com/90",
        text:"Modelo Educacional",
    }
]


export const Highlights = () =>{

    return(
    <S.Wrapper>
        {highlightList.map((highlight)=>(
            <S.HighlighItem>
            <Avatar size="small" imagePath={highlight.image}/>
            <S.HighlighText>{highlight.text}</S.HighlighText>
        </S.HighlighItem>

        ))}
    
    </S.Wrapper>
    )

}