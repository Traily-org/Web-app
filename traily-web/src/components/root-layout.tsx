import { NavLink, Outlet } from "react-router";

const links = [
    { to: "/", label: "Tableau de bord" },
    { to: "/photos", label: "Photos à valider" },
    { to: "/reports", label: "Signalements" },
];

export function RootLayout() {
    return (
        <div className="flex min-h-screen bg-stone-50 text-stone-900">
            <aside className="w-60 shrink-0 border-r border-stone-200 bg-white p-4">
                <p className="mb-6 text-xl font-bold text-emerald-700">
                    Traily
                </p>
                <nav className="flex flex-col gap-1">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end
                            className={({ isActive }) =>
                                `rounded-md px-3 py-2 text-sm ${
                                    isActive
                                        ? "bg-emerald-50 font-medium text-emerald-800"
                                        : "text-stone-600 hover:bg-stone-100"
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </aside>
            <main className="flex-1 p-8">
                <Outlet />
            </main>
        </div>
    );
}
