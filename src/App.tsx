import { cn } from "tailwind-variants";

function App() {
	return (
		<div className="flex grow flex-col gap-5 p-6">
			<h1 className="font-bold text-xl">
				Popular UI trends on Pinterest/Dribbble
			</h1>
			<div className="grid grid-cols-2 gap-4 *:grid *:place-items-center *:bg-neutral-100 *:p-4">
				<div>
					<button
						className={cn(
							"gradient-border",
							"rounded-full bg-linear-to-b from-amber-400 to-orange-600 px-5 py-2 font-bold text-lg text-shadow-orange-600 text-shadow-xs text-white shadow-lg shadow-orange-500/50",
							"[--_gradient-border-before-color:var(--color-amber-200),var(--color-orange-600)30%,var(--color-orange-700)80%,var(--color-amber-400)] [--_gradient-border-before-width:2px] before:rounded-full",
						)}
						type="button"
					>
						Button
					</button>
				</div>
				<div>
					<button
						className={cn(
							"relative inset-shadow-[0_0_6px_2px_var(--color-amber-200)] z-0 overflow-clip rounded-full bg-orange-500 px-5 py-2 font-bold text-lg text-shadow-orange-600 text-shadow-xs text-white shadow-lg shadow-orange-500/50",
							"before:absolute before:top-2/3 before:right-2 before:-bottom-1/3 before:left-2 before:-z-10 before:rounded-full before:bg-yellow-200/50 before:blur before:content-['']",
						)}
						type="button"
					>
						Button
					</button>
				</div>
				<div>
					<button
						className={cn(
							"relative inset-shadow-[0_0_6px_2px_var(--color-orange-200)] z-0 overflow-clip rounded-full bg-linear-to-r from-orange-600 to-amber-500 px-5 py-2 font-bold text-lg text-shadow-orange-600 text-shadow-xs text-white shadow-lg shadow-orange-500/50",
							"before:absolute before:top-2/3 before:right-0 before:-bottom-8 before:left-4 before:-z-10 before:rounded-full before:bg-yellow-200/50 before:blur before:content-['']",
							"after:absolute after:-top-8 after:right-4 after:bottom-2/3 after:left-0 after:-z-10 after:rounded-full after:bg-yellow-200/50 after:blur after:content-['']",
						)}
						type="button"
					>
						Button
					</button>
				</div>
				<div>
					<button
						className={cn(
							"gradient-border",
							"inset-shadow-[0_6px_8px_var(--color-orange-200),0_8px_16px_var(--color-orange-400)] rounded-full bg-linear-to-b from-amber-100 to-orange-300 px-5 py-2 font-bold text-lg text-shadow-orange-600 text-shadow-xs text-white shadow-[0_4px_6px_-4px_var(--color-yellow-100),0_10px_15px_-3px_--alpha(var(--color-orange-500)/50%)]",
							"[--_gradient-border-before-color:var(--color-white),var(--color-white)5%,var(--color-orange-600)30%,var(--color-orange-500)80%,var(--color-orange-100)95%,var(--color-orange-100)] [--_gradient-border-before-width:2px] before:rounded-full",
							"[--_gradient-border-after-color:var(--color-amber-400),var(--color-orange-300)30%,var(--color-orange-400)80%,var(--color-orange-500)] after:rounded-full",
						)}
						type="button"
					>
						Button
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
