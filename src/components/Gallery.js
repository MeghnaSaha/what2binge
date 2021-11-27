import React, {useState} from 'react'
import { httpGet } from '../utils/rest';
import ItemSummary from './ItemSummary';
import ResultMessage from './ResultMessage';
import Search from './Search';

export default function Gallery() {

    const [searchResultsReady, setSearchResultsReady] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    httpGet('https://www.omdbapi.com/?s=pizza&apikey=e4b4581b')
        .then((response) => {
            if(response.data.Response === 'True')
                setSearchResults(response.data.Search);
            setSearchResultsReady(true);
        }, (error) => {
            console.log(error);
        });


    return (
        <div className="container">
            <Search/>
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
