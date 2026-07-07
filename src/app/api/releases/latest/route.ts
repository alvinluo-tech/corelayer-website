const GITHUB_API =
  "https://api.github.com/repos/alvinluo-tech/CoreLayer/releases/latest";

interface GitHubAsset {
  name: string;
  browser_download_url: string;
}

export const revalidate = 300;
export const dynamic = "force-dynamic";

export async function GET() {
  const response = await fetch(GITHUB_API, {
    headers: {
      Accept: "application/vnd.github+json",
    },
    next: { revalidate },
  });

  if (!response.ok) {
    return Response.json(
      { error: "Failed to fetch release info" },
      { status: response.status }
    );
  }

  const release = await response.json();
  const assets = ((release.assets ?? []) as GitHubAsset[]).map((asset) => ({
    name: asset.name,
    browser_download_url: asset.browser_download_url,
  }));

  return Response.json(
    { tag_name: release.tag_name, assets },
    {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600",
      },
    }
  );
}
