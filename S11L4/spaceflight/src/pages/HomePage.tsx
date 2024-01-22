// HomePage.tsx
import { Container } from "react-bootstrap";
import RowNewsComponent from "../components/RowNewsComponent";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

//dichiariamo i type per la props
interface NewsProps {
    id: number;
    title: string;
    image_url: string;
    updated_at: string;
}

export default function HomePage() {
  const [news, setNews] = useState<NewsProps[] | undefined>(undefined);

  useEffect(() => {
    axios.get('https://api.spaceflightnewsapi.net/v4/articles/')
      .then(response => {
        if (response.data && Array.isArray(response.data.results)) {
          console.log(response);
          setNews(response.data.results);
        } else {
          console.error("I dati ottenuti non contengono l'array di notizie:", response.data);
        }
      })
      .catch((error: AxiosError) => {
        console.error("Errore durante la chiamata API:", error);
      });
  }, []);
  

  return (
    <Container>
      {news && <RowNewsComponent news={news} />}
    </Container>
  );
}
