package com.g2academy.bookstore.service.mapper;
import com.g2academy.bookstore.domain.Author;
import com.g2academy.bookstore.service.Dto.AuthorDto;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import java.util.List;

@Mapper(uses = AuthorMapper.class)
public interface AuthorMapper {
    AuthorMapper INSTANCE = Mappers.getMapper(AuthorMapper.class);
    AuthorDto toDto (Author entity);
    Author toEntity (AuthorDto dto);

    List<AuthorDto> toDtos(List<Author> entities);
    List<Author> toEntities(List<AuthorDto> dtos);
}
