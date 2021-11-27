import React from 'react'

export default function ResultMessage({messageTitle, message}) {
    return (
        <div className='result-message'>
            <h2 style={{fontSize:'3em', textAlign:'center', margin: '2em 0'}}>{messageTitle}</h2>
            <h4 style={{fontSize:'1.5em', textAlign:'center'}}>{message}</h4>
        </div>
    )
}
