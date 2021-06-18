# 2021-06-18 벡준_단계:06 == 11720번 / 숫자의 합

def solve(b):
    ans = sum(int(i) for i in str(b))
    return ans


a = int(input())
b = input()
print(solve(b))
