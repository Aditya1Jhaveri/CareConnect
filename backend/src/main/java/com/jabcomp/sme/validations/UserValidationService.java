package com.jabcomp.sme.validations;




import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.jabcomp.sme.exceptions.RoleNotDefinedException;
import com.jabcomp.sme.exceptions.UserAlreadyExistsException;
import com.jabcomp.sme.exceptions.UserLoginException;
import com.jabcomp.sme.model.User;
import com.jabcomp.sme.service.UserService;
import com.jabcomp.sme.utils.Constants;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserValidationService {

	@Autowired
	private UserService userService;

	public void userRoleIsValid(User user) {
		 String role=user.getRole();
		if (role == null) {
			throw new RoleNotDefinedException(user.getEmail());
		}
		if (!(role.equals(Constants.ROLE_ADMIN) || role.equals(Constants.ROLE_DOCTOR)
				|| role.equals(Constants.ROLE_PATIENT))) {
			throw new RoleNotDefinedException(user.getEmail());
		}
		user.setRole(role);
	}

	public void userLogin(String username, String password, String role) {
		if (role == null) {
			throw new RoleNotDefinedException(role);
		}
		var userExits = userService.getUserByUserNameAndPassword(username, password);
		if (!userExits.isPresent()) {
			throw new UserLoginException(username);
		}
	}

	public void userIdIsValid(User user) {
		if (user.getId() <= 0) {
			/// throw user id not valid exception
		}
	}

	public void assertCreateUser(User user) {
		this.userRoleIsValid( user);

		var userExits = userService.getUserByUserNameAndPassword(user.getEmail(), user.getPassword());
		if (userExits.isPresent()) {
			throw new UserAlreadyExistsException(user.getEmail());
		}
	}
}
