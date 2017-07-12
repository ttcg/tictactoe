import React from 'react';

export const Squares = (props) => {
    return (
        <div className="col-md-9">
            <div className="row">
                <div className="col-md-4">
                    <i className="fa fa-remove fa-3x" />
                </div>
                <div className="col-md-4">
                    <i className="fa fa-remove fa-2x" />
                </div>
                <div className="col-md-4">
                    <i className="fa fa-circle-o fa-3x" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <i className="fa fa-remove fa-2x" />
                </div>
                <div className="col-md-4">
                    <i className="fa fa-remove fa-2x" />
                </div>
                <div className="col-md-4">
                    <i className="fa fa-remove fa-2x" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <i className="fa fa-remove fa-2x" />
                </div>
                <div className="col-md-4">
                    <i className="fa fa-remove fa-2x" />
                </div>
                <div className="col-md-4">
                    <i className="fa fa-remove fa-2x" />
                </div>
            </div>
        </div>
    )
}