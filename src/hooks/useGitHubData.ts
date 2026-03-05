// src/hooks/useGitHubData.ts
import { useState, useEffect } from "react";
import { fetchGitHubData } from "../data/profileData";

export const useGitHubData = (username: string) => {
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadData = async () => {
			try {
				setLoading(true);
				const result = await fetchGitHubData(username);
				setData(result);
			} catch (err) {
				setError("Failed to load GitHub data");
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		loadData();
	}, [username]);

	return { data, loading, error };
};
