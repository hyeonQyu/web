import { action, makeObservable, observable } from 'mobx';

class CounterStore {
    // 모든 state 값은 @observable 데코레이터를 가짐
    @observable
    _count = 5;

    // mobx6버전에서 데코레이터 문법을 지원하지 않기 때문에 다음 코드가 필요
    constructor() {
        makeObservable(this);
    }

    get count() {
        return this._count;
    }

    // state를 변경하는 함수는 @action
    @action
    increment() {
        this._count++;
    }

    @action
    decrement() {
        this._count--;
    }
}

export default new CounterStore();
