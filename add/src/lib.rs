fn add(input: &str) -> i32 {
    if input.is_empty() {
        return 0;
    }

    let numbers: Vec<&str> = if input.starts_with("//") {
        input[4..].split(input.chars().nth(2).unwrap()).collect()
    } else {
        input.split(|c| [',', '\n'].contains(&c)).collect()
    };

    return numbers.iter()
        .map(|token| token.parse().expect("parse to int"))
        .reduce(|a, b| a + b).unwrap();
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn should_return_0_with_empty_input() {
        assert_eq!(add(""), 0)
    }

    #[test]
    fn should_return_the_input_number() {
        assert_eq!(add("4"), 4)
    }

    #[test]
    fn should_sum_two_numbers() {
        assert_eq!(add("1,2,3"), 6)
    }

    #[test]
    fn should_support_newline_as_separator() {
        assert_eq!(add("1\n2,3"), 6)
    }

    #[test]
    fn should_support_custom_delimiter() {
        assert_eq!(add("//;\n1;2;3"), 6)
    }

}