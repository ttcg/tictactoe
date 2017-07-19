import React from 'react';

export const History = (props) => {
    return (
        <div className="col-md-6">
            <h4>History of Moves</h4>
            <ol>
                {props.moves.map((move, i) => <li key={i}>{move}</li>)}
            </ol>
        </div>  
    )
}