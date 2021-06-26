import java.util.List;

// 2021-06-26 프로그래머스 level02 - 124 나라의 숫자

public class problem02 {

    public static String solution(int n) {
        String[] nums = { "4", "1", "2" };
        String ans = "";

        int num = n;

        while (num > 0) {
            int rem = num % 3;
            num /= 3;

            if (rem == 0)
                num--;

            ans = nums[rem] + ans;
        }
        return ans;
    }

    public static void main(String[] args) {
        String ans = solution(5);
        System.out.println(ans);
    }
}