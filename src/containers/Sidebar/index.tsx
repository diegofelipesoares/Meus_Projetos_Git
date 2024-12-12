import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'

import { Descricao } from './styles'
import { BotaoTema } from './styles'

const Sidebar = () => (
  <aside>
    <Avatar />
    <Titulo fontSize={20}>Diego Soares</Titulo>
    <Paragrafo tipo="secundario" fontSize={16}>
      diegofelipesoares
    </Paragrafo>
    <Descricao tipo="principal" fontSize={12}>
      Engenheiro Front-end
    </Descricao>
    <BotaoTema>Trocar Tema</BotaoTema>
  </aside>
)

export default Sidebar
