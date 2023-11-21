import { Link, useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import { Container, Logo, LogoutButton } from "../index"

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus
    }
  ]

  function onTapButton(path) {
    navigate(path)
    console.log(path);
  }

  return (
    <header className='py-3 shadow bg-gray-400'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to="/"> <Logo /> </Link>
          </div>
          <ul className='flex ml-auto'> {
            navItems.map((item) => item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => onTapButton(item.slug)}
                  className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full bg-blue-200 m-2 font-medium'>
                  {item.name}
                </button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header