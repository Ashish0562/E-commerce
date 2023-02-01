import React from 'react';
// import Popup from './Popup';

function Home(props) {

    function pop(value) {
        const popup =({
            Brand: value.brand,
            Model: value.title,
            Category: value.category,
            Description: value.description,
            Price: value.price,
            Rating: value.rating,
            Stock: value.stock
        })

        alert(JSON.stringify(popup));

    }

    console.log(props.item);

    return (
        <div onClick={()=>pop(props.item)} className='main'>
            <div className='imagediv'>
                <img src={props.item.thumbnail} />
            </div>
            <p>{props.item.title}</p>
        </div>
    )
}

export default Home