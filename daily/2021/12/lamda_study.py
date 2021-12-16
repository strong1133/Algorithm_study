func = lambda x: x+1

print(func(4))



def my_key(strings):
    return strings[3]

target = ['abcd', 'badc', 'cdab', 'dcba']
print(sorted(target, key=my_key))

