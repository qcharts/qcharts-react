export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '基础水波图',
    path: 'default',
    component: () => import('./default.md')
  },
  {
    title: '自定义水波图',
    path: 'custom',
    component: () => import('./custom.md')
  }
]
