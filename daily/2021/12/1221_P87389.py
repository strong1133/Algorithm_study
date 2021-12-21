# 2021-12-21 나머지가 1이 되는 수  찾기
def solution(n):
    ans = n
    for i in range(1, n):
        if (n  % i == 1):
            ans = min(ans, i)
    return ans

print(solution(12))