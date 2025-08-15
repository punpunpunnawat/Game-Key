// import type {
// 	InitialData,
// 	RoundResult,
// 	TrueSightResult,
// } from "../types/Battle";
import { environment } from "../../../environments/environments";

const API_BASE_URL = environment.apiUrl;

const request = async (
	endpoint: string,
	method: "GET" | "POST" | "PUT",
	data?: unknown,
	token?: string
) => {
	const headers: Record<string, string> = {
		"Content-Type": "application/json",
	};
	if (token) {
		headers["Authorization"] = `Bearer ${token}`;
	}

	try {
		const res = await fetch(`${API_BASE_URL}${endpoint}`, {
			method,
			headers,
			body: data ? JSON.stringify(data) : undefined,
		});

		if (!res.ok) {
			const error = await res.json().catch(() => ({}));
			throw new Error(error.message || `Error ${res.status}`);
		}

		return res.json();
	} catch (err) {
		throw new Error((err as Error)?.message || "Unknown error occurred");
	}
};

// ==================== Game ====================
export const getGame = (token: string) =>
  request("/games", "GET", undefined, token);


