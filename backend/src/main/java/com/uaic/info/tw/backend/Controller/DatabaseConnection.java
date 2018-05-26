package com.uaic.info.tw.backend.Controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import com.uaic.info.tw.backend.Globals.Variables;

public class DatabaseConnection {
	private Connection connection;
	
	public DatabaseConnection() {
		connection = null;
	}

	public Connection createDatabaseConnection() throws SQLException {		
		if ( connection == null ) {
			try {
				Class.forName(Variables.MYSQL_CONNECTOR);
			} catch (ClassNotFoundException e) {
				System.out.println("MySql JDBC Driver not found.\n" +  e.getMessage());
			}

			try {
				this.connection = DriverManager.getConnection("jdbc:mysql://"+Variables.SERVER+":"+Variables.PORT + "/" + Variables.DBNAME, Variables.USERNAME, Variables.PASSWORD);
				
				System.out.println( "Successfull connection.");
				return connection;
			}catch(SQLException e) {
				System.out.println("Connection Failed! Check output console.\n" +  e.getMessage());
			}
		} else if( connection.isClosed() ) {
			try {
				Class.forName("com.mysql.jdbc.Driver");
			} catch (ClassNotFoundException e) {
				System.out.println( "MySql JDBC Driver not found.\n"+  e.getMessage());
			}

			try {
				this.connection = DriverManager.getConnection("jdbc:mysql://"+Variables.SERVER+":"+Variables.PORT + "/" + Variables.DBNAME, Variables.USERNAME, Variables.PASSWORD);
				System.out.println( "Successfull connection." );
				return connection;
			}catch(SQLException e) {
				System.out.println( "Connection Failed! Check output console.\n" + e.getMessage());
			}
		}
		return connection;
	}
	
	public void closeConnection() {
		try {
			connection.close();
			System.out.println( "Connection closed.\n");
		} catch (SQLException e) {
			System.out.println(  "Closing connection...\n" + e.getMessage());
		}
	}
	
	public Connection getConnection() {
		return connection;
	}
}
