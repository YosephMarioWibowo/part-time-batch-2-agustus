package com.g2academy.bookstore.service.Dto;
import lombok.*;

import java.time.YearMonth;
import java.util.Set;

@Value
@Builder
@AllArgsConstructor
public class BookDto {
    private Long id;
    private Set<Warehouse_BookDto> warehouse_books;
    private Set<ShoppingBasket_BookDto> shoppingBasket_books;
    private String isbn;
    private AuthorDto author;
    private PublisherDto publisher;
    private YearMonth publishedOn;
    private String title;
    private Double price;
}
