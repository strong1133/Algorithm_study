# 2021-12-06 프로그래머스 Level01 소수 만들기
from itertools import combinations


def is_prime(x):
    for i in range(2, x):
        if x % i == 0:
            return False
    return True


def solution(a):

    ans = 0
    arr = list(combinations(a, 3))
    print(arr)
    for n1, n2, n3 in arr:
        if is_prime(n1+n2+n3):
            ans += 1
    return ans


a = [1, 2, 3, 4]
b = [1, 2, 7, 6, 4]
print(solution(b))
