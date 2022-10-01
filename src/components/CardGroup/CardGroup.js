import React from 'react';

const CardGroup = () => {
    return (
        <div>
            <div className="card-group">
                <div className="card">
                    <img src="https://media.istockphoto.com/photos/barcelona-fans-picture-id511325515?s=612x612" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
                <div className="card">
                    <img src="https://images.freeimages.com/images/large-previews/5a2/red-space-1496755.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
                <div className="card">
                    <img src="https://images.freeimages.com/images/large-previews/70b/bike-red-1423575.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default CardGroup;