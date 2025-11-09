import FooterLink from './footer-link'

export default function Footer() {
	return (
		<footer className="mt-auto flex w-full items-center justify-center bg-black/40 p-8 text-white">
			<div className="grid max-w-6xl grid-cols-1 justify-items-center gap-8 md:grid-cols-3">
				<div className="text-center">
					<h3 className="mb-4 font-bold">My Work</h3>
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
								href="https://yournextsite.ca"
								text="yournextsite.ca"
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
					<h3 className="mb-4 font-bold">Projects</h3>
					<ul>
						<li>
							<FooterLink
								href="https://patchat.ca"
								text="patchat.ca"
							/>
						</li>
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
					<h3 className="mb-4 font-bold">Connect</h3>
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
