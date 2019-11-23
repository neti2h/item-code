package dishdetect;

import java.net.URLEncoder;

public class Dish {
    public static String dish() {
        // ����url
        String url = "https://aip.baidubce.com/rest/2.0/image-classify/v2/dish";
        String result="";
        try {
            // �����ļ�·��
            String filePath = "C:\\Users\\ASUS\\Pictures\\Camera Roll\\300.jpg";
            //��ȡͼƬΪbyte������
            byte[] imgData = FileUtil.readFileByBytes(filePath);
            //�Դ���byte�������ͼƬ����base64�ļ��ܡ�
            String imgStr = Base64Util.encode(imgData);
            //�ٽ���URL�ı��롣
            String imgParam = URLEncoder.encode(imgStr, "UTF-8");
            String param = "image=" + imgParam + "&top_num=" + 5;
            // ע�������Ϊ�˼򻯱���ÿһ������ȥ��ȡaccess_token�����ϻ���access_token�й���ʱ�䣬 �ͻ��˿����л��棬���ں����»�ȡ��
            String accessToken = "24.12b11758786f98e16045324226f8dcc2.2592000.1576489792.282335-17785614";
            //����ٶȵķ��������ϴ�ͼƬ��Ϣ����ȡʶ������
            result = HttpUtil.post(url, accessToken, param);
            System.out.println(result);
          //  return result;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    public static void main(String[] args) {
    	Dish.dish();
    }
}
