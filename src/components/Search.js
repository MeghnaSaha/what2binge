import React, {useState} from 'react'
import searchIcon from '../assets/search-50.png';

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("");

    const searchData = (e) => {
        e.preventDefault();
        console.log(searchQuery);
    }

    return (
        <div className="search-area">
            <form onSubmit={searchData}>
                <input className="search-box" type="text" value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} placeholder="What are we feeling like?"/>
                <button className="search-btn">
                    <img className='searchIcon' src={searchIcon} alt='search' />
                </button>
            </form>
        </div>
    )
}
