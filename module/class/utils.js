function foo() {
    return 'Utils::foo()';
}

const data = ['foo', 'bar', 'baz'];

const m = ['Jan', 'Fev', 'Mar'];

export function bar(){
    return 'utils::bar()';
}

export function baz(){
    return 'utils::baz()';
}

export { foo, data, m as month }
