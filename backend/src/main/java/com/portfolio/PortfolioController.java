package com.portfolio;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PortfolioController {

    @GetMapping("/about")
    public Map<String, String> about() {
        return Map.of(
            "name", "Your Name",
            "role", "Software Developer",
            "summary", "I build clean, reliable apps. I enjoy Java, Spring Boot and React."
        );
    }

    @GetMapping("/skills")
    public List<String> skills() {
        return List.of("Java", "Spring Boot", "React", "HTML", "CSS", "JavaScript", "MySQL");
    }

    @GetMapping("/projects")
    public List<Map<String, String>> projects() {
        return List.of(
            Map.of("title", "E-commerce Website", "tech", "Spring Boot, React, MySQL", "summary", "Full-stack store with cart and payments."),
            Map.of("title", "Smart Parking System", "tech", "Spring Boot, MySQL, JS", "summary", "Occupancy tracking and QR tickets.")
        );
    }

    @GetMapping("/experience")
    public List<Map<String, String>> experience() {
        return List.of(
            Map.of("role", "Java Intern", "company", "Company Name", "duration", "Jan 2024 – Apr 2024", "summary", "Built REST APIs and optimized queries")
        );
    }

    @GetMapping("/education")
    public List<Map<String, String>> education() {
        return List.of(
            Map.of("degree", "B.Tech in CSE", "school", "Your College", "year", "2019 – 2023")
        );
    }

    @GetMapping("/contact")
    public Map<String, String> contact() {
        return Map.of(
            "email", "youremail@example.com",
            "github", "https://github.com/yourname",
            "linkedin", "https://linkedin.com/in/yourname"
        );
    }
}
