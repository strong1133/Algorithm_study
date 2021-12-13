# 2021-12-13 프로그래머스 Level01 약수의 개수와 덧셈

def solution(l, r):
    ans = 0
    for i in range(l, r+1):
        cnt = counting(i)
        if oddCheck(cnt):
            ans += i
        else:
            ans -= i
    return ans


def counting(x):
    cnt = 0
    for i in range(1, x+1):
        if x % i == 0:
            cnt += 1
    return cnt


def oddCheck(x):
    if x % 2 == 0:
        return True
    return False


print(solution(24, 27))
