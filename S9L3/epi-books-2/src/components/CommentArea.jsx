import React, { Component } from 'react'

export default class CommentArea extends Component {

    /*impostiamo lo stato dei commenti e del caricamento*/
    state = {
        comment: [],
        isLoaded: true
    } 
  
    componentDidMount() {
        fetch("https://striveschool-api.herokuapp.com/api/books/:elementId/comments", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTZmOGMwNTgzNTAwMTg1MjJjOTIiLCJpYXQiOjE3MDQ4OTYxNzIsImV4cCI6MTcwNjEwNTc3Mn0.fm9NnIfWeuouYayj8TRg4cBjQHFSBmT8Jae8w1UqOvA"
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                comments: data, // Assicurati che la risposta sia nel formato corretto e assegnala a comments
                loading: false
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            this.setState({ loading: false });
        });
    }

    render() {
    const { comments, loading } = this.state;

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
      <>
        {/* Mostra i commenti */}
        {comments && comments.map(comment => (
          <div key={comment.id}>{comment.text}</div>
        ))}
      </>
    )
  }
}

