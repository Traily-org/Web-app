import { Link } from "react-router";
import { PageHeader } from "@/components/page-header";

export function NotFoundPage() {
    return (
        <div>
            <PageHeader title="Page introuvable" />
            <Link to="/" className="text-emerald-700 underline">
                Retour au tableau de bord
            </Link>
        </div>
    );
}
