# 2021-07-18 벡준_단계:10 == 10870번 / 피보나치 수 5


def solve(n):
    if n <= 1:
        return n
    return solve(n-1) + solve(n-2)


n = int(input())
print(solve(n))


# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597
