package com.pedroanjos.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pedroanjos.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
