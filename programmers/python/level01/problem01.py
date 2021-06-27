
# 2021-06-27 프로그래머스 level02 - 124 나라의 숫자 -> 파이썬 풀이

def solve(n):
    arr = ["4", "1", "2"]
    ans = ""

    while(n > 0):
        idx = int(n % 3)
        n = n//3

        if idx == 0:
            n -= 1

        ans = arr[idx] + ans

    print(ans)


n = 5
solve(n)
