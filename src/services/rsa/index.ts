import { getRandomNumber } from "@/utils/get-random-number";
import { PRIMES } from "./primes";
import { PATTERN } from "./pattern";

// GeeksForGeeks

export class RSA {
  public e: bigint;
  public n: bigint;

  constructor() {
    const { e, n } = this.generateKeys();

    this.e = e;
    this.n = n;
  }

  public encrypt(m: bigint): bigint {
    return this.power(m, this.e, this.n);
  }

  private generateKeys() {
    const first_i = getRandomNumber(0, PRIMES.length - 1);
    let second_i = getRandomNumber(0, PRIMES.length - 1);

    while (second_i == first_i) {
      second_i = getRandomNumber(0, PRIMES.length - 1);
    }

    const p = BigInt(PRIMES[first_i]);
    const q = BigInt(PRIMES[second_i]);

    const n = p * q;

    const phi = (p - BigInt(1)) * (q - BigInt(1));

    let e;
    for (e = BigInt(2); e < phi; e++) {
      if (this.gcd(e, phi) === BigInt(1)) break;
    }

    const d = this.modInverse(e, phi);

    return { e, d, n };
  }

  private gcd(a: bigint, b: bigint) {
    while (b !== BigInt(0)) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

  private power(base: bigint, expo: any, m: any) {
    let res = BigInt(1);
    base = BigInt(base) % BigInt(m);
    while (expo > 0) {
      if (expo & BigInt(1)) {
        res = (res * base) % BigInt(m);
      }
      base = (base * base) % BigInt(m);
      expo = Math.floor(Number(expo) / 2);
      expo = BigInt(expo);
    }
    return res;
  }

  private modInverse(e: bigint, phi: bigint) {
    e = BigInt(e);
    phi = BigInt(phi);
    for (let d = BigInt(2); d < phi; d++) {
      if ((e * d) % phi === BigInt(1)) {
        return d;
      }
    }
    return -1;
  }

  static convertCharToNumeric(char: string): number {
    return PATTERN[char as keyof typeof PATTERN];
  }
}
