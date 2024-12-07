import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

//vamos fazer a desestruturação do objeto props
const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)
export default Paragrafo
