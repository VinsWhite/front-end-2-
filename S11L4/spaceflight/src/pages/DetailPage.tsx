import React from 'react'
import { useParams } from 'react-router-dom'

interface DetailPage {
    news: { id: number, title: string; image_url: string; updated_at: string }[];
}

export default function DetailPage() {

    const params = useParams();

  return (
    <>
        <h3 className='ms-2'>Pagina dettaglio numero: {params.id}</h3>
    </>
  )
}
