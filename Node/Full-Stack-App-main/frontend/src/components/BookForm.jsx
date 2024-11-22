import { useState } from 'react'
import './BookForm.css'
import { useNavigate } from 'react-router-dom';

export default function BookForm() {

    const [bookData, setBookData] = useState({
        isbn: '',
        title: '',
        author: '',
        description: '',
        publishedAt: '',
        genre: '',
        noOfPages: 0,
        imageUrl: ''
    })

    const navigate = useNavigate()


    async function handleSubmit(e){
        e.preventDefault();

        const response = await fetch('http://localhost:8586/books', {
            method: 'post',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(bookData)
        });

        const json = await response.json();

        if(!json.success){
            alert('Couldnt create book');
            return;
        }

        const createBook = json.data

        navigate(`/books/${createBook.id}`)
        
    }

    return (
        <form onSubmit={handleSubmit}>
          <h1>Book Form</h1>
          <input
            type="text"
            name="isbn"
            value={bookData.isbn}
            onInput={(e) => setBookData({ ...bookData, isbn: e.target.value })}
            placeholder="ISBN"
          />
          <input
            type="text"
            name="title"
            value={bookData.title}
            onInput={(e) => setBookData({ ...bookData, title: e.target.value })}
            placeholder="Title"
          />
          <input
            type="text"
            name="author"
            value={bookData.author}
            onInput={(e) => setBookData({ ...bookData, author: e.target.value })}
            placeholder="Author"
          />
          <input
            type="text"
            name="description"
            value={bookData.description}
            onInput={(e) =>
              setBookData({ ...bookData, description: e.target.value })
            }
            placeholder="Description"
          />
          <input
            type="date"
            name="publishedAt"
            value={bookData.publishedAt}
            onInput={(e) =>
              setBookData({ ...bookData, publishedAt: e.target.value })
            }
          />
          <select
            value={bookData.genre}
            onChange={(e) => setBookData({ ...bookData, genre: e.target.value })}
          >
            <option value="">No Genre</option>
            <option value="romance">Romance</option>
            <option value="dystopian">Dystopian</option>
            <option value="horror">Horror</option>
            <option value="historical">Historical</option>
            <option value="philosophical">Philosophical</option>
            <option value="psychological">Psychological</option>
            <option value="classic">Classic</option>
            <option value="satire">Satire</option>
            <option value="biography">Biography</option>
            <option value="fantasy">Fantasy</option>
            <option value="adventure">Adventure</option>
            <option value="fiction">Fiction</option>
          </select>
          <input
            type="number"
            name="noOfPages"
            value={bookData.noOfPages}
            onInput={(e) => setBookData({ ...bookData, noOfPages: e.target.value })}
            placeholder="Number of Pages"
          />
          <input
            type="url"
            name="imageUrl"
            value={bookData.imageUrl}
            onInput={(e) => setBookData({ ...bookData, imageUrl: e.target.value })}
            placeholder="Image URL"
          />
          <button type="submit" value="Save">
            Submit
          </button>
        </form>
      );
}