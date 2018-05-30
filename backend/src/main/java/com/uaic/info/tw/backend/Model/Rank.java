package com.uaic.info.tw.backend.Model;

public class Rank {
	private int rankId;
	private int userId;
	private String username;
	private long points;
	
	public Rank(int rankId, int userId, String username, long points) {
		super();
		this.rankId = rankId;
		this.userId = userId;
		this.username = username;
		this.points = points;
	}
	
	public Rank(int userId, String username, long points) {
		super();
		this.userId = userId;
		this.username = username;
		this.points = points;
	}

	public int getRankId() {
		return rankId;
	}

	public void setRankId(int rankId) {
		this.rankId = rankId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public long getPoints() {
		return points;
	}

	public void setPoints(long points) {
		this.points = points;
	}
}
