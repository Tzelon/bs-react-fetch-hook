[@bs.module "react-fetch-hook"] external useFetch: (string) => (bool, 'a) = "";

let (isLoading, data) = useFetch("https://google.com");