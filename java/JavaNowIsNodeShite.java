import java.net.Socket;
import java.net.ServerSocket;
import java.net.SocketTimeoutException;
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.PrintStream;
import java.io.IOException;

public class JavaNowIsNodeShite extends Thread
{
    private ServerSocket socket;

    public JavaNowIsNodeShite(int port)
    {
        socket = null;
        try
        {
            socket = new ServerSocket(port);
            //socket.setSoTimeout(10000);
        }
        catch (SocketTimeoutException exception)
        {
            System.err.println(exception);
        }
        catch (IOException exception)
        {
            System.err.println(exception);
        }
    }

    @Override
    public void run()
    {
        while (true)
        {
            try
            {
                Socket server = socket.accept();

                InputStreamReader in =
                    new InputStreamReader(server.getInputStream());
                BufferedReader out =
                    new BufferedReader(in);

                String output = out.readLine();
                System.out.println(output);

                PrintStream ps = new PrintStream(server.getOutputStream());
                ps.println(output.toString());

                //(server.getOutputStream());

                //out.writeBytes("Blergh");
                //server.close();
            }
            catch (SocketTimeoutException exception)
            {
                System.err.println(exception);
            }
            catch (IOException exception)
            {
                System.err.println(exception);
                break;
            }
        }
    }

    public static void main(String[] args)
    {
        int port = Integer.parseInt(args[0]);
        Thread thread = new JavaNowIsNodeShite(port);
        thread.start();
    }
}
