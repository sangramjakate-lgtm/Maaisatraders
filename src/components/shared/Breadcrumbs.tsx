import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href: string;
    active?: boolean;
}

interface Props {
    items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: Props) {
    return (
        <nav aria-label="Breadcrumb" className="flex mb-6">
            <ol className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                <li className="flex items-center">
                    <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                        <Home size={12} />
                        <span>Home</span>
                    </Link>
                </li>
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                        <ChevronRight size={10} className="text-muted-foreground/40" />
                        {item.active ? (
                            <span className="text-foreground">{item.label}</span>
                        ) : (
                            <Link href={item.href} className="hover:text-primary transition-colors">
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
