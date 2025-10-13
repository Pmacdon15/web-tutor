import Image from 'next/image'
import HeroContainer from '@/components/ui/hero/hero-container'

export default function Home() {
	return (
		<div className="flex flex-col font-sans mt-8 min-h-screen">
			<HeroContainer />
			<div className="flex flex-col items-center justify-center p-4">
				<div className="w-full md:w-4/6 text-white bg-black/40 p-6 rounded-lg backdrop-blur-sm shadow-2xl mb-8">
					<div className="flex flex-col md:flex-row items-center">
						<div className="w-full md:w-1/2 p-4">
							<div className="relative w-full border-4 border-white rounded-lg shadow-lg overflow-hidden">
								<Image
									alt="Placeholder Image"
									className="w-full h-auto rounded-md shadow-xl object-cover"
									height={800}
									src="/learningFlyer.png"
									width={1200}
								/>
							</div>
						</div>
						<div className="w-full md:w-1/2 p-4">
							<h2 className="text-2xl font-bold mb-4">
								My Journey into Web Development
							</h2>
							<p className="mb-4">
								I discovered my passion for software development
								at Bow Valley College. I truly enjoyed the
								program and believe in the power of education
								for self-improvement. My journey has equipped me
								with a strong foundation and a desire to help
								others learn and succeed.
							</p>
							<p>
								This is where my tutoring can help. I want to
								share my knowledge and help you build the
								confidence to achieve your goals in web
								development.
							</p>
						</div>
					</div>
				</div>
				<div className="w-full md:w-4/6 text-white bg-black/40 p-6 rounded-lg backdrop-blur-sm shadow-2xl">
					<div className="flex flex-col md:flex-row-reverse items-center">
						<div className="w-full md:w-1/2 p-4">
							<div className="relative w-full border-4 border-white rounded-lg shadow-lg overflow-hidden">
								<Image
									alt="Placeholder Image"
									className="w-full h-auto rounded-md shadow-xl object-cover"
									height={800}
									src="/learningFlyer2.png"
									width={1200}
								/>
							</div>
						</div>
						<div className="w-full md:w-1/2 p-4">
							<h2 className="text-2xl font-bold mt-6 mb-4">
								Expertise & Passion
							</h2>
							<p className="mb-4">
								I specialize in Next.js, TypeScript, and React,
								and I'm always up-to-date with the latest
								features and best practices in the Next.js
								framework. While my expertise is in the modern
								JavaScript ecosystem, many of the skills and
								knowledge I have are transferable across
								different web technologies.
							</p>
							<p>
								I love making websites and bringing ideas to
								life on the web. It's incredible that we can
								host and share our creations with the world at
								little to no cost. My goal is to help you
								experience this same passion and excitement by
								providing you with the guidance and support you
								need.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
