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
		code: "https://github.com/yanndubs/invariant-self-supervised-learning",
		twitter: "https://x.com/gaganjain1582/status/1813951259222921629",
		categories: ["Vision", "Efficiency", "Selected Papers"],
	},
	{
		title: "Mixture of Nested Experts: Adaptive Processing of Visual Tokens",
		authors: "Nidhi Hegde, Aditya Kusupati, Arsha Nagrani, Shyamal Buch, Prateek Jain, Anurag Arnab, Sujoy Paul",
		tldr: "Token-wise routing between nested experts for tackling redundancy in visual modalities.",
		date: "2024-05-22",
		venue: "NeurIPS 2024",
		teaser: "/mone.png",
		paper: "https://arxiv.org/abs/2407.19985",
		code: "https://github.com/yanndubs/invariant-self-supervised-learning",
		twitter: "https://x.com/gaganjain1582/status/1820107343369035819",
		categories: ["Vision", "Efficiency", "Mixture of Experts", "Conditional Computation", "Selected Papers"],
	},
	{
		title: "Bayesian Collaborative Bandits with Thompson Sampling for Improved Outreach in Maternal Health",
		authors: "Arpan Dasgupta, Arun Suggala, Karthikeyan Shanmugam, Milind Tambe, Aparna Taneja",
		tldr: "An improved collaborative bandits approach with bayesian regret derivation for a special case!",
		date: "2024-10-11",
		venue: "AAMAS 2025",
		teaser: "/eluder.png",
		paper: "https://arxiv.org/abs/2410.21405",
		code: "https://github.com/yanndubs/invariant-self-supervised-learning",
		twitter: "https://x.com/gaganjain1582/status/1820107343369035819",
		categories: ["Reinforcement Learning", "Theory", "Societal Impact", "Selected Papers"],
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
		twitter: "https://x.com/gaganjain1582/status/1820107343369035819",
		categories: ["Vision", "Efficiency", "Conditional Computation", "Selected Papers"],
	},
];

export default function PublicationsPage() {
	// Sort publications by date descending (reverse chronological)
	const sortedPublications = [...publications].sort((a, b) => b.date.localeCompare(a.date));
	return (
		<div className="min-h-screen flex flex-col relative overflow-hidden bg-black">
			<main className="min-h-screen flex flex-col items-center justify-start bg-black/90 px-4 pt-32 pb-16">
				<h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-10 tracking-tight">
					All Publications
				</h1>
				<section className="w-full max-w-3xl mb-12 animate-fade-in-up delay-400">
					{sortedPublications.map((pub, idx) => (
						<div
							key={idx}
							className="flex flex-wrap items-center gap-8 bg-gradient-to-br from-blue-900/60 to-yellow-900/40 rounded-2xl p-8 shadow-2xl border border-blue-400/20 backdrop-blur-md mb-8"
						>
							{pub.teaser && (
								<Image
									src={pub.teaser}
									alt={pub.title + " teaser"}
									width={224}
									height={126}
									className="w-56 rounded-xl shadow-md mb-4 flex-shrink-0 border-2 border-blue-400/30"
									unoptimized
								/>
							)}
							<div className="flex-1 min-w-[220px]">
								<div className="text-blue-300 font-extrabold text-xl mb-1">
									{pub.title}
								</div>
								<div className="text-gray-200 font-semibold mb-1">
									{pub.authors}
								</div>
								<div className="mb-2 flex flex-wrap gap-2 items-center">
									<span className="text-blue-300 font-bold">{pub.venue}</span>
									{pub.categories?.map((cat) => (
										<span
											key={cat}
											className="bg-blue-900/40 text-blue-200 rounded-lg px-3 py-1 text-sm font-semibold"
										>
											{cat}
										</span>
									))}
								</div>
								<div className="text-gray-300 mb-2">
									<b>TL;DR:</b> {pub.tldr}
								</div>
								<div className="flex flex-wrap gap-2 mb-2">
									{pub.paper && (
										<a
											href={pub.paper}
											className="font-bold text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg px-5 py-2 shadow hover:from-blue-700 hover:to-blue-500 transition"
											target="_blank"
											rel="noopener noreferrer"
										>
											Read Paper
										</a>
									)}
									{pub.code && (
										<a
											href={pub.code}
											className="font-bold text-blue-300 bg-blue-900/40 rounded-lg px-5 py-2 shadow hover:bg-blue-800/60 transition"
											target="_blank"
											rel="noopener noreferrer"
										>
											Code
										</a>
									)}
									{pub.twitter && (
										<a
											href={pub.twitter}
											className="font-bold text-blue-400 bg-blue-900/40 rounded-lg px-5 py-2 shadow hover:bg-blue-800/60 transition"
											target="_blank"
											rel="noopener noreferrer"
										>
											Twitter
										</a>
									)}
								</div>
								<div className="text-gray-400 text-xs">{pub.date}</div>
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
