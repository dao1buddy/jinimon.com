# Deploying jinimon.com

The site is hosted on GitHub Pages from the public repo `dao1buddy/jinimon.com` (branch `main`, root folder). Every push to `main` redeploys in about a minute.

## One-time DNS setup at GoDaddy

GoDaddy → My Products → jinimon.com → **DNS** (Manage DNS). Delete the existing `A` record for `@` (it points to GoDaddy's parking page) and the existing `CNAME` for `www` if present, then add:

| Type  | Name | Value                  | TTL     |
|-------|------|------------------------|---------|
| A     | @    | 185.199.108.153        | 600     |
| A     | @    | 185.199.109.153        | 600     |
| A     | @    | 185.199.110.153        | 600     |
| A     | @    | 185.199.111.153        | 600     |
| CNAME | www  | dao1buddy.github.io    | 600     |

Leave the nameservers as they are (ns63/ns64.domaincontrol.com). Do not add "Forwarding" in GoDaddy; GitHub handles the www → apex redirect.

## After DNS propagates (minutes to a few hours)

1. GitHub → repo → Settings → Pages: it will show "DNS check successful".
2. Tick **Enforce HTTPS** once the certificate is issued (GitHub provisions it automatically after the DNS check passes; usually within an hour).
3. Open https://jinimon.com and https://www.jinimon.com.

## Updating the site

Edit the files in this folder, then:

```
git add -A && git commit -m "Update copy" && git push
```

## Files that never go public

`PRODUCT.md`, `DESIGN.md` and `.impeccable/` are in `.gitignore` and stay on this machine only.
