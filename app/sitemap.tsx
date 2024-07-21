export const WEBSITE_HOST_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mindful-eating-v2.netlify.app/";

export default function sitemap() {
  const changeFrequency = "daily";

  const routes = ["https://mindful-eating-v2.netlify.app/"].map((route) => ({
    url: `${WEBSITE_HOST_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));

  return [...routes];
}
