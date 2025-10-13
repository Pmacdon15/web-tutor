import FooterLink from './footer-link'

export default function Footer() {
	return (
		<footer className="w-full bg-black/40 text-white p-8 mt-auto flex justify-center items-center">
			<div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
				<div className="text-center">
					<h3 className="font-bold mb-4">My Work</h3>
					<ul>
						<li>
							<FooterLink
								href="https://landscapefriend.com"
								text="landscapefriend.com"
							/>
						</li>
						<li>
							<FooterLink
								href="https://patmac.ca"
								text="patmac.ca"
							/>
						</li>
						<li>
							<FooterLink
								href="https://patchat.ca"
								text="patchat.ca"
							/>
						</li>
						<li>
							<FooterLink
								href="https://patspretrips.ca"
								text="patspretrips.ca"
							/>
						</li>
					</ul>
				</div>
				<div className="text-center">
					<h3 className="font-bold mb-4">Projects</h3>
					<ul>
						<li>
							<FooterLink
								href="https://clockout.patmac.ca"
								text="clockout.patmac.ca"
							/>
						</li>
						<li>
							<FooterLink
								href="https://www.freeqrcode.patmac.ca/"
								text="freeqrcode.patmac.ca"
							/>
						</li>
					</ul>
				</div>
				<div className="text-center">
					<h3 className="font-bold mb-4">Connect</h3>
					<ul>
						<li>
							<FooterLink
								href="https://github.com/Pmacdon15"
								text="GitHub"
							/>
						</li>
						<li>
							<FooterLink
								href="https://www.linkedin.com/in/patrick-macdonald-231640285/"
								text="LinkedIn"
							/>
						</li>
						<li>
							<FooterLink
								href="mailto:patrick@patmac.ca"
								text="patrick@patmac.ca"
							/>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}
