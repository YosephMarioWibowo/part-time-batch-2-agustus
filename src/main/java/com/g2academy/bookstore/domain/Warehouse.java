package com.g2academy.bookstore.domain;
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
@AuditTable("warehouse_audit")
@Table(name = "warehouse")
public class Warehouse extends BaseEntity<String> implements Serializable {
    private static final long serialVersionUID=1L;

    @JsonManagedReference
    @OneToMany(mappedBy = "warehouse", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Warehouse_Book> warehouse_books;

    private String phone;
    private String address;

    public void addWarehouse_Book (Warehouse_Book warehouse_book) {
        if (warehouse_books == null){
            warehouse_books = new HashSet<Warehouse_Book>();
        }

        warehouse_books.add(warehouse_book);
        warehouse_book.setCode(this);
    }
}

