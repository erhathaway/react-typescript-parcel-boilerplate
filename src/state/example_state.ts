import {runInAction, decorate, observable, computed} from 'mobx';

class ExampleState {
    public internalAttributeState?: boolean;

    constructor(startingState = true) {
        runInAction(() => {
            this.internalAttributeState = startingState;
        });
    }

    public toggleAttributeState = () => {
        runInAction(() => {
            this.internalAttributeState = !this.someAttribute;
        });
    };

    get someAttribute() {
        return this.internalAttributeState;
    }
}

decorate(ExampleState, {
    internalAttributeState: observable,
    someAttribute: computed
});

export default ExampleState;
