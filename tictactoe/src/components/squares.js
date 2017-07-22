import React from 'react';

export const Squares = (props) => {

    const square = (number, i) => {
        var colorCode = "btn-secondary";
        var str = "";

        if (number === 0) { 
            colorCode = "btn-primary";
            str = "O";
        } else if (number === 1) {
            colorCode = "btn-success";
            str = "X";
        }

        return (
            <span key={i}>
                <button type="button" className={`btn ${colorCode} sqbtn`} onClick={() => props.squareClick(i)}>{str}</button>
                {(i + 1) % 3 === 0 && i > 0 ? <br /> : ""}
            </span>
        );
    }

    return (
        <div className="col-md-6">
            
            {props.numbers.map((number, i) =>
            
                square(number, i)
            )}
           
        </div>
    )
}