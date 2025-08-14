package com.gamekey.backend.controller;

import com.gamekey.backend.models.Game;
import com.gamekey.backend.repositorys.GameRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GameController {

    private final GameRepository gameRepository;

    public GameController(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    @GetMapping("/games")
    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }

    @GetMapping("/test")
    public String hello() {
        return "hello";
    }
}
