# 2021-07-11 벡준_단계:08 == 2292번 / 벌집

def solve(n):
    cnt = 1
    cnt_six = 6
    count = 1
    while n > cnt:
        count += 1
        cnt += cnt_six
        cnt_six += 6
    return count


n = int(input())

print(solve(n))
