import React from "react";
import { Happy } from "./gce";
export const Favorite = () => {
    const Add = {
        border: '6px',
        borderRadius: '10px',
        borderStyle: 'dashed',
        borderColor: 'green'
    }
    return ( <
        >
        <
        h1 > Hobbies < /h1> <
        ul style = { Add } >
        <
        li > Quotes writing < /li> <
        li > listening music < /li> <
        li > Gardening < /li> <
        /ul> <
        Happy / >

        <
        />
    )
}
export const Favfood = () => {
    return ( <
        >
        <
        Favorite / >
        <
        h1 > Favorite foods < /h1> <
        ul >
        <
        li > Biriyani < /li> <
        li > poori < /li> <
        /ul>

        <
        />
    )
}
export const Favpic = () => {
    return ( <
        >
        <
        h1 > my favorite capture < /h1> <
        img width = '200px'
        height = '300'
        src = 'image/annakkili.jpg' / >

        <
        />


    )
}