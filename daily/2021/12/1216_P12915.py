# 2021-12-16 문자열 내맘대로 정렬
def solution(strings,n):
    '''strings의 문자열들을 n번째 글자를 기준으로 정렬해서 return하세요'''
    return sorted(sorted(strings), key=lambda strings:strings[n])


print(solution(["sun", "bed", "car"],0))



