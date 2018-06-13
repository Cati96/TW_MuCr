package com.uaic.info.tw.backend.Model;

public class SaveData {
	private int saveDataId;
	private int userId;
	private String saveData;
	
	public SaveData(int saveDataId, int userId, String saveData) {
		super();
		this.saveDataId = saveDataId;
		this.userId = userId;
		this.saveData = saveData;
	}
	
	public SaveData(int userId, String saveData) {
		super();
		this.userId = userId;
		this.saveData = saveData;
	}

	public int getSaveDataId() {
		return saveDataId;
	}

	public void setSaveDataId(int saveDataId) {
		this.saveDataId = saveDataId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getSaveData() {
		return saveData;
	}

	public void setSaveData(String saveData) {
		this.saveData = saveData;
	}
}
