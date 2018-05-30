package com.uaic.info.tw.backend.Controller.Database;

public class CRUDController {
	
public void saveUserGameData(int userId, String data) throws SQLException {
		String query = "UPDATE SAVE_DATA SET save_data = ? where user_id = ?";
		PreparedStatement pstm = Variables.DB_CONN.prepareStatement(query);
		pstm.setString(1, data);
		pstm.setInt(2, userId);
		
		pstm.executeUpdate();
	}
}
