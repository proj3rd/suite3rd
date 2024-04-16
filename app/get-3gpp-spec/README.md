# get-3gpp-spec

A command line tool to download a 3GPP spec

## Usage

```sh
npx get-3gpp-spec <spec number> latest
```

Download the latest (with the highest version) spec of the given spec number

```sh
npx get-3gpp-spec <spec number> <release> <yyyy-mm>
```

- A wild card `*` can be used for `<release>` and/or `<yyyy-mm>`
- If the wild card is used, it displays a list of corresponding specs instead of downloading the specs

### Example

```sh
npx get-3gpp-spec 38.331 17 2022-09
```

**Explanation**: It tries to download Rel-17 version of 3GPP TS 38.331 which was published between September 2022 to November 2022.

## Sponsor

If you find this is useful, please consider to [buy me a coffee](https://www.buymeacoffee.com/somidad).
