package com.g2academy.bookstore.domain;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.g2academy.bookstore.domain.BaseEntity;
import com.g2academy.bookstore.domain.Book;
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
@AuditTable("customers_audit")
@Table(name = "customers")
public class Customer extends BaseEntity<String> implements Serializable {
    private static final long serialVersionUID=1L;

    @JsonManagedReference
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<ShoppingBasket> shoppingBaskets;

    private String name;
    private String phone;
    private String address;

    public void addShoppingBasket (ShoppingBasket shoppingBasket) {
        if (shoppingBaskets == null){
            shoppingBaskets = new HashSet<ShoppingBasket>();
        }

        shoppingBaskets.add(shoppingBasket);
        shoppingBasket.setCustomer(this);
    }
}
