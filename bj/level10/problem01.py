# 2021-07-14 벡준_단계:10 == 10872번 / 팩토리얼


def solve(n):
    ans = 1
    for i in range(1, n+1):
        ans *= i
    return ans


n = int(input())
print(solve(n))


# 5!
# 1 * 2 * 3 * 4 * 5 = 120
