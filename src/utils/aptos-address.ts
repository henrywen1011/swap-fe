function isValidAptosAddress(address: string): boolean {
    const pattern: RegExp = /^(0x)[0-9A-Fa-f]{64}$/;
    return pattern.test(address);
}

export default isValidAptosAddress;