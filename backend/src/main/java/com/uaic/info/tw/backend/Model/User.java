package com.uaic.info.tw.backend.Model;

public class User {
	private int userId;
	private String username;
	private String password;
	private String name;
	private String email;
	private String avatar;
	
	public User(int userId, String username, String password, String name, String email, String avatar) {
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.name = name;
		this.email = email;
		this.avatar = avatar;
	}
	
	public User(String username, String password, String name, String email, String avatar) {
		super();
		this.username = username;
		this.password = password;
		this.name = name;
		this.email = email;
		this.avatar = avatar;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}
	
}
