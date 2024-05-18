import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiDollarSign, FiMap } from 'react-icons/fi';
import { BsArchive, BsPeople } from 'react-icons/bs';
import { FaCarAlt } from 'react-icons/fa';

type iRoutesData = {
  id: number;
  title: string;
  icon: JSX.Element;
  route: string;
  visible: boolean;
  accordionVisible?: boolean;
  accordion?: {
    id: number;
    title: string;
    route: string;
    subroutes?: {
      id: number;
      title: string;
      route: string;
    }[];
  }[];
}[];

export const RoutesData: iRoutesData = [
  // {
  //   id: 3,
  //   title: 'Usuários',
  //   icon: <BsPeople />,
  //   route: '/usuarios',
  //   visible: true,
  //   accordionVisible: false,
  //   accordion: [
  //     {
  //       id: 0,
  //       title: 'Novo Usuário',
  //       route: '/usuarios/novo',
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: 'Rotas',
  //   icon: <FiMap />,
  //   route: '/rotas',
  //   visible: false,
  // },
  // {
  //   id: 5,
  //   title: 'Clientes',
  //   icon: <BsPeople />,
  //   route: '/clientes',
  //   visible: true,
  //   accordionVisible: false,
  //   accordion: [
  //     {
  //       id: 0,
  //       title: 'Novo Cliente',
  //       route: '/clientes/novo',
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: 'Estoque',
  //   icon: <BsArchive />,
  //   route: '/estoque',
  //   visible: true,
  //   accordionVisible: true,
  //   accordion: [
  //     {
  //       id: 0,
  //       title: 'Produtos',
  //       route: '/estoque/produtos',
  //       subroutes: [
  //         {
  //           id: 0,
  //           title: 'Novo Produto',
  //           route: '/estoque/produtos/novo',
  //         },
  //       ],
  //     },
  //     {
  //       id: 1,
  //       title: 'Movimentações',
  //       route: '/estoque/movimentacoes',
  //       subroutes: [
  //         {
  //           id: 0,
  //           title: 'Nova Movimentação',
  //           route: '/estoque/movimentacoes/novo',
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: 'Locais de estoque',
  //       route: '/estoque/locais',
  //       subroutes: [
  //         {
  //           id: 0,
  //           title: 'Novo Local de estoque',
  //           route: '/estoque/locais/novo',
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    id: 7,
    title: 'Carros',
    icon: <FaCarAlt />,
    route: '/carros',
    visible: true,
    accordionVisible: false,
    accordion: [
      {
        id: 0,
        title: 'Novo Carro',
        route: '/carros/novo',
      },
    ],
  },
  {
    id: 8,
    title: 'Motoristas',
    icon: <BsPeople />,
    route: '/motoristas',
    visible: true,
    accordionVisible: false,
    accordion: [
      {
        id: 0,
        title: 'Novo Motorista',
        route: '/motoristas/novo',
      },
    ],
  },
  // Configuração
  {
    id: 0,
    title: 'Configuração',
    icon: <BiHomeAlt />,
    route: '/configuracao',
    visible: true,
    accordionVisible: true,
    accordion: [
      {
        id: 0,
        title: 'Geral',
        route: '/configuracao/geral',
      },
    ],
  },
  
  {
    id: 1,
    title: 'Administradores',
    icon: <BsPeople />,
    route: '/administradores',
    visible: true,
    accordionVisible: false,
    accordion: [
      {
        id: 0,
        title: 'Novo Administrador',
        route: '/administradores/novo',
      },
    ],
  },
];
