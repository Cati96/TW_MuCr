package com.uaic.info.tw.backend.Controller;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import com.uaic.info.tw.backend.Controller.Database.CRUDController;

public class RegisterController {
	Map<String, String> receivedParams = new HashMap<String, String>();
	
	CRUDController crudController;
	
	public RegisterController(Map<String,String> receivedParams) {
		for(Map.Entry<String, String> item : receivedParams.entrySet()) {
			this.receivedParams.put(item.getKey(), item.getValue());
		}
		
		crudController = new CRUDController();
	}
	
	public String verifyUsernameExistance() throws SQLException {
		String response = "";
		
		String newUsername = receivedParams.get("username");
		
		return response;
	}
}