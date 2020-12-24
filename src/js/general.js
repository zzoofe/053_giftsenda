export {general}

const general = {
    choiceInit: function () {
        console.log(document.querySelectorAll(`.js-choice`));
        document.querySelectorAll(`.js-choice`).forEach(function (e) {
            // console.log(1);
            let choice = new Choices(e, {
                searchEnabled: false,
                searchChoices: false,
                itemSelectText: ``,
                callbackOnInit: () => {
                    const drop = e.attributes[0].ownerElement.parentElement.nextSibling
                    // const scroll = new SimpleBar(drop)
                },
            })
        });
    }
};