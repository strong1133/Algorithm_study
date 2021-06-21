# 2021-06-21 벡준_단계:07 == 5622번 / 다이얼

def solve():
    nums = {i for i in range(1, 10)}
    nums.add(1, list('A', 'B', 'C'))
    print(nums)


solve()


# dial = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
# a = input()
# ret = 0
# for j in range(len(a)):
#     for i in dial:
#         if a[j] in i:
#             ret += dial.index(i)+3
# print(ret)
