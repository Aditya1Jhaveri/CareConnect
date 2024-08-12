package com.jabcomp.sme.exceptions;

public class UserLoginException extends BaseException {
	public UserLoginException(String user_email) {
		// TODO Auto-generated constructor stub
		super("The user with email, " + user_email + " or password not valid for Login");
	}
}
