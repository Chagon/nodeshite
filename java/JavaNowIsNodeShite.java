import java.net.Socket;
import java.net.ServerSocket;
import java.net.SocketTimeoutException;
import java.io.DataInputStream;
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
            socket.setSoTimeout(10000);
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

    public void run()
    {
        while (true)
        {
            try
            {
                Socket server = socket.accept();
                DataInputStream in =
                    new DataInputStream(server.getInputStream());
                System.out.println(in.readUTF());
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
