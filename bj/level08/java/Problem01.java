import java.util.Scanner;

public class Problem01 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int A = sc.nextInt();
        int B = sc.nextInt();
        int C = sc.nextInt();

        if (C <= B) {
            System.out.println("-1");
        } else {
            System.out.println(A/(C-B)+1);
        }

    }
}

// A + Bn = Cn
// a = cn - bn
// a = (c-b)n
// n = a/c-b
//