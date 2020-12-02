package com.g2academy.bookstore.repository;
import com.g2academy.bookstore.domain.ShoppingBasket_Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoppingBasket_BookRepository extends JpaRepository<ShoppingBasket_Book, Long > {
}
