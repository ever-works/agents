# Playbook — Directory submission run

How to submit one product to many directories without errors,
duplicates or spam signals.

## Order of work

1. **Easy and fitting first.** Spend the first two or three hours on
   every `easy` platform in the plan; they are permanent listings for a
   few minutes each. Then the `medium` ones, then the `hard` ones.
2. **Weight by value.** Within a difficulty, go by fit, then traffic,
   then link type. Permanent links that pass authority (`dofollow`)
   help search over time; `nofollow` listings still send visitors.
3. **Ship, then improve.** A live listing with good copy beats a
   perfect listing that never goes out. Most listings can be edited
   later.

## Finding the submit page

Use `submit_url` when the database has one. Otherwise look for
"Submit", "Add tool", "List your product", "Suggest", "Get listed",
"For vendors" or "Developers" in the header and footer, or try
`/submit` on the domain. If the platform's status says it blocks
automated clients, it needs a real browser session: treat it as
`assisted`.

## Field map (kit field to common platform fields)

| Launch kit field       | Common field names on platforms                   |
| ---------------------- | ------------------------------------------------- |
| Product name           | Name, Tool name, App name, Title                  |
| Website with UTM       | URL, Website, Link, Homepage                      |
| Tagline (60 chars)     | Tagline, Slogan, Headline, Short description      |
| One-liner (10 words)   | Summary, One-liner, Pitch                         |
| Description 50 words   | Short description, Excerpt, Meta description      |
| Description 100 words  | Description, About                                |
| Description 200 words  | Long description, Details, Full description       |
| Features               | Features, Key features, Highlights                |
| Categories, tags       | Category, Tags, Topics, Use cases                 |
| Pricing line           | Pricing, Pricing model, Starting price, Free plan |
| Alternatives           | Alternatives, Competitors, Similar tools          |
| Logo                   | Logo, Icon, Thumbnail                             |
| Screenshots            | Screenshots, Gallery, Images                      |
| Demo video             | Video URL, Demo, YouTube link                     |
| Maker names and links  | Founder, Maker, Contact name, Social links        |
| Contact email          | Email (for verification), Contact                 |
| Repository and license | GitHub URL, Source code, License                  |
| Platforms              | Platforms, Operating systems, Available on        |
| Launch offer           | Deal, Coupon, Discount for users                  |

Asset sizes that cover most platforms: square logo 512x512 PNG (also
export 240x240), screenshots 1270x760 or 1920x1080, a social preview
image 1200x630, a demo video under two minutes hosted on a video site.

## Copy rules

- Use the kit text. Rotate between the 50, 100 and 200-word versions
  by field size; adapt the first sentence to the directory's category.
- Keep name, URL and pricing identical everywhere. Search engines and
  buyers both notice drift.
- Tag every link: `utm_source=<platform id>`. Some platforms strip
  query strings; note that in the tracker and rely on the referrer.

## Pacing and hygiene

- At most about ten form submissions per hour, from the owner's normal
  session. Bursts of identical submissions look like spam.
- Use one launch inbox for verification emails (an alias such as
  launch@ on the product domain) and clear it after each batch.
- Decline paid upsells by default. If a platform only lists paid,
  record the price in the plan for an owner decision.
- Some directories ask for a backlink or badge in return. Record it;
  the owner decides. Never add hidden links.
- Stop on any page that asks for a password, a payment method, a
  CAPTCHA, terms acceptance or identity documents. That step belongs to
  a person.

## Tracker statuses

`planned` → `prepared` → `submitted` → `pending` → `live`, or
`rejected` / `skipped`. Record the date, who submitted, the listing or
pull request URL, any cost, and the next check date. Never submit a
row that is already `submitted`, `pending` or `live`.

## Common rejection reasons

- The product is not live, or the link lands on a waitlist only.
- Wrong category, or the product does not fit the directory's niche.
- Copy reads as an ad (superlatives, all caps, keyword stuffing).
- Missing logo or screenshots, or broken images.
- Duplicate of an existing listing (claim the existing one instead).
