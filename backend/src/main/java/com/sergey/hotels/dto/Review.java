package com.sergey.hotels.dto;

public class Review {
    private String userName;
    private int raiting;
    private boolean approved;

    protected Review() {}

    public Review(String userName, int raiting, boolean approved) {
        this.userName = userName;
        this.raiting = raiting;
        this.approved = approved;
    }

    public String getUserName() {
        return userName;
    }

    public int getRaiting() {
        return raiting;
    }

    public boolean isApproved() {
        return approved;
    }

    @Override
    public String toString() {
//        System.out.println(userName);
//        System.out.println(raiting);
//        System.out.println(approved);
//        return userName;
        String str = "{ userName: " + userName + ",\n" +
                     "raiting: " + raiting + ",\n" +
                     "approved: " + approved + " }";
        return str;
    }
}
