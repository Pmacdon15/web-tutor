'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroContainer() {
	return (
		<div className="relative flex items-center justify-center p-4 overflow-hidden">
			{/* Background image container */}
			<div className="relative w-full md:w-4/6 border-4 border-white rounded-lg shadow-lg overflow-hidden">
				<Image
					alt="Background Image"
					className="w-full h-auto rounded-md shadow-xl object-cover"
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
					<h1 className="text-3 md:text-2xl font-bold text-white bg-black/40 px-6 py-3 rounded-lg backdrop-blur-sm shadow-2xl text-center tracking-wide">
						💻 Software Development Tutoring — Learn to Code with
						Confidence
					</h1>
				</motion.div>
			</div>
		</div>
	)
}
