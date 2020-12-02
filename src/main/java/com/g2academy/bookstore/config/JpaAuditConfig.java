package com.g2academy.bookstore.config;

import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class JpaAuditConfig {

}
