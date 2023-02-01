import React, { useEffect, useState } from 'react';
import Home from './Home';



const Api = () => {

    const [data, setdata] = useState([])
    const [page, setpage] = useState(10)
    const [init, setinit] = useState(0)
    const [count, setcount] = useState(0)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/`)
            .then(res => res.json())
            .then(json => setdata(json.products))
    }, [])

    console.log(data);

    function incr() {
        setcount(count + 1)
        setinit(init + 10)
        setpage(page + 10)
    }

    function decr() {

        if (count > 0) {

            setcount(count - 1)
            setpage(page - 10)
            setinit(init - 10)

        }

    }


    return (
        <>
            <div className='api'>
                {
                    data.slice(init, page).map((item) => {
                        return <Home item={item}  />
                    })
                }
            </div>
            <div className='nav'>
                <button onClick={decr}>-</button>Page No.  {count}<button onClick={incr}>+</button>
            </div>
        </>
    )
}

export default Api