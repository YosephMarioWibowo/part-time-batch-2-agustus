package com.g2academy.bookstore.service.Dto;
import lombok.Builder;
import lombok.Value;
import java.util.Set;

@Value
@Builder
public class CustomerDto {
    private Set<ShoppingBasketDto> shoppingBaskets;
    private String name;
    private String phone;
    private String address;

}
