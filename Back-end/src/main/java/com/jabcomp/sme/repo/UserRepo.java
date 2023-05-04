package com.jabcomp.sme.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.jabcomp.sme.model.User;

public interface UserRepo extends JpaRepository<User, Integer> {
	
	
	@Query("select p from User p where (p.email = :username or p.mobileNo= :username) and p.password = :password")
	Optional<User> findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
	

}
