package dishdetect;

//package com.baidu.ai.aip.auth;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.Map;


public class AuthService {

    public static String getAuth() {
        // ������ȡ�� API Key ����Ϊ��ע���
        String clientId = "oy3wT0LKYHBEDn9ToPTNSox2";
        // ������ȡ�� Secret Key ����Ϊ��ע���
        String clientSecret = "M3ZNrKjxUbAy22hofwTu0MCk8N8mVqvE";
        return getAuth(clientId, clientSecret);
    }
    public static String getAuth(String ak, String sk) {
        // ��ȡtoken��ַ
        String authHost = "https://aip.baidubce.com/oauth/2.0/token?";
        String getAccessTokenUrl = authHost
                // 1. grant_typeΪ�̶�����
                + "grant_type=client_credentials"
                // 2. ������ȡ�� API Key
                + "&client_id=" + ak
                // 3. ������ȡ�� Secret Key
                + "&client_secret=" + sk;
        try {
            URL realUrl = new URL(getAccessTokenUrl);
            // �򿪺�URL֮�������
            HttpURLConnection connection = (HttpURLConnection) realUrl.openConnection();
            connection.setRequestMethod("GET");
            connection.connect();
            // ��ȡ������Ӧͷ�ֶ�
            Map<String, List<String>> map = connection.getHeaderFields();
            // �������е���Ӧͷ�ֶ�
            for (String key : map.keySet()) {
                System.err.println(key + "--->" + map.get(key));
            }
            // ���� BufferedReader����������ȡURL����Ӧ
            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String result = "";
            String line;
            while ((line = in.readLine()) != null) {
                result += line;
            }
            System.err.println("result:" + result);
            JSONObject jsonObject = new JSONObject(result);
            String access_token = jsonObject.getString("access_token");
            return access_token;
        } catch (Exception e) {
            System.err.printf("��ȡtokenʧ�ܣ�");
            e.printStackTrace(System.err);
        }
        return null;
    }
    public static void main(String args[]){
    	String a=AuthService.getAuth();
    	System.out.print(a);
    }
    //access_token:24.12b11758786f98e16045324226f8dcc2.2592000.1576489792.282335-17785614
}
