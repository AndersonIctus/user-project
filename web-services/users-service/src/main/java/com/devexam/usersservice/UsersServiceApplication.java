package com.devexam.usersservice;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Collection;
import java.util.stream.Stream;

import com.devexam.usersservice.model.User;
import com.devexam.usersservice.repository.UserRepository;

@SpringBootApplication
public class UsersServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UsersServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner( UserRepository ur) {
		return strings -> {
			Stream
				.of(
					new User("System Admin", "admin", "admin", "admin@devexam.com", true),
					new User("Anderson Cunha", "andy", "1234", "anderson@devexam.com"),
					new User("Joao Cordeiro", "joao", "4321", "joao.cordeiro@devexam.com"),
					new User("Fulano de Tal", "de_tal", "ful77", "fulano@devexam.com"),
					new User("Flavia Alencar", "flavinha", "fla123", "alencar.f@devexam.com"),
					new User("Support Exam", "support", "support", "support@devexam.com")

				).forEach( user -> ur.save(user) );
		};
	}
}
