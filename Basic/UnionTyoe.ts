type StringNumber = string | number;

type NumberOrUndefined = number | undefined;
type StringNumberOrUndefined = string | number | undefined;
type DataOrUndefined = Data | undefined

let stringOrNumber : StringOrNumber = 12233;
function print(input: string | undefined) {
    if (input) {
        console.log(input);
    } else {
        console.log("Please input something to print");
    }
}


print();
print("Hello world");