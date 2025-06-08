import Image from "next/image";

const publications = [
	{
		title: "LookupViT: Compressing Visual Information to a smaller number of tokens",
		authors: "Rajat Koner, Gagan Jain, Prateek Jain, Volker Tresp, Sujoy Paul",
		tldr: "An asyncronous version of attention with sub-quadratic scaling and superior performance.",
		date: "2024-03-08",
		venue: "ECCV 2024",
		teaser: "/lookupvit.png",
		paper: "https://arxiv.org/abs/2407.12753",
		// code: "https://github.com/yanndubs/invariant-self-supervised-learning",
		twitter: "https://x.com/gaganjain1582/status/1813951259222921629",
		categories: ["Vision", "Efficiency"],
	},
	{
		title: "Mixture of Nested Experts: Adaptive Processing of Visual Tokens",
		authors: "Nidhi Hegde, Aditya Kusupati, Arsha Nagrani, Shyamal Buch, Prateek Jain, Anurag Arnab, Sujoy Paul",
		tldr: "Token-wise routing between nested experts for tackling redundancy in visual modalities.",
		date: "2024-05-22",
		venue: "NeurIPS 2024",
		teaser: "/mone.png",
		paper: "https://arxiv.org/abs/2407.19985",
		// code: "https://github.com/yanndubs/invariant-self-supervised-learning",
		twitter: "https://x.com/gaganjain1582/status/1820107343369035819",
		categories: ["Mixture of Experts", "Conditional Computation"],
	},
	{
		title: "Bayesian Collaborative Bandits with Thompson Sampling for Improved Outreach in Maternal Health",
		authors: "Arpan Dasgupta, Arun Suggala, Karthikeyan Shanmugam, Milind Tambe, Aparna Taneja",
		tldr: "An improved collaborative bandits approach with bayesian regret derivation for a special case!",
		date: "2024-10-11",
		venue: "AAMAS 2025",
		teaser: "/eluder.png",
		paper: "https://arxiv.org/abs/2410.21405",
		// code: "https://github.com/yanndubs/invariant-self-supervised-learning",
		// twitter: "https://x.com/gaganjain1582/status/1820107343369035819",
		categories: ["Reinforcement Learning", "Theory", "Societal Impact"],
	},
	{
		title: "Masked Generative Nested Transformers with Decode Time Scaling",
		authors: "Sahil Goyal, Debapriya Tula, Pradeep Shenoy, Prateek Jain, Sujoy Paul",
		tldr: "An efficient framework for progressive decoding with nested models for faster inference.",
		date: "2024-11-15",
		venue: "ICML 2025",
		teaser: "/fastgen.png",
		paper: "https://arxiv.org/abs/2407.19985",
		code: "https://github.com/yanndubs/invariant-self-supervised-learning",
		twitter: "https://x.com/sahilgo6801/status/1888616302777974970",
		categories: ["Vision", "Efficiency", "Conditional Computation"],
	},
];

function AuroraBackground() {
	return (
		<div className="absolute inset-0 -z-10 overflow-hidden">
			<div className="aurora-1" />
			<div className="aurora-2" />
			<div className="aurora-3" />
		</div>
	);
}

export default function PublicationsPage() {
	// Sort publications by date descending (reverse chronological)
	const sortedPublications = [...publications].sort((a, b) => b.date.localeCompare(a.date));
	return (
		<div className="min-h-screen flex flex-col relative overflow-hidden">
			<AuroraBackground />
			<main className="min-h-screen flex flex-col items-center justify-start px-4 pt-32 pb-16 backdrop-blur-sm">
				<h1 className="text-4xl md:text-5xl font-extrabold text-black mb-10 tracking-tight drop-shadow-lg">
					All Publications
				</h1>
				<section className="w-full max-w-3xl grid gap-8 grid-cols-1">
					{sortedPublications.map((pub, idx) => (
						<div
							key={idx}
							className="flex flex-col md:flex-row bg-black/60 rounded-2xl p-6 shadow-2xl border border-white/10 text-gray-200 animate-fade-in-up hover:scale-[1.02] transition-transform duration-200 group"
						>
							<div className="md:w-48 w-full h-40 md:h-32 flex-shrink-0 mb-4 md:mb-0 md:mr-8 overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/40 to-yellow-900/30 flex items-center justify-center">
								{pub.teaser && (
									<Image
										src={pub.teaser}
										alt={pub.title + " teaser"}
										width={192}
										height={128}
										className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
										unoptimized
									/>
								)}
							</div>
							<div className="flex-1 flex flex-col justify-between">
								<div>
									<h3 className="text-xl font-semibold text-yellow-300 mb-1 drop-shadow-lg">
										{pub.title}
									</h3>
									<div className="text-gray-400 mb-2 text-sm">
										{pub.authors}
									</div>
									<div className="mb-2 flex flex-wrap gap-2 items-center">
										<span className="text-blue-300 font-bold">{pub.venue}</span>
										{pub.categories?.map((cat) => (
											<span
												key={cat}
												className="bg-blue-900/40 text-blue-200 rounded-lg px-3 py-1 text-xs font-semibold"
											>
												{cat}
											</span>
										))}
									</div>
									<div className="text-gray-300 mb-2">
										<b>TL;DR:</b> {pub.tldr}
									</div>
								</div>
								<div className="flex flex-wrap gap-2 mt-2">
									{pub.paper && (
										<a
											href={pub.paper}
											className="inline-flex items-center gap-2 font-bold text-white bg-gradient-to-r from-blue-500 via-blue-400 to-green-300 hover:from-yellow-400 hover:to-blue-400 hover:text-black rounded-full px-5 py-2 shadow-lg transition-all duration-200 border-2 border-blue-300/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
											target="_blank"
											rel="noopener noreferrer"
										>
											<svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-7-7 7-7-9 2-2 9z' /></svg>
											Read Paper
										</a>
									)}
									{pub.twitter && (
										<a
											href={pub.twitter}
											className="inline-flex items-center gap-2 font-bold text-blue-200 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 hover:from-blue-300 hover:to-yellow-400 hover:text-black rounded-full px-5 py-2 shadow-lg transition-all duration-200 border-2 border-blue-300/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
											target="_blank"
											rel="noopener noreferrer"
										>
											<svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d='M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 001.97-2.48 8.94 8.94 0 01-2.83 1.08A4.48 4.48 0 0016.1 4c-2.48 0-4.49 2.01-4.49 4.49 0 .35.04.7.11 1.03C7.69 9.36 4.07 7.6 1.64 4.93c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65-.72-.02-1.4-.22-1.99-.55v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.72 2.16 2.97 4.07 3a9.01 9.01 0 01-5.59 1.93c-.36 0-.71-.02-1.06-.06A12.77 12.77 0 007.29 21c8.29 0 12.83-6.87 12.83-12.83 0-.2 0-.41-.01-.61.88-.64 1.64-1.44 2.25-2.35z'/></svg>
											Twitter
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</section>
			</main>
			<footer className="w-full text-center py-6 text-gray-400 text-sm bg-black/80 border-t border-white/10 mt-8 z-30 relative">
				&copy; {new Date().getFullYear()} Gagan Jain. Powered by Next.js.
			</footer>
		</div>
	);
}
