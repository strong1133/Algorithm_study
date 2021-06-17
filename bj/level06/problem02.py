# 2021-06-17 벡준_단계:06 == 4673번 / 셀프 넘버


def solve():
    numbers = set(range(1, 10000))
    self_set = set()

    for num in numbers:
        for n in str(num):
            num += int(n)
        self_set.add(num)

    ans = numbers - self_set

    for i in sorted(ans):
        print(i)


solve()
