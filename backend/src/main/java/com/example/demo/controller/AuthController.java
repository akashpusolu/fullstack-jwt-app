package com.example.demo.controller;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody LoginRequest req) {
    return ResponseEntity.ok("Mock JWT Token");
  }
}