import Image from 'next/image'

interface ContentSectionProps {
	title: string
	text1: string
	text2: string
	imageUrl: string
	imagePosition: 'left' | 'right'
}

export default function ContentSection({
	title,
	text1,
	text2,
	imageUrl,
	imagePosition,
}: ContentSectionProps) {
	const imageContainer = (
		<div className="w-full p-4 md:w-1/2">
			<div className="relative w-full overflow-hidden rounded-lg border-4 border-white shadow-lg">
				<Image
					alt="Placeholder Image"
					className="h-auto w-full rounded-md object-cover shadow-xl"
					height={800}
					src={imageUrl}
					width={1200}
				/>
			</div>
		</div>
	)

	const textContainer = (
		<div className="w-full p-4 md:w-1/2">
			<h2 className="mb-4 font-bold text-2xl">{title}</h2>
			<p className="mb-4">{text1}</p>
			<p>{text2}</p>
		</div>
	)

	return (
		<div className="mb-8 w-full rounded-lg bg-black/40 p-6 text-foreground shadow-2xl backdrop-blur-sm md:w-4/6">
			<div
				className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
			>
				{imageContainer}
				{textContainer}
			</div>
		</div>
	)
}
