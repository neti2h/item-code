package home.Servlet;

import java.io.IOException;
import java.io.Writer;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dishdetect.Dish;

/**
 * Servlet implementation class DishDetctServlet
 */
//���Ƿ��ʵ�servlet·��
@WebServlet("/DishDetctServlet")
public class DishDetctServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DishDetctServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		 //get��������Ϣ���洢�ϴ�������ͼƬ
        //��ȡ������Ϣ		,�޸ĺ�������Ϊ����,����ȥ�ոս��յ���ͼƬ��ַ
		response.setContentType("application/x-www-form-urlencoded");
		String result=Dish.dish();
		response.setContentType("text/html;charset=utf-8");          
        // ������Ӧͷ����ajax�������  
        response.setHeader("Access-Control-Allow-Origin", "*");  
        // �Ǻű�ʾ���е��������󶼿��Խ���  
        response.setHeader("Access-Control-Allow-Methods", "GET,POST");  

        //��ȡ΢��С����get�Ĳ���ֵ����ӡ
        String message = request.getParameter("message");
        //System.out.println("message="+message);

       // System.out.print(Dish.dish());
        //����ֵ��΢��С����
        Writer out = response.getWriter(); 
        out.write("���յ�����Ϣ��"+message+"���ص���Ϣ��"+result);
        //out.write(result);
        out.flush();   
	}
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
