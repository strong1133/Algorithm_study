# 2021-12-13 프로그래머스 Level01 최소 직사각형

def solution(sizes):
    mx, my = 0, 0

    for xy in sizes:
        x, y = min(xy), max(xy)
        if mx * my == 0:
            mx, my = x, y
        else:
            mx, my = max(mx, x), max(my, y)
    return mx*my


print(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
