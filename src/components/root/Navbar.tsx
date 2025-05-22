import { Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useUserData, useSignOut, useAuthenticationStatus } from '@nhost/react'

export function Navbar() {
  const { isAuthenticated } = useAuthenticationStatus()
  const user = useUserData()
  const { signOut } = useSignOut()

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold tracking-tight">
          SykkelLogg
        </Link>

        <nav className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-sm text-black font-medium'
                    : 'text-sm text-muted-foreground hover:text-black'
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/log-ride"
                className={({ isActive }) =>
                  isActive
                    ? 'text-sm text-black font-medium'
                    : 'text-sm text-muted-foreground hover:text-black'
                }
              >
                Log Ride
              </NavLink>

              <Button
                variant="ghost"
                className="text-sm text-red-500 hover:text-red-600"
                onClick={() => signOut()}
              >
                Log Out
              </Button>
            </>
          ) : (
            <Button asChild>
              <Link to="/sign-in">Login</Link>
            </Button>
            
          )}
        </nav>
      </div>
    </header>
  )
}
