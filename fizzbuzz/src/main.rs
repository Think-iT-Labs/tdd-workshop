fn fizzbuzz() -> Vec<i32> {
    let numbers = vec![1; 100];
    return numbers
}

#[test]
fn should_return_100_numbers() {
    assert_eq!(fizzbuzz().len(), 100);
}