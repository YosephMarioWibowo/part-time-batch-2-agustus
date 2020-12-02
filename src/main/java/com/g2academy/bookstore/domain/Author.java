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
@AuditTable("authors_audit")
@Table(name = "authors")
public class Author extends BaseEntity<String> implements Serializable {
    private static final long serialVersionUID=1L;

    @JsonManagedReference
    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Book> books;

    private String firstName;
    private String lastName;
    private String address;
    private String email;
    private String url;

    public void addBook (Book book) {
        if (books == null){
            books = new HashSet<Book>();
        }

        books.add(book);
        book.setAuthor(this);
    }
}
