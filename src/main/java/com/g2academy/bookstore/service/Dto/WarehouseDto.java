package com.g2academy.bookstore.service.Dto;
import lombok.Builder;
import lombok.Value;
import java.util.Set;

@Value
@Builder
public class WarehouseDto {
    private Long id;
    private Set<Warehouse_BookDto> warehouse_books;
    private String phone;
    private String address;
}
