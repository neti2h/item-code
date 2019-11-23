package dishdetect;

//import com.baidu.ai.aip.utils.Base64Util;
//import com.baidu.ai.aip.utils.FileUtil;
//import com.baidu.ai.aip.utils.HttpUtil;

import java.net.URLEncoder;
public class DishAdd {
    public static String dishAdd() {
        // ����url
        String url = "https://aip.baidubce.com/rest/2.0/image-classify/v1/realtime_search/dish/add";
        try {
            // �����ļ�·��
            String filePath = "C:\\Users\\ASUS\\Pictures\\Camera Roll\\300.jpg";
            byte[] imgData = FileUtil.readFileByBytes(filePath);
            String imgStr = Base64Util.encode(imgData);
            String imgParam = URLEncoder.encode(imgStr, "UTF-8");

            String param = "brief=" + 1 + "&image=" + imgParam + "&sub_lib=" + "17785614";

            // ע�������Ϊ�˼򻯱���ÿһ������ȥ��ȡaccess_token�����ϻ���access_token�й���ʱ�䣬 �ͻ��˿����л��棬���ں����»�ȡ��
            String accessToken = "24.12b11758786f98e16045324226f8dcc2.2592000.1576489792.282335-17785614";

            String result = HttpUtil.post(url, accessToken, param);
            System.out.println(result);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static void main(String[] args) {
        DishAdd.dishAdd();
    }
}
