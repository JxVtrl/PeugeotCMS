import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiDollarSign, FiMap } from 'react-icons/fi';
import { BsArchive, BsPeople, BsWrench } from 'react-icons/bs';
import { FaCarAlt } from 'react-icons/fa';
import { RiAdminLine } from "react-icons/ri";
import { TbSteeringWheel } from "react-icons/tb";
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
      {
        id: 0,
        title: 'Editar Carro',
        route: '/carros/editar',
      },
    ],
  },
  {
    id: 8,
    title: 'Motoristas',
    icon: <TbSteeringWheel />,
    route: '/motoristas',
    visible: true,
    accordionVisible: false,
    accordion: [
      {
        id: 0,
        title: 'Novo Motorista',
        route: '/motoristas/novo',
      },
      {
        id: 0,
        title: 'Editar Motorista',
        route: '/motoristas/editar',
      },
    ],
  },
  // Configuração
  {
    id: 0,
    title: 'Configuração',
    // config icon
    icon: <BsWrench />,
    route: '/configuracao',
    visible: true,
  },
  
  {
    id: 1,
    title: 'Administradores',
    icon: <RiAdminLine />,
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
