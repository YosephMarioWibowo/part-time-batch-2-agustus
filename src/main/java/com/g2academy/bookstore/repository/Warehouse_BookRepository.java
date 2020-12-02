package com.g2academy.bookstore.repository;
import com.g2academy.bookstore.domain.Warehouse_Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Warehouse_BookRepository extends JpaRepository<Warehouse_Book, Long > {
}
