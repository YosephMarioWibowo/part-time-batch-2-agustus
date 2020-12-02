package com.g2academy.bookstore.service;

import com.g2academy.bookstore.domain.Book;
import com.g2academy.bookstore.repository.BookRepository;
import com.g2academy.bookstore.service.Dto.BookDto;
import com.g2academy.bookstore.service.mapper.BookMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.function.Function;

@Service
public class BookService {
    private final BookRepository repository;
    BookService(BookRepository repository){
        this.repository=repository;
    }

    Function<List<Book>, List<BookDto>> toDtos() {
        return (x) -> BookMapper.INSTANCE.toDtos(x);
    }

    Function<List<Book>, ResponseEntity<List<BookDto>>> getAll(){
        return (x) -> new ResponseEntity<List<BookDto>>(this.toDtos().apply(x), HttpStatus.OK);
    }
    public ResponseEntity<List<BookDto>> findAll(){
        return this.getAll().apply(repository.findAll());
    }

}
