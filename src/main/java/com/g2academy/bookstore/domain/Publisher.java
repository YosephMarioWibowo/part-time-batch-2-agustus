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
@AuditTable("publishers_audit")
@Table(name = "publishers")
public class Publisher extends BaseEntity<String> implements Serializable {
    private static final long serialVersionUID=1L;

    @JsonManagedReference
    @OneToMany(mappedBy = "publisher", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Book> books;

    private String name;
    private String address;
    private String phone;
    private String url;

    public void addBook (Book book) {
        if (books == null){
            books = new HashSet<Book>();
        }

        books.add(book);
        book.setPublisher(this);
    }
}
