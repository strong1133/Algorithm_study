# 2021-06-15 벡준_단계:03 == 2753번 / 윤년

def Tool(a):
    if a % 4 == 0 and a % 100 != 0:
        return 1
    elif a % 4 == 0 and a % 400 == 0:
        return 1
    else:
        return 0


a = int(input())
if 1 <= a <= 4000:
    print(Tool(a))
