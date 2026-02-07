import { useState, useEffect } from "react";


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
        // Simple fetch to the API or fallback to local JSON if needed
        // For this presentation context, we prioritized local JSON to ensure stability
        // But implementing a fallback logic here for completeness :
        
        let resultData: Iprogram[] = [];
        
        try {
            // Try fetching from API first if configured
            if (BASE_URL) {
                const res = await fetch(`${BASE_URL}/our-programs`);
                if (res.ok) {
                    const json = await res.json();
                    resultData = json.data;
                }
            }
        } catch (e) {
            console.warn("API fetch failed, falling back to local data", e);
        }

        // If no data from API, load from local public file
        if (resultData.length === 0) {
             const res = await fetch("/data/our-programs.json");
             if (!res.ok) throw new Error("Failed to load local data");
             const json = await res.json();
             resultData = json.data;
        }

        setData(resultData);
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
