package com.g2academy.bookstore.service.Dto;
import lombok.Builder;
import lombok.Value;
import java.util.Set;

@Value
@Builder
public class ShoppingBasketDto {
    private Long id;
    private Set<ShoppingBasket_BookDto> shoppingBasket_books;
    private CustomerDto customer;
}
