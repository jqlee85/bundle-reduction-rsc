// The navigation menu items
export default function NavItem({href, label}: {href: string, label: string}) {
  return (
    <li className={`my-2`}><a href={href}>{label}</a></li>
  )
}