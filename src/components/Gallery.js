import React, {useState, useEffect} from 'react'
import { MOVIE_SEARCH } from '../utils/constants';
import { httpGet } from '../utils/rest';
import ItemSummary from './ItemSummary';
import ResultMessage from './ResultMessage';
import Search from './Search';
import searchIcon from '../assets/search-50.png';

export default function Gallery() {

    const [searchResultsReady, setSearchResultsReady] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const searchData = (e) => {
        e.preventDefault();
        setSearchResultsReady(false);
        console.log(searchQuery);
        httpGet(MOVIE_SEARCH(searchQuery))
        .then((response) => {
            if(response.data.Response === 'True')
                setSearchResults(response.data.Search);
            setSearchResultsReady(true);
        }, (error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        httpGet(MOVIE_SEARCH('pizza'))
        .then((response) => {
            if(response.data.Response === 'True')
                setSearchResults(response.data.Search);
            setSearchResultsReady(true);
        }, (error) => {
            console.log(error);
        });
    }, [])


    return (
        <div className="container">
            <div className="search-area">
                <form onSubmit={searchData}>
                    <input className="search-box" type="text" value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} placeholder="What are we feeling like?"/>
                    <button className="search-btn">
                        <img className='searchIcon' src={searchIcon} alt='search' />
                    </button>
                </form>
            </div>
            {searchResultsReady ?
                (searchResults.length === 0 ? 
                    <ResultMessage messageTitle='You have an atypical taste!' message='No matches found in our collection - please try a different query.'/>
                    :
                    <div className = "search-results">
                        {searchResults.map(result => <ItemSummary item={result} key={result.imdbID}/>)}
                    </div>
                )
                :
                <ResultMessage messageTitle='Loading...' message='Please wait'/>}
        </div>
    )
}
