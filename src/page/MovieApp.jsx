import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '..//style.css';

export default function MovieApp() {
    const [movies, setMovies] = useState([]); 
    const baseURL = 'http://localhost:5000/movie';
    const [newMovie, setNewMovie] = useState({ title: '', year: '', img: '' });
    const [editMovieId, setEditMovieId] = useState(null);
    const [editMovie, setEditMovie] = useState({ title: '', year: '', img: '' });

    useEffect(() => {
        fetchAPI();
    }, []);

    const fetchAPI = () => {
        axios.get(baseURL)
            .then((res) => {
                setMovies(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteMovie = (id) => {
        axios.delete(`http://localhost:5000/movie/${id}`)
            .then(() => {
                fetchAPI();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const addMovie = (movie) => {
        axios.post(baseURL, movie)
            .then(() => {
                fetchAPI();
                setNewMovie({ title: '', year: '', img: '' });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handlerAddedMovie = () => {
        addMovie(newMovie);
    };

    const handlerEdit = (movie) => {
        setEditMovieId(movie.id);
        setEditMovie({ title: movie.title, year: movie.year, img: movie.img });
    };

    const handlerUpdate = (id) => {
        update(id, editMovie);
    };

    const update = (id, updatedMovie) => {
        axios.patch(`http://localhost:5000/movie/${id}`, updatedMovie)
            .then(() => {
                fetchAPI();
                setEditMovieId(null);
                setEditMovie({ title: '', year: '', img: '' });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='container'>
            {
                movies && movies.length > 0 &&
                movies.map((item) => (
                    <div className='box' key={item.id}>
                        {item.id === editMovieId ? (
                            <div className='parent2'>
                                <label>Edit the movie title</label>
                                <input
                                    value={editMovie.title}
                                    onChange={(e) => setEditMovie({ ...editMovie, title: e.target.value })}
                                    type="text"
                                />
                                <label>Edit the year name</label>
                                <input
                                    value={editMovie.year}
                                    onChange={(e) => setEditMovie({ ...editMovie, year: e.target.value })}
                                    type="text"
                                />
                                <label>Edit the url of the image</label>
                                <input
                                    value={editMovie.img}
                                    onChange={(e) => setEditMovie({ ...editMovie, img: e.target.value })}
                                    type="text"
                                />
                                <button onClick={() => handlerUpdate(item.id)}>Edit</button>
                            </div>
                        ) : (
                            <div className='parent'>
                                <h1>{item.title}</h1>
                                <img src={item.img} alt="" />
                                <p>{item.year}</p>
                                <button onClick={() => deleteMovie(item.id)}>Delete</button>
                                <button onClick={() => handlerEdit(item)}>Edit</button>
                            </div>
                        )}
                    </div>
                ))
            }
            <h1>Fill in the information to display it</h1>
            <input
                placeholder='Enter movie title'
                value={newMovie.title}
                onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                type="text"
            />
            <input
                placeholder='Enter the year the movie was released'
                value={newMovie.year}
                onChange={(e) => setNewMovie({ ...newMovie, year: e.target.value })}
                type="text"
            />
            <h1>Remember that the image format must be 400 x 600</h1>
            <input
                placeholder='Enter url pictures'
                value={newMovie.img}
                onChange={(e) => setNewMovie({ ...newMovie, img: e.target.value })}
                type="text"
            />
            <button className='btn' onClick={handlerAddedMovie}>Add Movie</button>
        </div>
    );
}

