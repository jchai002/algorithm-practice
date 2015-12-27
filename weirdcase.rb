# Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
#
# The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

def weirdcase string
  words=string.split(' ')
  result=[]
  words.each do |word|
    arr=word.split('')
    arr.each_with_index do |e,i|
      if i.even?
        arr[i]=e.upcase
      else
        arr[i]=e.downcase
      end
    end
    result << arr.join
  end
  result.join(' ')
end
