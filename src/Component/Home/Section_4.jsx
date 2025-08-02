import React from 'react'
import ReactDOM from 'react-dom'
import Item from './Item'
function Section4() {
    return (
        <>
            <h2 className = "py-16 font-md text-4xl text-center w-full">OUR FAMOUS BLOGS</h2>
            <div className="px-13 pb-12 w-full min-h-80 grid grid-cols-16 gap-x-4 gap-y-6">
                <div className="col-span-4 h-94">
                    <Item />
                </div>
                <div className="col-span-4 h-94">
                    <Item />
                </div>
                <div className="col-span-4 h-94">
                    <Item />
                </div>
                <div className="col-span-4 h-94">
                    <Item />
                </div>
                <div className="col-span-4 h-94">
                    <Item />
                </div>
                <div className="col-span-4 h-94">
                    <Item />
                </div>
                <div className="col-span-4 h-94">
                    <Item />
                </div>
                <div className="col-span-4 h-94">
                    <Item />
                </div>
            </div>

        </>

    )
}
export default Section4