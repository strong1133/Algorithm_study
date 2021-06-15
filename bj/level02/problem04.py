# 2021-06-15 벡준_단계:03 == 14681번 / 사분면 고르기

def Tool(a, b):
    if a > 0:
        if b > 0:
            return 1
        if b < 0:
            return 4
    elif a < 0:
        if b > 0:
            return 2
        if b < 0:
            return 3


a = int(input())
b = int(input())
print(Tool(a, b))
