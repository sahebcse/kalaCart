import React from 'react'
import { Grid } from '@material-ui/core'

const CartItem = ({painting}) => {
    return (
        <Grid >

            <div className="md:flex mb-2 mt-3">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={painting.photo} alt="Man looking at item at a store" />
                </div>
                <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{painting.title}</div>
                <p href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Price : {painting.price}</p>
                <p className="mt-2 text-gray-500">{painting.description}</p>
                </div>
            </div>
        </Grid>
    )
}

export default CartItem
