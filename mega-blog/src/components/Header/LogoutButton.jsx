import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutButton() {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    }).catch(() => { }).finally(() => { })
  }

  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 hover:text-black m-2 bg-red-600 text-white rounded-full' onClick={logoutHandler}>
      Logout
    </button>
  )
}

export default LogoutButton