'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroContainer() {
	return (
		<div className="relative flex w-full items-center justify-center overflow-hidden p-4 md:w-5/6">
			{/* Background image container */}
			<div className="relative w-full overflow-hidden rounded-lg border-4 border-white shadow-lg">
				<Image
					alt="Background Image"
					className="h-auto w-full rounded-md object-cover shadow-xl"
					height={1200}
					src="/background.jpg"
					width={1200}
				/>

				{/* Floating text over image */}
				<motion.div
					animate={{ x: '100%' }}
					className="absolute inset-0 flex items-center justify-center"
					initial={{ x: '-100%' }}
					transition={{
						repeat: Infinity,
						repeatType: 'mirror',
						duration: 22, // slower & smooth (60 seconds)
						ease: 'linear', // ✅ constant speed
					}}
				>
					<h1 className="rounded-lg bg-black/40 px-6 py-3 text-center font-bold text-3 text-white tracking-wide shadow-2xl backdrop-blur-sm md:text-2xl">
						💻 Software Development Tutoring — Learn to Code with
						Confidence
					</h1>
				</motion.div>
			</div>
		</div>
	)
}
