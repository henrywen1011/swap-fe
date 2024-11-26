// src/types/wallet-address-validator.d.ts
declare module "wallet-address-validator" {
  export function validate(
    address: string,
    currency: string,
    networkType?: string
  ): boolean;
}
