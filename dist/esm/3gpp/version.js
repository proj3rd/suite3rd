const NUMBER_CHARS = "0123456789abcdefghijklmnopqrstuvwxyz".split("");
/**
 * Parse a version number string in a filename to a semantic version,
 * e.g. `f10` to `[15, 1, 0]` and `163264` to `[16, 32, 64]`.
 *
 * See https://www.3gpp.org/specifications-technologies/specifications-by-series/file-name-conventions
 */
export function parse(versionString) {
    if (versionString.length !== 3 && versionString.length !== 6) {
        return undefined;
    }
    const version = [-1, -1, -1];
    const step = versionString.length / 3;
    for (let i = 0; i < 3; i++) {
        const substr = versionString.substring(i * step, (i + 1) * step);
        const coerced = +substr;
        if (Number.isFinite(coerced)) {
            version[i] = coerced;
            continue;
        }
        const index = NUMBER_CHARS.indexOf(substr);
        if (index === -1) {
            return undefined;
        }
        version[i] = index;
    }
    return version;
}
