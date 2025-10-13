import Image from 'next/image'

interface ContentSectionProps {
	title: string
	text1: string
	text2: string
	imageUrl: string
	imagePosition: 'left' | 'right'
}

export default function ContentSection({ title, text1, text2, imageUrl, imagePosition }: ContentSectionProps) {
	const imageContainer = (
		<div className="w-full md:w-1/2 p-4">
			<div className="relative w-full border-4 border-white rounded-lg shadow-lg overflow-hidden">
				<Image
					alt="Placeholder Image"
					className="w-full h-auto rounded-md shadow-xl object-cover"
					height={800}
					src={imageUrl}
					width={1200}
				/>
			</div>
		</div>
	)

	const textContainer = (
		<div className="w-full md:w-1/2 p-4">
			<h2 className="text-2xl font-bold mb-4">{title}</h2>
			<p className="mb-4">{text1}</p>
			<p>{text2}</p>
		</div>
	)

	return (
		<div className="w-full md:w-4/6 text-white bg-black/40 p-6 rounded-lg backdrop-blur-sm shadow-2xl mb-8">
			<div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
				{imageContainer}
				{textContainer}
			</div>
		</div>
	)
}
