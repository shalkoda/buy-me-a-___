# Buy Me A ___

Funding pages that sound like you.

Buy Me A ___ is a customizable creator funding platform for builders, maintainers,
researchers, and indie creators. Creators can launch branded support pages such as
Buy Me A GPU, Buy Me A Taco, or Fund My GPU Cluster, then accept payments through
their own Stripe or PayPal accounts.

## Local Preview

This repo currently includes a dependency-free static prototype.

```sh
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Repository Model

This repository is source-available, not open source.

The product code is published for transparency, trust, and community feedback.
You may read it, fork it for personal evaluation, and contribute improvements
back to this repository, but you may not run a competing hosted service or use
the private product internals commercially without written permission.

The vector/icon contribution area is different: community-contributed assets in
`public/vectors/` are intended to be reusable and are licensed permissively so
people can contribute funding-page icons freely.

## What Is Public

- Vector/icon assets in `public/vectors/`
- Asset metadata and naming conventions
- Documentation
- Contribution guidelines

## What Is Protected

- Hosted SaaS operation
- Payment flow internals
- Abuse prevention systems
- Deployment infrastructure
- Admin tooling
- Any product code outside the explicitly permissive vector/icon area

## Safety

Creator page titles are user-generated content. Before a phrase can become a
public page, share image, widget, or checkout label, it should pass moderation
and security review. Internal safety architecture notes are intentionally kept
outside this public repository.

## License

See [LICENSE](LICENSE.md).

Short version:

- Product/platform code: source-available, commercial hosting restricted
- `public/vectors/`: MIT licensed for broad reuse and community contribution

## Contributing Icons

Icon contributions are welcome. Add SVG files to `public/vectors/` and include
matching metadata in `public/vectors/icons.json`.

Good icons are:

- Simple SVGs
- Original work or permissively licensed
- Clear at small sizes
- Free of trademarks unless you own the rights
- Useful for creator funding phrases like GPU, taco, matcha, robot arm, server,
  lab, camera, book, or startup

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.
