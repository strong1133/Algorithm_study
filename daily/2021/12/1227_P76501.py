# 2021-12-27 음양 더하기

def solution(a, s):
    res =0
    for i in range(0,len(a)):
        if (s[i]):
            res += a[i]
        else:
            res -= a[i]
    return res

a = [4,7,12]
s = [True, False, True]
print(solution(a,s))
