package com.gamekey.backend.repositorys;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.gamekey.backend.models.Game;

public interface GameRepository extends MongoRepository<Game, String> {
}
