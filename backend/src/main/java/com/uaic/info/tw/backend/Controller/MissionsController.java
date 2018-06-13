package com.uaic.info.tw.backend.Controller;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import com.uaic.info.tw.backend.Controller.Database.CRUDController;

public class MissionsController {
	Map<String, String> receivedParams = new HashMap<String, String>();
	CRUDController crudController;
	
	public MissionsController(Map<String, String> receivedParams) {
		for(Map.Entry<String, String> item : receivedParams.entrySet()) {
			this.receivedParams.put(item.getKey(), item.getValue());
		}
		crudController = new CRUDController();
	}

	public String getUsersPoints() throws SQLException {
		String response = "";
		
		response = "" + crudController.getPointsForUser(receivedParams.get("profil1"));
		
		return response;
	}

}
