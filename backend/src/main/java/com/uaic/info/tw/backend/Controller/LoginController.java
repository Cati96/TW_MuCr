package com.uaic.info.tw.backend.Controller;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import com.uaic.info.tw.backend.Controller.Database.CRUDController;

public class LoginController {
	Map<String, String> receivedParams = new HashMap<String, String>();
	
	CRUDController crudController;
	
	public LoginController(Map<String,String> receivedParams) {
		for(Map.Entry<String, String> item : receivedParams.entrySet()) {
			this.receivedParams.put(item.getKey(), item.getValue());
		}
		crudController = new CRUDController();
	}
	
	public String verifyUserExistance() throws SQLException {
		String response = "";
		
		String username = receivedParams.get("username");
		String password = receivedParams.get("password");
		
		String response1 = crudController.selectUserByUsernameAndPassword(username, password);
		if( response1 != null ) {
			response = response1;
		}else {
			response = "Wrong username  or password...";
		}
		
		return response;
	}
}

