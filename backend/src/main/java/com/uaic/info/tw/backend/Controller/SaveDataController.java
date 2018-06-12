package com.uaic.info.tw.backend.Controller;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import com.uaic.info.tw.backend.Controller.Database.CRUDController;

public class SaveDataController {
Map<String, String> receivedParams = new HashMap<String, String>();
	
	CRUDController crudController;
	
	public SaveDataController(Map<String,String> receivedParams) {
		for(Map.Entry<String, String> item : receivedParams.entrySet()) {
			this.receivedParams.put(item.getKey(), item.getValue());
		}
		
		crudController = new CRUDController();
	}
	
	public void saveUserStatusGame() throws SQLException {		
		int userId = Integer.parseInt(receivedParams.get("userId"));
		String toSave = receivedParams.get("saveData");
		String points = receivedParams.get("points").trim();
		
		crudController.saveUserGameDataAndPoints(userId, toSave, points);
	}
}
