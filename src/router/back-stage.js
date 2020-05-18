const Login = () => import('views/back-stage/login/Login.vue')
const Register = () => import('views/back-stage/register/Register.vue')
const Admin =() => import('views/back-stage/admin/Admin')
const Article =() => import('views/back-stage/admin/children/Article.vue')
const ArticleAdd =() => import('views/back-stage/admin/children/Article-add')


const backStage = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children:[
      {
        path:'/backStage/article',
        name: 'Article',
        component: Article
      },
      {
        path:'/backStage/articleAdd',
        name: 'ArticleAdd',
        component: ArticleAdd
      }
    ]
  }
]

export default backStage