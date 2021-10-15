import React from 'react'
import { useParams } from 'react-router';

//config
import { POSTER_SIZE, IMAGE_BASE_URL } from '../config';

//Components
import Breadcrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfo/MovieInfoBar';
import Actor from './Actors';
import Grid from './Grid/Index';
import Spinner from './Spinner';

//Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
//Image
import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const { movieId } = useParams();
    const { state: movie, loading, error } = useMovieFetch(movieId);
    if (loading)
        return <Spinner />;
    if (error)
        return <div>Something went wrong</div>
    console.log(movie);
    console.log(`${IMAGE_BASE_URL}${POSTER_SIZE} /sGMA6pA2D6X0gun49igJT3piHs3.jpg`)
    return (
        <>
            <Breadcrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid header="Actors">
                {movie.actors.map(actor => {
                    console.log(IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path);
                    return (
                        < Actor
                            key={actor.credit_id}
                            name={actor.name}
                            character={actor.character}
                            imageUrl={
                                actor.profile_path ?
                                    IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path :
                                    NoImage
                            }
                        />
                    )
                })

                }
            </Grid>
        </>
    )
};

export default Movie;