import { useNavbarRoutes } from "../../hooks/useNavbarRoutes"
import { cn } from "../../lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {

  const navbarRoutes = useNavbarRoutes()
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {navbarRoutes?.map((item) => (
        <span
          className={cn("text-sm font-medium transition-colors hover:text-primary", item.active && "text-primary")}
          onClick={item.navigate}
        >
          {item.label}
        </span>
      ))}
    </nav>
  )
}
