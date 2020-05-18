const Home = () => import('views/home/Home.vue')
const More = () => import('views/more/More.vue')
const Category = () => import('views/category/Category.vue')
const Tag = () => import('views/tag/Tag')
const Archive = () => import('views/archive/Archive.vue')
const GuestBook = () => import('views/guestbook/GuestBook.vue')
const Project = () => import('views/project/Project.vue')
const About = () => import('views/about/About')
const Page = () => import('views/page/Page')


const blog = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/more',
    name: 'More',
    component: More
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/tag',
    name: 'Tag',
    component: Tag
  },
  {
    path: '/archive',
    name: 'Archive',
    component: Archive
  },
  {
    path: '/guestbook',
    name: 'GuestBook',
    component: GuestBook
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/page',
    name: 'Page',
    component: Page
  }
]

export default blog