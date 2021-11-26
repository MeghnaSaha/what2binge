import React from 'react'

export default function ItemSummary({item}) {
    return (
        <div className='item-summary-container'>
            <img src={item.Poster} alt={item.Title} className='item-teaser'/>
            <div class="teaser-overlay">
                <div className="item-type-badge">
                    {item.Type}
                </div>
                <div class="teaser-overlay-text">
                    <div style={{fontWeight:'bold'}}>{item.Title}</div>
                    <div>{item.Year}</div>
                </div>
            </div>
            <div className="item-summary-name">{item.Title}</div>
        </div>
    )
}
