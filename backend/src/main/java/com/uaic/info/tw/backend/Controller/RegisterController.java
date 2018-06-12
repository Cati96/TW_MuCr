package com.uaic.info.tw.backend.Controller;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import com.uaic.info.tw.backend.Controller.Database.CRUDController;
import com.uaic.info.tw.backend.Model.Rank;
import com.uaic.info.tw.backend.Model.SaveData;
import com.uaic.info.tw.backend.Model.User;

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
		
		if( crudController.selectUserByUsername(newUsername) != null ) {
			response = "This username already exists. Please pick another one...";
		}else {
			User newUser = new User(receivedParams.get("username"), receivedParams.get("password"),
						receivedParams.get("name"), receivedParams.get("email"), 
						receivedParams.get("avatar"));
			crudController.createUser(newUser);
			
			int newUserId = crudController.getUserIdByUsername(receivedParams.get("username"));
			System.out.println("NewUserId: " + newUserId);
			
			Rank newRank = new Rank(newUserId, newUser.getUsername(), 0);
			crudController.createRank(newRank);
			
			SaveData newSaveData = new SaveData(newUserId, "no data yet");
			crudController.createSaveData(newSaveData);
			
			response = "valid";
		}
		
		return response;
	}
}