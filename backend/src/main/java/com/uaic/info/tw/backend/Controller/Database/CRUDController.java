package com.uaic.info.tw.backend.Controller.Database;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.uaic.info.tw.backend.Globals.Variables;
import com.uaic.info.tw.backend.Model.Rank;
import com.uaic.info.tw.backend.Model.SaveData;
import com.uaic.info.tw.backend.Model.User;

public class CRUDController {
	
	public String selectUserByUsername(String username) throws SQLException {
		String query = "SELECT * FROM USERS WHERE username = ?";
		PreparedStatement pstm = Variables.DB_CONN.prepareStatement(query);
		pstm.setString(1, username.trim());

		ResultSet rs = pstm.executeQuery();
		if (rs.next()) {
			return rs.getString("username");
		} else {
			return null;
		}
	}

	public void createUser(User newUser) throws SQLException {
		String query = "INSERT INTO USERS " + "(username, password, email, name, avatar) " 
				+ "VALUES (?, ?,?, ?, ?)";
		PreparedStatement pstm = Variables.DB_CONN.prepareStatement(query);
		pstm.setString(1, newUser.getUsername());
		pstm.setString(2, newUser.getPassword());
		pstm.setString(3, newUser.getEmail());
		pstm.setString(4, newUser.getName());
		pstm.setString(5, newUser.getAvatar());

		pstm.executeUpdate();
	}

	public void createRank(Rank newRank) throws SQLException {
		String query = "INSERT INTO RANK " + "(user_id, username, points) " 
				+ " VALUES (?, ?, ?)";
		PreparedStatement pstm = Variables.DB_CONN.prepareStatement(query);
		pstm.setInt(1, newRank.getUserId());
		pstm.setString(2, newRank.getUsername());
		pstm.setLong(3, newRank.getPoints());

		pstm.executeUpdate();
	}

	public void createSaveData(SaveData newSaveData) throws SQLException {
		String query = "INSERT INTO SAVE_DATA " + "(user_id, save_data) " 
				+ " VALUES (?, ?)";

		PreparedStatement pstm = Variables.DB_CONN.prepareStatement(query);
		pstm.setInt(1, newSaveData.getUserId());
		pstm.setString(2, newSaveData.getSaveData());

	}
	
	public String selectUserByUsernameAndPassword(String username, String password) throws SQLException {
		String query =  "SELECT * FROM USERS WHERE username = ? AND  password = ? ";
		PreparedStatement pstm = Variables.DB_CONN.prepareStatement(query);
		pstm.setString(1, username.trim());
		pstm.setString(2, password.trim());

		ResultSet rs = pstm.executeQuery();
		
		String response = null;
		if(rs.next()) {
            int userId =  rs.getInt("id");
            
            String query1 = "SELECT * FROM SAVE_DATA WHERE user_id = ?";
            pstm = Variables.DB_CONN.prepareStatement(query1);
    		pstm.setInt(1, userId);
    		
    		ResultSet rs1 = pstm.executeQuery();
    		
    		if( rs1.next()) {
    			response = rs1.getString("save_data");
    		}else {
    			response = userId  + "";
    		}
        }
		
		return response;
	}
}
