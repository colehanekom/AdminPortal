import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import AdminLogin from './pages/AdminLogin'
import Announcements from './pages/Announcements'
import ReportedIssues from './pages/ReportedIssues'
import UserProfiles from './pages/UserPorfiles'
import ContentManagement from './pages/ContentManagement'
import Notifications from './pages/Notifications'

function App() {

  return (

      <div>
         <Routes>
      <Route path="/" element={<AdminLogin />} />   
          <Route path="/admin-dashboard" element={<AdminDashboard />} />  
          <Route path="/content-management" element={<ContentManagement />} />   
          <Route path="/user-profiles" element={<UserProfiles />} />
           <Route path="/reported-issues" element={<ReportedIssues />} /> 
          <Route path="/announcements" element={<Announcements />} /> 
          <Route path='/notifications' element={<Notifications/>}/> 
          </Routes> 
      </div>
      
   
  )
}

export default App
