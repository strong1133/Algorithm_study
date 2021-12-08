
class Solution {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4 };
        int ans = solution(arr);
        System.out.println(ans);
    }

    public static int solution(int[] nums) {
        int ans = 0;

        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                for (int k = j + 1; k < nums.length; k++) {
                    int num = nums[i] + nums[j] + nums[k];
                    if (sosu(num)) {
                        ans++;
                    }
                }
            }
        }
        return ans;
    }

    public static boolean sosu(int num) {
        boolean chk = true;
        if (num == 2) {
            return chk;
        }
        for (int i = 2; i < num; i++) {
            if (num % i == 0) {
                chk = false;
                break;
            }
        }
        return chk;
    }

}