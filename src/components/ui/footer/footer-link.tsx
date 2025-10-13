import type { Route } from 'next'
import Link from 'next/link'

interface FooterLinkProps {
	href: string
	text: string
}

export default function FooterLink({ href, text }: FooterLinkProps) {
	const isInternal = href.startsWith('/')

	if (isInternal) {
		return (
			<Link className="hover:underline" href={href as Route}>
				{text}
			</Link>
		)
	}

	return (
		<a
			className="hover:underline"
			href={href}
			rel="noopener noreferrer"
			target="_blank"
		>
			{text}
		</a>
	)
}
