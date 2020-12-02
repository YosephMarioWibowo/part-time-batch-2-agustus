package com.g2academy.bookstore.service.Dto;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class ShoppingBasket_BookDto {
    private BookDto isbn;
    private ShoppingBasketDto id;
    private Integer count;
}

