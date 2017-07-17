import React from 'react';

export const Squares = (props) => {

    const handleClick = () => {
        props.squareClick(123);
    }

    const square = (number, i) => {
        var colorCode = "btn-secondary";
        var str = "";
        // var imageClass = "fa-fw";
        // let buttonStr = <button key={i}  type="button" className={`btn ${colorCode}`}><i className={`fa ${imageClass} fa-3x`} /></button>;
        let buttonStr = <button key={i}  type="button" className={`btn ${colorCode}`}></button>;

        if (number === 0) { 
            colorCode = "btn-primary";
            str = "O";
            // imageClass = "fa-circle-o";
        } else if (number === 1) {
            colorCode = "btn-success";
            str = "X";
            // imageClass = "fa-check";
        }

        return (
            <span key={i}>
                <button type="button" className={`btn ${colorCode} sqbtn`} onClick={() => props.squareClick(i)}>{str}</button>
                {(i + 1) % 3 === 0 && i > 0 ? <br /> : ""}
            </span>
        );
    }

    return (
        <div className="col-md-9">
            
            {props.numbers.map((number, i) =>
            
                square(number, i)
            )}

            {/*<div className="row">
                <div className="sq">
                    <i className="fa fa-remove fa-3x" />
                </div>
                <div className="sq">
                    <i className="fa fa-remove fa-2x" />
                </div>
                <div className="sq">
                    <i className="fa fa-circle-o fa-3x" />
                </div>
            </div>
            <div className="row">
                <div className="sq">
                    <i className="fa fa-remove fa-2x" />
                </div>
                <div className="sq">
                    <i className="fa fa-remove fa-2x" />
                </div>
                <div className="sq">
                    <i className="fa fa-remove fa-2x" />
                </div>
            </div>
            <div className="row">
                <div className="sq">
                    <i className="fa fa-remove fa-2x" />
                </div>
                <div className="sq">
                    <i className="fa fa-remove fa-2x" />
                </div>
                <div className="sq">
                    <i className="fa fa-remove fa-2x" />
                </div>
            </div>*/}
        </div>
    )
}