import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await client.getEntries({
          content_type: "projects",
          order: "sys.createdAt",
        });
        const fetchedProjects = response.items.map((item) => {
          const { title, tags, image, url, githubUrl } = item.fields;
          const id = item.sys.id;
          const img = image?.fields?.file?.url;
          return {
            id,
            title,
            tags,
            image: img,
            url,
            githubUrl,
          };
        });

        setProjects(fetchedProjects);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return { isLoading, projects };
};
