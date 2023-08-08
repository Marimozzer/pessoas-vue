import DashboardView from '@/views/DashboardView'
import ControleDePessoasView from '@/views/ControleDePessoasView'
import PessoasView from '@/views/PessoasView'


const routes = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      title: 'Dashboard'
    },
    {
        path: '/controle-de-pessoas',
        name: 'ControleDePessoas',
        component: ControleDePessoasView,
        title: 'Pessoas'
    },
    {
      path: '/controle-de-pessoas/novo',
      name: 'AdicionarPessoa',
      component: PessoasView,
      title: 'Adicionar Pessoas'
   },
   {
    path: '/controle-de-pessoas/editar',
    name: 'EditarPessoa',
    component: PessoasView,
    title: 'Editar Pessoa'
    },
    {
      path: '/controle-de-pessoas/excluir',
      name: 'ExcluirPessoa',
      component: PessoasView,
      title: 'Excluir Pessoa'
      },
    
  ];
  
export default routes