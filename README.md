# [Shop Shop](https://shop-shopp.herokuapp.com/): Building with State (React/Redux)

![Imgur](https://i.imgur.com/zFnO94L.png)

[Click me to visit the site!](https://shop-shopp.herokuapp.com/)

Shop-Shopp is a project to build not only an ecomerce site with `stripe.js` used in its checkout process (at least as a test) but also to use a global state method that isn't passed down through multiple compomnetnts!

to avoid prop drilling we decoupled the State of the application from the building of the site and accessed it only when it was needed.

at first it was built in reacts `useState` features but was adapted over to `Redux`

I took this opertunity to poke my head around `redux` and see what i could learn from it.

one of the experiments it did to learn more was to seperate the reducers to more compact readable components, even splitting up the default `global state` to see what you could do with said effects.

i quickly found out it makes seperate sections of the default `global state` which requires another layer of breakdown for the application to handle its data, something typically small on the surface but pretty massive when you already built the application around one singular state.

while super useful to break the code up for more legibale and digustible code in larger projects it felt that this was not one of those moments, it felt bulkier and unessicary as i was writing and fixing all the little errors that came with it.

## this project was built with:
 * Mongoose, Express, React, Node.js
 * Redux
 * GraphQL
 * Apollo
 * JsonWebToken
 * Stripe

## About the Author:

Hi i'm [Alex "Drkeck" Keckley](https://github.com/Drkeck) I'm eagerly learning full stack development and love applying myself to new technologies and tasks, i love building and creating things. feel free to contact me at k3ckl3y.a@gmail.com

or you can click my name to visit my GitHub page!