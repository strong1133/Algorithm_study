# 2021-12-25 정수 내림차순으로 배치하기


def solution(n):
    return  int(''.join(str(_) for _ in sorted(list(int(i) for i in str(n)), reverse=True)))

print(solution(118372))
