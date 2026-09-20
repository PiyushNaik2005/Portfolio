import { useState, useEffect } from "react";

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  login: string;
  avatar_url: string;
  name: string | null;
  html_url: string;
}

const CACHE_KEY = "gh_stats_cache";
const CACHE_TTL = 1000 * 60 * 30; // 30 minutes

export function useGitHubStats(username: string) {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const { data, ts } = JSON.parse(cached);
        if (Date.now() - ts < CACHE_TTL) {
          setStats(data);
          setLoading(false);
          return;
        }
      } catch {}
    }

    fetch(`https://api.github.com/users/${username}`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: GitHubStats) => {
        setStats(data);
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }));
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [username]);

  return { stats, loading, error };
}
