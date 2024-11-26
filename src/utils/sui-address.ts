function isValidSuiAddress(address: string): boolean {
    const pattern: RegExp = /^(0x)[0-9A-Za-z]{64}$/;
    return pattern.test(address);
}

export default isValidSuiAddress;