import { toast } from 'sonner';
import { BASE_URL } from '../consts';

export async function apiClient(endpoint: string, options: RequestInit = {}) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: { 'Content-Type': 'application/json', ...options.headers },
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || `HTTP ${res.status}: ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    if (error instanceof Error) toast.error(error.message);
    throw error;
  }
}
