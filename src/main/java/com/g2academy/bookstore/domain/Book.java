package com.g2academy.bookstore.domain;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.envers.AuditTable;
import org.hibernate.envers.Audited;
import javax.persistence.*;
import java.io.Serializable;
import java.time.YearMonth;
import java.util.HashSet;
import java.util.Set;

@Entity
@Setter
@Getter
@Builder
@Audited
@AuditTable("books_audit")
@Table(name = "books")
public class Book extends BaseEntity<String> implements Serializable {
    private static final long serialVersionUID=1L;

    @JsonManagedReference
    @Column(name = "isbn", length = 20)
    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Warehouse_Book> warehouse_books;

    @JsonManagedReference
    @Column(name = "isbn", length = 20)
    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<ShoppingBasket_Book> shoppingBasket_books;

    @JsonBackReference
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "author_id")
    private Author author;

    @JsonBackReference
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "publisher_id")
    private Publisher publisher;

    @Column (name = "published_on", columnDefinition = "mediumint")
    @Convert (converter = YearMonthIntegerAttributeConverter.class)
    private YearMonth publishedOn;

    @Column (name = "title")
    private String title;

    @Column(name = "price", precision = 19, scale = 4)
    private Double price;

    public void addWarehouse_Book (Warehouse_Book warehouse_book) {
        if (warehouse_books == null){
            warehouse_books = new HashSet<Warehouse_Book>();
        }

        warehouse_books.add(warehouse_book);
        warehouse_book.setIsbn(this);
    }

    public void addShoppingBasket_Book (ShoppingBasket_Book shoppingBasket_book) {
        if (shoppingBasket_books == null){
            shoppingBasket_books = new HashSet<ShoppingBasket_Book>();
        }

        shoppingBasket_books.add(shoppingBasket_book);
        shoppingBasket_book.setIsbn(this);
    }



}
