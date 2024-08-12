package com.jabcomp.sme.exceptions;

import com.jabcomp.sme.exceptions.BaseException;


public class UserAlreadyExistsException extends BaseException {

	public UserAlreadyExistsException(String user_name) {
		// TODO Auto-generated constructor stub
		super("The user with name : " + user_name + " is already exits.");
	}

}
