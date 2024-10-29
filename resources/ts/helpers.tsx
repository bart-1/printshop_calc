export const findElemntInJSONString = (
    element: string,
    list: string
): boolean => {
    let str = list.replaceAll(`\'`, '"');
    // str = list.replaceAll('\n', "");

    // const parseList = JSON.parse(str)
    const parseList: Array<string> = JSON.parse(str);
    for (let i = 0; i < parseList.length; i++) {
        if (parseList[i] === element) return true;
    }

    return false;
};

export const discontTester = (
    element: string,
    list: string | null,
    discount: number | null
): number => {
    if (
        list &&
        discount &&
        discount > 0 &&
        findElemntInJSONString(element, list)
    ) {
        const discountValueTransformer = (100 - discount) / 100;
        return discountValueTransformer;
    } else return 1;
};

/**It calculate how many products can be printed on specific sheet
 *
 * @param sheetH dimension of longer edge of print sheet
 * @param sheetW dimension of shorter edge of print sheet
 * @param productNettoH height of final product
 * @param productNettoW width of final product
 * @param safeSheetMargin safe margin of printer
 * @param bleed bleed added to product dimensions
 * @returns
 */

export const calcImposer = (
    sheetH: number,
    sheetW: number,
    productNettoH: number,
    productNettoW: number,
    safeSheetMargin = 10,
    bleed = 4
): number => {
    switch (true) {
        case sheetH - safeSheetMargin <= 0 || sheetW - safeSheetMargin <= 0:
            return 0;
        case productNettoH * productNettoW >
            (sheetH - safeSheetMargin) * (sheetW - safeSheetMargin):
            return 0;
    }

    const wImpose = Math.floor(sheetW / (productNettoW + bleed));
    const hImpose = Math.floor(sheetH / (productNettoH + bleed));
    const wImposeInverted = Math.floor(sheetH / (productNettoW + bleed));
    const hImposeInverted = Math.floor(sheetW / (productNettoH + bleed));

    if (wImpose * hImpose > wImposeInverted * hImposeInverted)
        return wImpose * hImpose;
    else return wImposeInverted * hImposeInverted;
};

export const findValueByThersholds = <T,>(
    array: T[],
    thersholdFromKeyName: keyof T,
    thersholdToKeyName: keyof T,
    valueToCompare: number,
    returnValueKeyName: keyof T
): number => {
    const findedValue = array.filter((el) => {
        if (
            Number(el[thersholdFromKeyName]) <= valueToCompare &&
            Number(el[thersholdToKeyName]) >= valueToCompare
        )
            return el;
    });
    
if(!findedValue[0] || !findedValue[0][returnValueKeyName]) return 0;

    return Number(findedValue[0][returnValueKeyName]);
};

export const isNameISOFormat = (name: string):boolean => {
    if (
        /^A|a[0-9]/.test(name) ||
        /^B|b[0-9]/.test(name) ||
        /^C|c[0-9]/.test(name) ||
        /^DL|dl/.test(name)
    )
        return true;
    else return false;
};
