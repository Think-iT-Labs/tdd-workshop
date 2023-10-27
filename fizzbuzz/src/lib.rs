fn fizzbuzz() -> Vec<usize> {
    let mut numbers = vec![1; 100];
    for num in 0..99 {
        numbers[num] += num
    }
    return numbers
}

#[test]
fn should_return_100_numbers() {
    assert_eq!(fizzbuzz().len(), 100);
}
#[test]
fn should_return_43_at_index_42() {
    assert_eq!(fizzbuzz()[42] ,43)
}