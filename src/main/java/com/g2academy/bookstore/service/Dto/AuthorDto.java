package com.g2academy.bookstore.service.Dto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;
import java.util.Set;

@Value
@Builder
@AllArgsConstructor
public class AuthorDto {
    private Long id;
    private Set<BookDto> books;
    private String firstName;
    private String lastName;
    private String address;
    private String email;
    private String url;
}
