package com.pedroanjos.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pedroanjos.dsmovie.entities.Score;
import com.pedroanjos.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
