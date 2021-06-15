# 2021-06-15 벡준_단계:03 == 2884번 / 알람 시계

def Tool(h, m):
    if m >= 45:
        print(h, m-45)
    else:
        if h <= 0:
            h = 24
        print(h-1, m+15)


h, m = list(map(int, input().split()))
Tool(h, m)
