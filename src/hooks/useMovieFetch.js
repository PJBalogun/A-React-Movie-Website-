import React, { useState, useEffect, useCallback } from "react";

//Api
import API from "../API";

export const useMovieFetch = (movieId) => {
    const [state, setstate] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchMovie = useCallback(async () => {
        try {
            setLoading(true);
            setError(false);

            const movie = await API.fetchMovie(movieId);
            const credits = await API.fetchCredits(movieId);
            //Get director only
            const directors = credits.crew.filter(member => { return member.job === "Director" });
            setstate({
                ...movie,
                actors: credits.cast,
                directors
            })
            console.log(state);
            setLoading(false);
        } catch {

        }
    }, [movieId]);


    useEffect(() => {
        fetchMovie();
    }, [fetchMovie])
    return { state, loading, error };
};

