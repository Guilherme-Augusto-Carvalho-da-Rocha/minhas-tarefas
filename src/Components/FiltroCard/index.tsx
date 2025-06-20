import * as S from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

const FiltroCard = (props: Props) => {
  return (
    <S.Card ativo={props.ativo}>
      <S.Contador>{props.contador}</S.Contador>
      <S.Label>{props.legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
