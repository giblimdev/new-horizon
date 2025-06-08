import React from "react";
import {
  Home,
  Database,
  Users,
  Settings,
  Hotel,
  MapPin,
  Landmark,
  FileText,
} from "lucide-react";
import Link from "next/link";

interface AdminLink {
  order: number;
  label: string;
  url: string;
  icon: React.ReactNode;
}

const adminLinks: AdminLink[] = [
  {
    order: 1,
    label: "Dashboard",
    url: "/admin",
    icon: <Home className="w-5 h-5" />,
  },
  {
    order: 2,
    label: "Gestion des Equipements",
    url: "/admin/amenity",
    icon: <Database className="w-5 h-5" />,
  },
  {
    order: 3,
    label: "Gestion des Hotels",
    url: "/admin/hotel",
    icon: <Database className="w-5 h-5" />,
  },
  {
    order: 4,
    label: "Info Tourisme",
    url: "/admin/infoTourisme",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    order: 5,
    label: "Utilisateurs",
    url: "/admin/users",
    icon: <Users className="w-5 h-5" />,
  },

  {
    order: 7,
    label: "Paramètres",
    url: "/admin/settings",
    icon: <Settings className="w-5 h-5" />,
  },
];

export default function HeaderAdminNav() {
  return (
    <nav className="flex items-center space-x-6">
      {adminLinks
        .sort((a, b) => a.order - b.order)
        .map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary"
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
    </nav>
  );
}
