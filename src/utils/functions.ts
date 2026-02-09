import { useEffect, useRef, useState } from "react";

export function getMenuItems() {
	const menuItems = [
		{ path: "/", label: "Home" },
		{ path: "/projects", label: "Projects" },
		{ path: "/skills", label: "Skills" }
	];
	return menuItems;
}

export function hitungUmur(tanggalLahir: string): number {
	const birthDate = new Date(tanggalLahir);
	const today = new Date();

	let umur = today.getFullYear() - birthDate.getFullYear();
	const bulanSelisih = today.getMonth() - birthDate.getMonth();

	if (
		bulanSelisih < 0 ||
		(bulanSelisih === 0 && today.getDate() < birthDate.getDate())
	) {
		umur--;
	}

	return umur;
}

export function useInViewRepeat() {
	const triggerRef = useRef<HTMLDivElement | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setVisible(entry.isIntersecting);
			},
			{
				rootMargin: "-30% 0px -30% 0px",
				threshold: 0
			}
		);

		if (triggerRef.current) observer.observe(triggerRef.current);
		return () => observer.disconnect();
	}, []);

	return { triggerRef, visible };
}
