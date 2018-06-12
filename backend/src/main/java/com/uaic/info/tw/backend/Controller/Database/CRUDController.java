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
			return "exists";
		} else {
			return null;
		}
	}

	public void createUser(User newUser) throws SQLException {
		String query = "INSERT INTO USERS " + "(username, password, email, name, avatar) " + "VALUES (?, ?,?, ?, ?)";
		PreparedStatement pstm = Variables.DB_CONN.prepareStatement(query);
		pstm.setString(1, newUser.getUsername());
		pstm.setString(2, newUser.getPassword());
		pstm.setString(3, newUser.getEmail());
		pstm.setString(4, newUser.getName());
		pstm.setString(5, newUser.getAvatar());

		pstm.executeUpdate();
	}

	public void createRank(Rank newRank) throws SQLException {
		String query = "INSERT INTO RANK " + "(user_id, username, points) " + " VALUES (?, ?, ?)";
		PreparedStatement pstm = Variables.DB_CONN.prepareStatement(query);
		pstm.setInt(1, newRank.getUserId());
		pstm.setString(2, newRank.getUsername());
		pstm.setLong(3, newRank.getPoints());

		pstm.executeUpdate();
	}

	public void createSaveData(SaveData newSaveData) throws SQLException {
		String query = "INSERT INTO SAVE_DATA " + "(user_id, saved_data) " + " VALUES (?, ?)";

		PreparedStatement pstm = Variables.DB_CONN.prepareStatement(query);
		pstm.setInt(1, newSaveData.getUserId());
		pstm.setString(2, newSaveData.getSaveData());

		pstm.executeUpdate();
	}

	public String selectUserByUsernameAndPassword(String username, String password) throws SQLException {
		String query = "SELECT * FROM users WHERE username = ? AND  password = ? ";
		PreparedStatement pstm = Variables.DB_CONN.prepareStatement(query);
		pstm.setString(1, username);
		pstm.setString(2, password);
		ResultSet rs = pstm.executeQuery();

		while (rs.next()) {
			int userId = rs.getInt("id");
			System.out.println("UserId-" + userId);
			String query1 = "SELECT * FROM save_data WHERE user_id = ?";
			pstm = Variables.DB_CONN.prepareStatement(query1);
			pstm.setInt(1, userId);

			ResultSet rs1 = pstm.executeQuery();
			
			while (rs1.next()) {
				String toComp = "no data yet";
				if( !rs1.getString("saved_data").trim().equals(toComp) ) {
					System.out.println("Saved_data: " + rs1.getString("saved_data").trim());
					System.out.println("Length for saved_data: "  + rs1.getString("saved_data").trim().length());
					System.out.println("Length for hardcoded: " + toComp.length());
					return rs1.getString("saved_data");
				}			
			}
			return userId + "";

		}
		return "invalid";			

	}

	public String getOrderedRank() throws SQLException {
		String response = "";

		String query = "SELECT * FROM RANK ORDER BY points DESC ";
		PreparedStatement pstm = Variables.DB_CONN.prepareStatement(query);

		ResultSet rs = pstm.executeQuery();

		while (rs.next()) {
			response += rs.getString("username") + "<<<|<<<" + rs.getInt("points") + ">>>|>>>";
		}

		return response;
	}

	public int getSaveDataIdByUserId(int userId) throws SQLException {
		String query = "SELECT * FROM SAVE_DATA WHERE user_id = ?";
		PreparedStatement pstm = Variables.DB_CONN.prepareStatement(query);
		pstm.setInt(1, userId);

		ResultSet rs = pstm.executeQuery();

		int response = 0;
		while (rs.next()) {
			response = rs.getInt("id");
		}
		System.out.println("Save data id: " + response);
		return response;
	}
	
	public int getRankIdByUserId(int userId) throws SQLException {
		String query = "SELECT * FROM RANK WHERE user_id = ?";
		PreparedStatement pstm = Variables.DB_CONN.prepareStatement(query);
		pstm.setInt(1, userId);

		ResultSet rs = pstm.executeQuery();

		int response = 0;
		while (rs.next()) {
			response = rs.getInt("id");
		}
		System.out.println("Rank id: " + response);
		return response;
	}

	public void saveUserGameDataAndPoints(int userId, String data, String points) throws SQLException {
		String query = "UPDATE save_data SET saved_data = ? where id = ?";
		PreparedStatement pstm = Variables.DB_CONN.prepareStatement(query);
		
		int saveId = getSaveDataIdByUserId(userId);	
		pstm.setString(1, data);
		pstm.setInt(2, saveId);

		pstm.executeUpdate();
		
		String query1 = "UPDATE RANK SET points = ? where id = ?";
		PreparedStatement pstm1 = Variables.DB_CONN.prepareStatement(query1);
		
		int rankId = getRankIdByUserId(userId);
		pstm1.setInt(1, Integer.parseInt(points));
		pstm1.setInt(2, rankId);

		pstm1.executeUpdate();
		
		System.out.println("Rank id: " + rankId + "		Save id: " + saveId);
	}

	public String getUserById(int userId) throws SQLException {
		String query = "SELECT * FROM USERS WHERE id = ? ";
		PreparedStatement pstm = Variables.DB_CONN.prepareStatement(query);
		pstm.setInt(1, userId);

		ResultSet rs = pstm.executeQuery();

		String response = "";

		while (rs.next()) {
			response += rs.getString("username") + "<>|<>" + rs.getString("name") + "<>|<>" + rs.getString("avatar");
		}

		return response;
	}
	
	public int getUserIdByUsername(String username) throws SQLException {
		String query = "SELECT * FROM USERS WHERE username = ?";
		PreparedStatement pstm = Variables.DB_CONN.prepareStatement(query);
		pstm.setString(1, username.trim());

		ResultSet rs = pstm.executeQuery();
		int userId = 0;
		while (rs.next()) {
			userId = rs.getInt("id");
		}
		System.out.println("UserId by username: " + userId);
		return userId;
	}
}
