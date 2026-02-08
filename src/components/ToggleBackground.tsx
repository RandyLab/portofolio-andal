type ToggleBackgroundProps = {
	enabled: boolean;
	onToggle: () => void;
};

export default function ToggleBackground({
	enabled,
	onToggle
}: ToggleBackgroundProps) {
	return (
		<button
			onClick={onToggle}
			className="fixed bottom-6 right-6 z-50 rounded-full
				bg-indigo-600 px-4 py-2 text-sm font-medium text-white
				shadow-lg hover:bg-indigo-500 transition"
		>
			{enabled ? "Static BG" : "Scroll BG"}
		</button>
	);
}
