export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '基础',
    path: 'default',
    component: () => import('./default.md')
  },
  {
    title: '彩色',
    path: 'colors',
    component: () => import('./colors.md')
  },
  {
    title: '分组',
    path: 'group',
    component: () => import('./group.md')
  },
  {
    title: '堆叠',
    path: 'stack',
    component: () => import('./stack.md')
  }
]
