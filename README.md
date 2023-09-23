# suite3rd

3GPP development suite

## CLI

### get-spec

Download 3GPP spec

```sh
npx suite3rd get-spec <specNumber> <release> <date>
```

- `specNumber`, e.g. `38.331`
- `release`, e.g. 15, 16, 17, 18 and so on
- `date`, e.g. `2023-06`

### asn1 extract

Extract ASN.1 from an MS word file or a plaint text file

```sh
npx suite3rd asn1 extract <filepath> [--exclude-non-tag-comment]
```

- `--exclude-non-tag-comment`: Whether to exclude a comment which is definitely not a 'Need code' or 'Conditional tag'
