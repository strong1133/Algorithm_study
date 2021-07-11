// 2021-06-26 프로그래머스 level01 - 문자열 다루기 기본
public class problem01 {

    public static boolean solution(String s) {
        if (s.length() == 4 || s.length() == 6) {
            try {
                int x = Integer.parseInt(s);
                return true;
            } catch (NumberFormatException e) {
                return false;
            }
        } else
            return false;
    }

    public static void main(String[] args) {
        boolean ans = solution("1111");
        System.out.println(ans);
    }
}