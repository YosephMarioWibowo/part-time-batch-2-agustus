package com.g2academy.bookstore.domain;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import org.hibernate.envers.AuditTable;
import org.hibernate.envers.Audited;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Setter
@Getter
@Builder
@Audited
@AuditTable("shoppingBasket_books_audit")
@Table(name = "shoppingBasket_books")
public class ShoppingBasket_Book extends BaseEntity<String> implements Serializable {
    private static final long serialVersionUID=1L;

    @JsonBackReference
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "book_id")
    private Book isbn;

    @JsonBackReference
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "shopping_basket_id")
    private ShoppingBasket id;

    @Column (name = "count")
    private Integer count;

}

