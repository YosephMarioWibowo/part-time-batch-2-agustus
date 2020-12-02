package com.g2academy.bookstore.service.Dto;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class Warehouse_BookDto {
    private Long id;
    private BookDto isbn;
    private WarehouseDto code;
    private Integer count;
}