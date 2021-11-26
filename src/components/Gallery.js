import React from 'react'
import ItemSummary from './ItemSummary';
import Search from './Search';

export default function Gallery() {

    const searchResults = [
        {
            "Title": "Mystic Pizza",
            "Year": "1988",
            "imdbID": "tt0095690",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTU1NDk1MTkzMF5BMl5BanBnXkFtZTcwMzY0MDQ1NA@@._V1_SX300.jpg"
        },
        {
            "Title": "Two Guys, a Girl and a Pizza Place",
            "Year": "1998–2001",
            "imdbID": "tt0137330",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BN2I3NWRlYzYtMDNkZS00NmJlLWIyYzctYzkwODM3YWRiZjk1XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg"
        },
        {
            "Title": "Pizza",
            "Year": "2012",
            "imdbID": "tt2585562",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDc3MTM0ZDItZjcwMy00MmI5LTlhMTctYmQ4NjM1MDM5MTRlXkEyXkFqcGdeQXVyODk1MzE5NDA@._V1_SX300.jpg"
        },
        {
            "Title": "Fat Pizza",
            "Year": "2003",
            "imdbID": "tt0340110",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTFhMzE2NzgtYWJlYS00NWVkLWJkYTgtMTliZDZjNjg4MmMzXkEyXkFqcGdeQXVyMjMyNTkxNzY@._V1_SX300.jpg"
        },
        {
            "Title": "Pizza, birra, faso",
            "Year": "1998",
            "imdbID": "tt0145393",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BY2E3YTVkYzUtNTljOC00NDg2LTlkNmQtYzJkMjAyOGFjMzI1XkEyXkFqcGdeQXVyMzU1ODUxOTk@._V1_SX300.jpg"
        },
        {
            "Title": "The Pizza Triangle",
            "Year": "1970",
            "imdbID": "tt0065662",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMmFiYmMxZjktMzBhMi00Njk5LWFiNjItMjAzOGQ2ZjZjOTI1XkEyXkFqcGdeQXVyMzIzNDU1NTY@._V1_SX300.jpg"
        },
        {
            "Title": "Pizza",
            "Year": "2014",
            "imdbID": "tt3794302",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDk4YmQxZGQtNjNmOC00ZmVhLWI4ZDEtMGE2ZGY2NjVhZjFlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
            "Title": "Pizza My Heart",
            "Year": "2005",
            "imdbID": "tt0446016",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTgyNzE2OTkxMF5BMl5BanBnXkFtZTgwOTAzMDAxMzE@._V1_SX300.jpg"
        },
        {
            "Title": "Pizza",
            "Year": "2005",
            "imdbID": "tt0376827",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTkyMjU3MzgyMF5BMl5BanBnXkFtZTgwNjMyOTkwMzE@._V1_SX300.jpg"
        },
        {
            "Title": "Samurai Pizza Cats",
            "Year": "1990–1991",
            "imdbID": "tt0122834",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZjhkZTZhMGMtYzdjZC00Yzc0LWEyYjgtZGJkNDI3MDBhYzllXkEyXkFqcGdeQXVyNTk5ODg4NDA@._V1_SX300.jpg"
        },
        {
            "Title": "Mystic Pizza",
            "Year": "1988",
            "imdbID": "tt0095690",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTU1NDk1MTkzMF5BMl5BanBnXkFtZTcwMzY0MDQ1NA@@._V1_SX300.jpg"
        },
        {
            "Title": "Two Guys, a Girl and a Pizza Place",
            "Year": "1998–2001",
            "imdbID": "tt0137330",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BN2I3NWRlYzYtMDNkZS00NmJlLWIyYzctYzkwODM3YWRiZjk1XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg"
        },
        {
            "Title": "Pizza",
            "Year": "2012",
            "imdbID": "tt2585562",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDc3MTM0ZDItZjcwMy00MmI5LTlhMTctYmQ4NjM1MDM5MTRlXkEyXkFqcGdeQXVyODk1MzE5NDA@._V1_SX300.jpg"
        },
        {
            "Title": "Fat Pizza",
            "Year": "2003",
            "imdbID": "tt0340110",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTFhMzE2NzgtYWJlYS00NWVkLWJkYTgtMTliZDZjNjg4MmMzXkEyXkFqcGdeQXVyMjMyNTkxNzY@._V1_SX300.jpg"
        },
        {
            "Title": "Pizza, birra, faso",
            "Year": "1998",
            "imdbID": "tt0145393",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BY2E3YTVkYzUtNTljOC00NDg2LTlkNmQtYzJkMjAyOGFjMzI1XkEyXkFqcGdeQXVyMzU1ODUxOTk@._V1_SX300.jpg"
        },
        {
            "Title": "The Pizza Triangle",
            "Year": "1970",
            "imdbID": "tt0065662",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMmFiYmMxZjktMzBhMi00Njk5LWFiNjItMjAzOGQ2ZjZjOTI1XkEyXkFqcGdeQXVyMzIzNDU1NTY@._V1_SX300.jpg"
        },
        {
            "Title": "Pizza",
            "Year": "2014",
            "imdbID": "tt3794302",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDk4YmQxZGQtNjNmOC00ZmVhLWI4ZDEtMGE2ZGY2NjVhZjFlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
            "Title": "Pizza My Heart",
            "Year": "2005",
            "imdbID": "tt0446016",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTgyNzE2OTkxMF5BMl5BanBnXkFtZTgwOTAzMDAxMzE@._V1_SX300.jpg"
        },
        {
            "Title": "Pizza",
            "Year": "2005",
            "imdbID": "tt0376827",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTkyMjU3MzgyMF5BMl5BanBnXkFtZTgwNjMyOTkwMzE@._V1_SX300.jpg"
        },
        {
            "Title": "Samurai Pizza Cats",
            "Year": "1990–1991",
            "imdbID": "tt0122834",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZjhkZTZhMGMtYzdjZC00Yzc0LWEyYjgtZGJkNDI3MDBhYzllXkEyXkFqcGdeQXVyNTk5ODg4NDA@._V1_SX300.jpg"
        }
    ];

    return (
        <div className="container">
            <Search/>
            <div className = "search-results">
                {searchResults.map(result => <ItemSummary item={result} key={result.imdbID}/>)}
            </div>
        </div>
    )
}
