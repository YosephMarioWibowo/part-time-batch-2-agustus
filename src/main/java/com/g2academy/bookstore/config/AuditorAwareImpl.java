package com.g2academy.bookstore.config;

import org.springframework.data.domain.AuditorAware;

import java.util.Arrays;
import java.util.Optional;
import java.util.Random;

public class AuditorAwareImpl implements AuditorAware<String> {
    @Override
    public Optional<String> getCurrentAuditor(){
        // TODO Auto-generated method stub
        return Optional.of(Arrays.asList("Admin", "Angga", "Rifky", "Asep", "Malik", "Yoseph")
            .get(new Random().nextInt(6)));
    }
}
