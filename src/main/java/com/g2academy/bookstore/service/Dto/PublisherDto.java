package com.g2academy.bookstore.service.Dto;
import lombok.Builder;
import lombok.Value;
import java.util.Set;

@Value
@Builder
public class PublisherDto {
    private Long id;
    private Set<BookDto> books;
    private String name;
    private String address;
    private String phone;
    private String url;
}