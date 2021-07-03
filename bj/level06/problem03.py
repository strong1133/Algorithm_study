# 2021-07-03 벡준_단계:06 == 1065번 셀프 넘


def solve(n):
    hansu = 0
    for i in range(1, n+1):
        if i <= 99:
            hansu += 1

        else:
            nums = list(map(int, str(i)))
            if nums[0] - nums[1] == nums[1] - nums[2]:
                hansu += 1
    return hansu


n = int(input())
print(solve(n))
