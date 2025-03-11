import { useEffect, useState } from "react";

function LinkPreview({ url }) {
  const [preview, setPreview] = useState(null);
  const apiKey = "923f7b95c7090e2ce3bcdd"; // Replace with your actual Iframely API Key
  const defaultImage = "/nopreview.png"; // Replace with your actual placeholder image path

  useEffect(() => {
    async function fetchPreview() {
      try {
        const response = await fetch(
          `https://iframe.ly/api/iframely?url=${encodeURIComponent(url)}&api_key=${apiKey}`
        );
        if (!response.ok) throw new Error("Failed to fetch preview");
        const data = await response.json();
        setPreview(data);
      } catch (error) {
        console.error("Error fetching preview:", error);
      }
    }
    fetchPreview();
  }, [url]);

  if (!preview) return <div className="p-2">Loading preview...</div>;

  const imageUrl = preview.links?.thumbnail?.[0]?.href || defaultImage;

  return (
    <div className="p-1">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <img src={imageUrl} alt="Preview" className="w-full rounded-lg object-cover h-40" />
        <h3 className="text-lg font-semibold mt-2">{preview.meta?.title || "No Title Available"}</h3>
        <p className="text-sm text-gray-500">{preview.meta?.description || "No description available."}</p>
      </a>
    </div>
  );
}

export default LinkPreview;
