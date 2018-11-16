package com.devexam.usersservice.repository;

import com.devexam.usersservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.Collection;

@RepositoryRestResource
public interface UserRepository extends JpaRepository<User, Long> {

    @RestResource(path="bylogin")
    Collection<User> findByLogin(@Param("login") String login);

    @RestResource(path="byname")
    Collection<User> findByName(@Param("name") String name);

    @RestResource(path="byloginorname")
    Collection<User> findByLoginOrName(@Param("login") String login, @Param("name") String name);

    @RestResource(path="byloginandpassword")
    Collection<User> findByLoginAndPassword(@Param("login") String login, @Param("password") String password);
}
