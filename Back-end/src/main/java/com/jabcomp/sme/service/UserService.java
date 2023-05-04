package com.jabcomp.sme.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jabcomp.sme.model.User;
import com.jabcomp.sme.repo.UserRepo;

@Service
public class UserService {

	@Autowired
	private UserRepo userRepo;

	public User getUser(int id) {
		return userRepo.findById(id).orElse(null);
	}

	public void addUser(User user) {
		userRepo.save(user);
	}

//	public int getUserByUsernameAndPassword(String username, String password) {
//		Optional<User> user = userRepo.findByUsernameAndPassword(username, password);
//		if (user == null)
//			return 0;
//		return user.get().getId();
//	}

	public Optional<User> getUserByUserNameAndPassword(String username, String password) {
		return userRepo.findByUsernameAndPassword(username, password);
	}

//	public User getUser(Optional<User> userExits) {
//		// TODO Auto-generated method stub
//		return userRepo.findAll(userExits).orElse(null);
//	}

}
