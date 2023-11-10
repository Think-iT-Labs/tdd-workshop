fn fizz() -> Vec<String> {
    let mut numbers = vec![1; 100];
    for num in 0..99 {
        numbers[num] += num
    }

    return numbers.iter().map(|n| if n % 3 == 0 {String::from("fizz")} else { n.to_string()}).collect();
}

#[test]
fn should_return_100_numbers() {
    assert_eq!(fizz().len(), 100);
}
#[test]
fn should_return_43_at_index_42() {
    assert_eq!(fizz()[42] ,"43")
}

#[test]
fn should_return_fizz_if_is_multiple_of_3() {
    assert_eq!(fizz()[2], "fizz")
}