package com.g2academy.bookstore.domain;

import java.time.YearMonth;

import javax.persistence.AttributeConverter;

public class YearMonthIntegerAttributeConverter implements AttributeConverter<YearMonth, Integer> {

    @Override
    public Integer convertToDatabaseColumn(YearMonth attribute) {
        // TODO Auto-generated method stub
        if (attribute != null) {
            return (attribute.getYear() * 100) + attribute.getMonth().getValue();
        }
        return null;
    }

    @Override
    public YearMonth convertToEntityAttribute(Integer dbData) {
        if (dbData != null) {
            int year = dbData / 100;
            int month = dbData % 100;
            return YearMonth.of(year, month);
        }
        return null;
    }

}
