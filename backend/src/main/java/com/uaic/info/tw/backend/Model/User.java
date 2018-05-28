package com.uaic.info.tw.backend.Model;

public class User {
	private int user_id;
	private String username;
	private String password;
	private String fname;
	private String lname;
	private String country;
	private String email;
	private String phone;
	private long points;
	private String saved_data;	
	
	public User(int user_id, String username, String password, String fname, String lname, String country, String email, String phone, String saved_data) {
		this.user_id = user_id;
		this.username = username;
		this.password = password;
		this.fname = fname;
		this.lname = lname;
		this.country = country;
		this.email = email;
		this.phone = phone;
		this.points = 0;
		this.saved_data = saved_data;
	}
	
	public int getUser_id() {
		return user_id;
	}
	
	public void setUser_id(int user_id) {
		this.user_id = user_id;
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
	
	public String getFname() {
		return fname;
	}
	
	public void setFname(String fname) {
		this.fname = fname;
	}
	
	public String getLname() {
		return lname;
	}
	
	public void setLname(String lname) {
		this.lname = lname;
	}
	
	public String getCountry() {
		return country;
	}
	
	public void setCountry(String country) {
		this.country = country;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPhone() {
		return phone;
	}
	
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public long getPoints() {
		return points;
	}
	
	public void setPoints(long points) {
		this.points = points;
	}
	
	public String getSaved_data() {
		return saved_data;
	}
	
	public void setSaved_data(String saved_data) {
		this.saved_data = saved_data;
	}
}
