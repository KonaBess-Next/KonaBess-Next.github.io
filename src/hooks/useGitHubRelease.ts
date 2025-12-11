import { useState, useEffect } from 'react';

interface GitHubRelease {
    tag_name: string;
    html_url: string;
    assets: {
        browser_download_url: string;
        name: string;
    }[];
}

export const useGitHubRelease = () => {
    const [data, setData] = useState<GitHubRelease | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchRelease = async () => {
            try {
                // Fetch all releases (includes pre-releases)
                const res = await fetch('https://api.github.com/repos/KonaBess-Next/KonaBess-Next/releases');
                if (!res.ok) throw new Error('Failed to fetch');
                const releases = await res.json();

                // Get the most recent release (first in array)
                if (releases && releases.length > 0) {
                    setData(releases[0]);
                } else {
                    throw new Error('No releases found');
                }
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchRelease();
    }, []);

    return { data, loading, error };
};
