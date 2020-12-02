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
@AuditTable("warehouse_books_audit")
@Table(name = "warehouse_books")
public class Warehouse_Book extends BaseEntity<String> implements Serializable {
    private static final long serialVersionUID=1L;

    @JsonBackReference
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "book_id")
    private Book isbn;

    @JsonBackReference
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "warehouse_id")
    private Warehouse code;

    @Column (name = "count")
    private Integer count;

}

