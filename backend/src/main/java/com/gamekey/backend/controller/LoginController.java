package com.gamekey.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    static class LoginRequest {
        public String username;
        public String password;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
        if ("admin@email.com".equals(request.username) && "1234".equals(request.password)) {
            return ResponseEntity.ok("Login success");
        } else {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }
}
