package com.g2academy.bookstore.domain;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.envers.AuditTable;
import org.hibernate.envers.Audited;
import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Setter
@Getter
@Builder
@Audited
@AuditTable("shoppingBaskets_audit")
@Table(name = "shoppingBaskets")
public class ShoppingBasket extends BaseEntity<String> implements Serializable {
    private static final long serialVersionUID=1L;

    @JsonManagedReference
    @OneToMany(mappedBy = "shoppingBasket", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<ShoppingBasket_Book> shoppingBasket_books;

    @JsonBackReference
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    public void addShoppingBasket_Book (ShoppingBasket_Book shoppingBasket_book) {
        if (shoppingBasket_books == null){
            shoppingBasket_books = new HashSet<ShoppingBasket_Book>();
        }

        shoppingBasket_books.add(shoppingBasket_book);
        shoppingBasket_book.setId(this);
    }


}
