// Client HTTP minimal vers le backend Go (/api/v1).
// En dev, Vite proxifie /api vers VITE_API_PROXY_TARGET (cf. vite.config.ts).
const API_BASE_URL = "/api/v1";

export class ApiError extends Error {
    readonly status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}

export async function apiFetch<T>(
    path: string,
    init?: RequestInit,
): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...init,
        headers: { "Content-Type": "application/json", ...init?.headers },
    });

    if (!response.ok) {
        throw new ApiError(response.status, await response.text());
    }

    if (response.status === 204) {
        return undefined as T;
    }
    return response.json() as Promise<T>;
}
