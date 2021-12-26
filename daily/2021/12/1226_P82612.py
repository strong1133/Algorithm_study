# 2021-12-26 부족한 금액 계산하기


def solution(p, m, c):
    res = 0;
    for i in range(1, c+1):
        res += p*i
    if res > m :
        return res - m
    else:
        return 0

print(solution(3, 20, 4))
