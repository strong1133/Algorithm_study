# 2021-06-15 벡준_단계:02 == 1330번 / 두 수 비교하기

def Tool(a, b):
    if a > b:
        return ">"
    elif a < b:
        return"<"
    else:
        return"=="


a, b = list(map(int, input().split()))

print(Tool(a, b))
