# Contributing

Thanks for helping make Buy Me A ___ more useful.

This project accepts community contributions primarily for vector/icon assets,
metadata, docs, and small fixes. The product itself is source-available rather
than open source, so contributions outside the vector area may be accepted at
the maintainers' discretion.

## Icon Contributions

Add icons to:

```text
public/vectors/
```

Then update:

```text
public/vectors/icons.json
```

Each icon should include:

- `id`: stable lowercase identifier, using hyphens
- `label`: human-readable name
- `keywords`: phrases that should find this icon
- `titleMatches`: popular funding-page titles this icon should match
- `file`: SVG filename
- `license`: license for the SVG
- `provider`: original icon provider or contributor name
- `providerUrl`: source, profile, or provider URL when available

Example:

```json
{
  "id": "gpu",
  "label": "GPU",
  "keywords": ["gpu", "graphics card", "ai", "compute", "cluster"],
  "titleMatches": ["Buy Me A GPU", "Fund My GPU Cluster"],
  "file": "gpu.svg",
  "license": "MIT",
  "provider": "SVG Repo",
  "providerUrl": "https://www.svgrepo.com"
}
```

## SVG Guidelines

- Use original work or assets you have permission to contribute.
- Prefer simple, single-file SVGs.
- Keep SVGs readable at small sizes.
- Avoid embedded raster images.
- Avoid trademarks and brand logos unless you own the rights.
- Remove scripts, event handlers, external references, and unnecessary metadata.
- Use descriptive filenames like `robot-arm.svg`, `matcha.svg`, or `server.svg`.
- Credit the original provider or artist in `icons.json` for any non-original SVG.
- Map each icon to likely page titles with `titleMatches` when importing asset data.

## Product Contributions

Before making larger product changes, open an issue describing the change and
why it belongs in the public repository.

Product/platform code is governed by the source-available license in
[LICENSE.md](LICENSE.md), not by the MIT terms that apply to `public/vectors/`.
