
// import { icons } from '../assets'
import Staff from '../pages/staff'
import Hiring from '../pages/hiring'
import Retirement from '../pages/retirement'

import Training from '../pages/training'
import Conferences from '../pages/conferences'


export  const userRoutes = [

  {path:  '',title: 'Staff', component: Staff },
  {path:  'hiring', title: 'Hiring', component:Hiring },
  {path:  'retirement',  title: 'Retirement', component: Retirement },
  {path:  'training', title: 'Training', component: Training },
  {path:  'conferences', title: 'Conferences', component: Conferences },  

]