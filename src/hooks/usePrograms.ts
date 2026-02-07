import { useState, useEffect } from "react";
import { fetchWithFallback } from "@/lib/fetchWithFallback";

export interface Iprogram {
  id: number;
  thumbnail: string;
  judul: string;
  deskripsi: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export const usePrograms = () => {
  const [data, setData] = useState<Iprogram[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const { data: result, error: fetchError } = await fetchWithFallback<{ data: Iprogram[] }>(
          `${BASE_URL}/our-programs`,
          "/data/our-programs.json"
        );

        if (fetchError) {
          throw new Error(fetchError);
        }

        setData(result?.data || []);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  return { data, isLoading, error };
};
