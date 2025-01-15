"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useParams } from 'next/navigation';
import { MouseEventHandler } from 'react';

interface ActiveLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
    exact?: boolean;
    shallow?: boolean;
    onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({
    href,
    children,
    className = '',
    activeClassName = 'text-accent-400',
    shallow,
    exact = false,
    onClick,
    ...props
}) => {
    const pathname = usePathname();
    const { lang } = useParams();
    const isActive = exact
        ? pathname === href
        : pathname.endsWith(href) || pathname.endsWith(`/${lang}${href}`);

    return (
        <Link
            href={href}
            shallow={shallow}
            onClick={onClick}
            className={cn(
                className,
                'w-full cursor-pointer hover:text-accent-400 active:text-accent-400 transition-all',
                isActive && activeClassName
            )}
            {...props}
        >
            {children}
        </Link>
    );
};