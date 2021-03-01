"use strict"

const url = 'https://pickle-dog-freeze.glitch.me/movies'

// Get all movies -------------------------------------------------

const getMovies = () => fetch(url)
    .then(res => res.json())


// Get a movie -------------------------------------------------------------------

const getMovie = id => fetch(`${url}/${id}`)
    .then(res => res.json())
    .catch(console.error);


// Create a movie ----------------------------------------------------------------
// Input must be an object***

const addMovie = (movie) => fetch(`${url}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
})
    .then(res => res.json())
    .then(data => {
        console.log(`Success: created ${JSON.stringify(data)}`);
        return data.id; // to access the primary key of the newly created entity
    })
    .catch(console.error);


// Modify a movie -----------------------------------------------------------------
//input must be an object. Example input: {id: 2, title: "Star Wars: A New Hope", rating: 5}

const editMovie = movie => fetch(`${url}/${movie.id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie)
})
    .then(res => res.json())
    .then(data => {
        console.log(`Success: edited ${JSON.stringify(data)}`);
    })
    .catch(console.error);


// Delete a movie -------------------------------------------------------------------

const deleteMovie = id => fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => res.json())
    .then(() => {
        console.log(`Success: deleted ${id}`);
    })
    .catch(console.error);


//----------------------------------------------------------------
