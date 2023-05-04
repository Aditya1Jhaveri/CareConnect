package com.jabcomp.sme.controller;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.jabcomp.sme.exceptions.UserLoginException;
import com.jabcomp.sme.model.User;
import com.jabcomp.sme.service.UserService;
import com.jabcomp.sme.validations.UserValidationService;

@RestController
@RequestMapping(value = "/api/v1", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private UserValidationService userValidationService;

	@RequestMapping(value = "/auth", method = RequestMethod.GET)
	public User authenticateUser(@RequestHeader("username") String username, @RequestHeader("password") String password,
			@RequestHeader("role") String role) {
		this.userValidationService.userLogin(username, password, role);
		Optional<User> user = userService.getUserByUserNameAndPassword(username, password);
		if (!user.isPresent()) {
			throw new UserLoginException(username);
		} else {
			return user.get();
		}
	}
	

	@RequestMapping(value = "/user", method = RequestMethod.POST)
	public User addUser(@RequestBody User user) throws JsonProcessingException {
		this.userValidationService.assertCreateUser(user);
		userService.addUser(user);
		return user;
	}

}
