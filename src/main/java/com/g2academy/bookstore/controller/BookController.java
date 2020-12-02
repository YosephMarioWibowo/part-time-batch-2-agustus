package com.g2academy.bookstore.controller;

import com.g2academy.bookstore.service.BookService;
import com.g2academy.bookstore.service.Dto.BookDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/books")
public class BookController {

    private final BookService service;

    public BookController(BookService service){
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<BookDto>> findAll(){
        return service.findAll();
    }
}
