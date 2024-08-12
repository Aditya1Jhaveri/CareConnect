package com.jabcomp.sme.exceptions;

import com.jabcomp.sme.exceptions.BaseException;

public class RoleNotDefinedException extends BaseException {

	public RoleNotDefinedException(String user_name) {
		// TODO Auto-generated constructor stub
		super("Role has not been defined for : " + user_name + " user.");
	}

}
