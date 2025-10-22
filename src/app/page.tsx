import ContentSection from '@/components/ui/content/content-section'
import { ContactForm } from '@/components/ui/forms/contact-form'
import HeroContainer from '@/components/ui/hero/hero-container'

export default function Home() {
	return (
		<div className="flex flex-col font-sans mt-8 min-h-screen items-center">
			<HeroContainer />
			<div className="flex flex-col items-center justify-center p-4 w-full">
				<ContentSection
					imagePosition="left"
					imageUrl="/learningFlyer.png"
					text1="I discovered my passion for software development at Bow Valley College. I truly enjoyed the program and believe in the power of education for self-improvement. My journey has equipped me with a strong foundation and a desire to help others learn and succeed."
					text2="This is where my tutoring can help. I want to share my knowledge and help you build the confidence to achieve your goals in web development."
					title="My Journey into Web Development"
				/>
				<ContentSection
					imagePosition="right"
					imageUrl="/learningFlyer2.png"
					text1="I specialize in Next.js, TypeScript, and React, and I'm always up-to-date with the latest features and best practices in the Next.js framework. While my expertise is in the modern JavaScript ecosystem, many of the skills and knowledge I have are transferable across different web technologies."
					text2="I love making websites and bringing ideas to life on the web. It's incredible that we can host and share our creations with the world at little to no cost. My goal is to help you experience this same passion and excitement by providing you with the guidance and support you need."
					title="Expertise & Passion"
				/>
			</div>
			
			<div className="flex flex-col items-center justify-center p-4 w-full">
				<ContactForm/>
			</div>
		</div>
	)
}
