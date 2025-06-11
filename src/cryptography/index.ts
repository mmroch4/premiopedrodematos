import { getRandomNumber } from '@/utils/get-random-number';

const PRIMES = [
  7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
  101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193,
  197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307,
  311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421,
  431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547,
  557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659,
  661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797,
  809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929,
  937, 941, 947, 953, 967, 971, 977, 983, 991, 997,
];

export class Cryptography {
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
    console.log('------ AQUI --------:', d)
    return { e, d, n };
  }

  private gcd(a: bigint, b: bigint) {
    while (b !== BigInt(0)) {
      let t = b;
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
}
